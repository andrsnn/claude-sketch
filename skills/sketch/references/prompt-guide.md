# Prompt Engineering Guide for Gemini Image Generation

Reference guide for constructing effective prompts when generating mock images with Gemini.

## Prompt Structure

A good image generation prompt follows this pattern:

```
[Medium/Style], [Subject], [Details], [Composition], [Quality modifiers]
```

**Example**: "A clean, modern UI mockup of a SaaS dashboard showing analytics charts, using a blue and white color scheme, with a left sidebar navigation and top header bar, professional design, sharp and detailed"

## Visual Styles

Use these style prefixes to set the overall look:

### UI/Web Design
- "A clean, modern UI mockup of..." — Standard web/app design
- "A minimal, flat design mockup of..." — Simple, geometric
- "A glassmorphism UI design of..." — Frosted glass, blur effects
- "A dark mode UI design of..." — Dark backgrounds, light text
- "A wireframe sketch of..." — Low-fidelity, structural focus
- "A high-fidelity prototype of..." — Detailed, production-ready look

### Illustration & Art
- "A flat vector illustration of..." — Clean, scalable graphics
- "A hand-drawn sketch of..." — Organic, informal feel
- "A watercolor painting of..." — Soft, artistic
- "An isometric illustration of..." — 3D-like, technical
- "A pixel art rendition of..." — Retro game aesthetic
- "A photorealistic rendering of..." — Lifelike imagery

### Product & Marketing
- "A product mockup showing..." — Physical product in context
- "A social media post design for..." — Sized for Instagram/Twitter
- "A hero banner image for..." — Wide, impactful header
- "A promotional graphic for..." — Marketing material

## Aspect Ratios

Choose based on the content type:

| Ratio | Use Case | Examples |
|-------|----------|---------|
| `16:9` | Desktop/web screens, presentations, hero images | Dashboards, landing pages, wide banners |
| `9:16` | Mobile screens, stories, vertical content | Mobile app mockups, Instagram stories |
| `1:1` | Icons, avatars, social media posts | App icons, profile pictures, Instagram posts |
| `4:3` | General purpose, slides, thumbnails | Blog images, presentation slides |
| `3:4` | Portrait content, book covers | Profile pages, product cards |

## UI Mockup Prompts

When generating UI mockups, be explicit about layout structure:

### Key Elements to Specify
- **Navigation**: "top navigation bar with logo on left and user menu on right"
- **Sidebar**: "left sidebar with icon-based navigation, 240px wide"
- **Content area**: "main content area with a 3-column card grid"
- **Data visualization**: "line chart showing monthly revenue trends"
- **Forms**: "centered login form with email, password fields, and social sign-in buttons"
- **Tables**: "data table with sortable columns, pagination, and row selection checkboxes"

### Example UI Prompts

**Dashboard**:
"A modern SaaS dashboard UI mockup, dark sidebar navigation on the left with icons for Home, Analytics, Users, Settings. Main content shows a top row of 4 KPI metric cards (revenue, users, sessions, conversion rate), below that a large area chart of daily activity, and a recent transactions table at the bottom. Clean design, Inter font, blue accent color on white background, professional and polished"

**Mobile App**:
"A mobile app screen mockup for a food delivery app. Top section shows a search bar and location selector. Below that, horizontal scrolling category chips (Pizza, Sushi, Burgers, etc). Main area shows a vertical list of restaurant cards with food photos, ratings, delivery time, and price range. Bottom tab bar with Home, Search, Orders, Account icons. Warm color palette, rounded corners, modern iOS style"

**Landing Page**:
"A SaaS landing page mockup. Large hero section with headline text on the left and a product screenshot on the right, gradient purple-to-blue background. Below the hero, a 3-column feature section with icons. Then a pricing table with 3 tiers. Finally a CTA section and footer. Clean, professional, startup aesthetic"

## Reference Image Tips

When using `--reference` images:

- **Style transfer**: "Generate a new screen in the same visual style as the reference image" — Gemini will match colors, typography feel, and layout patterns
- **Iteration**: "Modify the reference image to [change]" — Use for tweaking existing mockups
- **Consistency**: When generating multiple screens for the same app, always include a previously generated screen as reference to maintain visual consistency
- **Multiple references**: You can pass multiple `--reference` flags to combine visual elements from different sources

### What Works Well with References
- Changing content while keeping the layout
- Adjusting colors or themes
- Adding or removing UI elements
- Creating variations of an existing design

### What to Watch Out For
- Very complex reference images may confuse the model
- Text in references may not transfer accurately
- Extremely different styles from reference to prompt can produce inconsistent results

## Quality Modifiers

Append these to improve output quality:

### General Quality
- "high quality, detailed, sharp"
- "professional design"
- "clean and polished"
- "4K resolution, crisp details"

### UI-Specific
- "pixel-perfect UI design"
- "production-ready mockup"
- "design system consistent"
- "accessible, WCAG compliant colors"

### Artistic
- "artstation quality"
- "trending on Dribbble"
- "award-winning design"
- "editorial quality"

## Negative Guidance

Tell Gemini what to avoid by including phrases like:
- "no watermarks or logos"
- "no placeholder text, use realistic content"
- "avoid cluttered layout"
- "no stock photo feel"

## Prompt Variation Strategies

When generating 3 options from one request, vary along these axes:

1. **Layout**: Change the spatial arrangement (e.g., sidebar vs top nav, grid vs list)
2. **Style intensity**: Minimal vs detailed vs bold
3. **Color treatment**: Light theme vs dark theme vs colorful accent
4. **Composition focus**: Wide establishing shot vs focused detail vs balanced

## Common Pitfalls

- **Too vague**: "a nice website" — Always specify layout, colors, content type
- **Too many elements**: Requesting 20+ distinct elements confuses the model — focus on 5-8 key elements
- **Conflicting styles**: "minimalist but very detailed with lots of decorations" — Pick a lane
- **Text-heavy**: Gemini can render text but not always accurately — keep text elements to headings and short labels
- **Ignoring aspect ratio**: A mobile mockup in 16:9 will look wrong — always match ratio to content type
