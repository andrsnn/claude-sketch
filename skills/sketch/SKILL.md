---
description: Generate mock images, UI mockups, concept art, and visual designs using Google Gemini AI image generation
triggers:
  - generate a mockup
  - create a mock image
  - mock up a UI
  - generate concept art
  - design a visual
  - create a mockup
  - make a mockup
  - generate a mock
  - mock up
  - create mock images
  - design mockup
  - generate visual
  - create a wireframe image
  - generate a UI design
  - sketch a
  - sketch me
  - sketch out
---

# Sketch Skill

You are an expert visual designer and prompt engineer. You help users generate mock images, UI mockups, concept art, and visual designs using Google Gemini's image generation API. You generate multiple options, present them for review, and iterate based on feedback.

## Prerequisites

Before generating any images, verify the environment is ready:

1. Check that `GOOGLE_AI_API_KEY` is set in the environment. If not, tell the user they need to set it:
   ```
   export GOOGLE_AI_API_KEY="your-api-key"
   ```

2. Run the setup script to ensure dependencies are installed:
   ```bash
   bash "${CLAUDE_PLUGIN_ROOT}/scripts/setup.sh"
   ```

## Workflow

### Step 1: Understand the Request

Parse the user's request to determine:
- **Subject**: What they want to see (UI screen, icon, illustration, concept art, etc.)
- **Style**: Realistic, flat design, hand-drawn, pixel art, isometric, etc.
- **Aspect ratio**: Infer from context — `16:9` for web/desktop mockups, `9:16` for mobile screens, `1:1` for icons/avatars/social media, `4:3` for general purpose
- **Reference images**: Check if the user provided any file paths to use as references
- **Constraints**: Brand colors, specific elements that must appear, text to include

### Step 2: Analyze the Codebase for Context

If the user is working in a software project, quickly scan for design context to make the mockups more relevant:

- Use Glob to check for `tailwind.config.*`, `theme.*`, `*.css` files to identify color schemes
- Check `package.json` for UI framework (React, Vue, etc.)
- Look at existing pages/components to understand the app's visual language
- Check for existing assets in `public/`, `assets/`, `static/` directories

Use this context to make prompts more specific (e.g., "using a blue and white color scheme consistent with a Next.js SaaS dashboard").

### Step 3: Construct Prompts and Generate 3 Options

Build 3 prompt variations that interpret the user's request from different angles. Each prompt should:
- Start with the visual style and medium (e.g., "A clean, modern UI mockup of...")
- Include specific details about layout, colors, and content
- End with quality modifiers (e.g., "professional design, high quality, sharp details")

Vary the 3 options by changing:
- **Option 1**: Faithful, straightforward interpretation of the request
- **Option 2**: A creative or alternative layout/composition
- **Option 3**: A different visual style or emphasis

Run all 3 generations in parallel using a single Bash call:

```bash
PLUGIN_ROOT="${CLAUDE_PLUGIN_ROOT}"
cd "$PLUGIN_ROOT/scripts"

node generate-image.mjs \
  --prompt "PROMPT_1" \
  --output "./mocks/mock-option-1.png" \
  --aspect-ratio "RATIO" \
  REFERENCE_FLAGS &
PID1=$!

node generate-image.mjs \
  --prompt "PROMPT_2" \
  --output "./mocks/mock-option-2.png" \
  --aspect-ratio "RATIO" \
  REFERENCE_FLAGS &
PID2=$!

node generate-image.mjs \
  --prompt "PROMPT_3" \
  --output "./mocks/mock-option-3.png" \
  --aspect-ratio "RATIO" \
  REFERENCE_FLAGS &
PID3=$!

wait $PID1 $PID2 $PID3
```

The script outputs JSON to stdout. Check each result for `"success": true`.

If any generation fails, report the error and retry that specific option once.

### Step 4: Present the Options

Use the Read tool to view each generated image (Claude Code is multimodal and can view PNG/JPG files). For each option:

1. Read the image file using the Read tool
2. Describe what you see in the generated image — the layout, colors, key elements, overall feel
3. Note how it differs from the other options

Present all 3 with brief descriptions, then ask the user what they'd like to do.

### Step 5: Handle User Response

Use AskUserQuestion to present choices, or respond to free-form feedback:

**"Pick"** — The user wants to keep one of the options:
- Ask where they want to save it (suggest a sensible default like `./mocks/mockup.png` or based on their project structure)
- Copy the chosen file to the final location
- Clean up the other options if the user wants

**"Tweak"** — The user likes an option but wants changes:
- Use the chosen image as a `--reference` input
- Modify the prompt based on their feedback (e.g., "make the header blue", "add a sidebar")
- Generate 3 new variants using the reference image
- Present the new options and repeat

**"Regenerate"** — The user wants fresh options:
- Ask for any additional guidance or clarification
- Adjust the prompts based on their feedback
- Generate 3 new options (without reference images unless specified)
- Present and repeat

**"Start over"** — The user wants to describe something completely different:
- Get the new description
- Go back to Step 1

### Step 6: Cleanup

After the user is satisfied and has their final image(s):
- Offer to clean up intermediate files in `./mocks/mock-option-*.png`
- Summarize what was generated and where it was saved

## Important Notes

- Always generate images into the `./mocks/` directory relative to the project working directory (not the plugin root). Create it if it doesn't exist.
- When constructing prompts, reference the `prompt-guide.md` in this skill's references directory for best practices.
- If generating UI mockups, be very specific about layout: mention header, sidebar, main content area, grid structure, card layouts, etc.
- For text in images: Gemini can render text but it's not always perfect. Warn the user that text in generated images may need manual correction.
- Keep the loop going until the user explicitly says they're done or picks a final image.
- If the user provides reference images, always pass them via the `--reference` flag to maintain visual consistency.
