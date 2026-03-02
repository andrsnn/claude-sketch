# sketch

A Claude Code plugin that generates UI mockups and visual designs using Google Gemini. Describe what you want, Claude generates 3 options, and you pick, tweak, or regenerate until you're happy.

Claude analyzes your codebase for context (color schemes, UI framework, existing design patterns) so the generated mockups actually match your project.

## What it does

1. You describe what you want (or use `/sketch a login page with dark theme`)
2. Claude reads your project for design context (Tailwind config, existing assets, etc.)
3. Generates 3 variations in parallel using Google Gemini
4. Shows you all 3 and asks what you think
5. You pick one, ask for tweaks, or regenerate - loops until you're done

Works for UI mockups, app screens, icons, illustrations, marketing graphics, concept art, wireframes, and anything else you can describe.

## Install

### 1. Set your Google AI API key

Get one from [Google AI Studio](https://aistudio.google.com/apikey), then add to your shell profile (`~/.bashrc`, `~/.zshrc`):

```bash
export GOOGLE_AI_API_KEY="your-key"
```

### 2. Install the plugin

**From GitHub:**

```
/plugin install sketch@andrsnn/claude-sketch
```

This permanently adds the plugin - no flags needed on future sessions.

**Or from a local directory (for development):**

```bash
claude --plugin-dir /path/to/claude-sketch
```

Script dependencies (`@google/genai`) install automatically on first use.

## Usage

### Slash command

```
/sketch a SaaS dashboard with analytics charts and a dark sidebar
/sketch a mobile onboarding flow for a fitness app
/sketch an icon set for a weather app, 1:1 aspect ratio
```

### Natural language

Just ask in conversation - the skill auto-triggers:

- "Sketch me a landing page with a hero section and pricing table"
- "Generate a mockup of the settings page"
- "Mock up a mobile version of this dashboard"
- "Create concept art for the app's empty state illustrations"

### With reference images

Point to an existing image to maintain visual consistency:

- "Sketch a settings page using `./mocks/dashboard.png` as style reference"
- After picking an option: "Tweak this one - make the header blue"

## How the loop works

After generating 3 options, you can:

- **Pick** - Save your favorite to a final location
- **Tweak** - Keep an option as reference, describe what to change, get 3 new variants
- **Regenerate** - Fresh batch with adjusted prompts based on your feedback
- **Start over** - Describe something completely different

## Standalone script

The generation script works independently of Claude Code:

```bash
node scripts/generate-image.mjs \
  --prompt "a flat vector illustration of a rocket launching" \
  --output ./rocket.png \
  --aspect-ratio "1:1" \
  --reference ./existing-style.png
```

Outputs JSON: `{ "success": true, "output": "./rocket.png", "description": "..." }`

## Project structure

```
claude-sketch/
├── .claude-plugin/plugin.json         # Plugin metadata
├── commands/sketch.md                 # /sketch slash command
├── skills/sketch/
│   ├── SKILL.md                       # Auto-trigger skill (core workflow)
│   └── references/prompt-guide.md     # Prompt engineering reference
├── scripts/
│   ├── generate-image.mjs             # Gemini image generation CLI
│   ├── package.json                   # Self-contained dependencies
│   └── setup.sh                       # Dependency installer
└── README.md
```

## Requirements

- Node.js 18+
- `GOOGLE_AI_API_KEY` environment variable
- Claude Code with plugin support
