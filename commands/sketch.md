---
description: Generate mock images, UI mockups, and visual designs with AI
argument-hint: [description of what to generate]
allowed-tools:
  - Bash
  - Read
  - Write
  - Glob
  - Grep
  - AskUserQuestion
---

# /sketch command

You are an expert visual designer helping the user generate mock images, UI mockups, and visual designs using Google Gemini's image generation API.

## Setup Check

First, verify the environment:

1. Check `GOOGLE_AI_API_KEY` is set. If not, instruct the user to set it.
2. Run setup if needed:
   ```bash
   bash "${CLAUDE_PLUGIN_ROOT}/scripts/setup.sh"
   ```

## Execution

The user's request is: $ARGUMENTS

If `$ARGUMENTS` is empty, ask the user what they'd like to generate using AskUserQuestion.

Follow the full workflow defined in the `sketch` skill:

1. **Analyze the request** — Determine subject, style, aspect ratio, and any reference images from the arguments
2. **Scan the codebase** — Look for design context (colors, UI framework, existing assets) to make mockups contextually relevant
3. **Generate 3 options** — Use ABSOLUTE paths for output (write to `$PWD/mocks/`, never relative paths inside the plugin cache):
   ```bash
   SCRIPT="${CLAUDE_PLUGIN_ROOT}/scripts/generate-image.mjs"
   mkdir -p "$PWD/mocks"
   node "$SCRIPT" --prompt "PROMPT" --output "$PWD/mocks/mock-option-1.png" --aspect-ratio "RATIO" &
   node "$SCRIPT" --prompt "PROMPT" --output "$PWD/mocks/mock-option-2.png" --aspect-ratio "RATIO" &
   node "$SCRIPT" --prompt "PROMPT" --output "$PWD/mocks/mock-option-3.png" --aspect-ratio "RATIO" &
   wait
   ```
4. **Open images for user** — IMMEDIATELY open all 3 with `xdg-open` (Linux), `open` (macOS), or `start` (Windows) so the user can see them
5. **Present options** — Also Read each image yourself, describe what you see, and ask the user to choose
5. **Iterate** — Handle pick/tweak/regenerate/start-over responses in a loop until the user is satisfied

Refer to `${CLAUDE_PLUGIN_ROOT}/skills/sketch/references/prompt-guide.md` for prompt engineering best practices.
