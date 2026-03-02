#!/usr/bin/env node

import { GoogleGenAI } from "@google/genai";
import { parseArgs } from "node:util";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, extname } from "node:path";

const { values } = parseArgs({
  options: {
    prompt: { type: "string" },
    output: { type: "string" },
    "aspect-ratio": { type: "string", default: "1:1" },
    reference: { type: "string", multiple: true, default: [] },
  },
  strict: true,
});

if (!values.prompt || !values.output) {
  console.error(JSON.stringify({ success: false, error: "Missing required --prompt and --output flags" }));
  process.exit(1);
}

const apiKey = process.env.GOOGLE_AI_API_KEY;
if (!apiKey) {
  console.error(JSON.stringify({ success: false, error: "GOOGLE_AI_API_KEY environment variable is not set" }));
  process.exit(1);
}

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  const map = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif" };
  return map[ext] || "image/png";
}

async function main() {
  const ai = new GoogleGenAI({ apiKey });

  // Build content parts: reference images first, then text prompt
  const parts = [];

  for (const refPath of values.reference) {
    const imageData = readFileSync(refPath);
    parts.push({
      inlineData: {
        mimeType: getMimeType(refPath),
        data: imageData.toString("base64"),
      },
    });
  }

  parts.push({ text: values.prompt });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: parts,
    config: {
      responseModalities: ["TEXT", "IMAGE"],
      imageConfig: {
        aspectRatio: values["aspect-ratio"],
      },
    },
  });

  // Extract image and optional description from response
  let description = "";
  let imageFound = false;

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      description += part.text;
    } else if (part.inlineData) {
      const buffer = Buffer.from(part.inlineData.data, "base64");
      mkdirSync(dirname(values.output), { recursive: true });
      writeFileSync(values.output, buffer);
      imageFound = true;
    }
  }

  if (!imageFound) {
    console.log(JSON.stringify({ success: false, error: "No image in response", description }));
    process.exit(1);
  }

  console.log(JSON.stringify({ success: true, output: values.output, description }));
}

main().catch((err) => {
  console.log(JSON.stringify({ success: false, error: err.message }));
  process.exit(1);
});
