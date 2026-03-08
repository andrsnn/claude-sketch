# Prompt Engineering Guide for Gemini Image Generation

Reference guide for constructing effective prompts when generating visual content with Gemini.

## Prompt Structure

A good image generation prompt follows this pattern:

```
[Medium/Style], [Subject], [Details], [Composition], [Quality modifiers]
```

**Example**: "A clean, modern UI mockup of a SaaS dashboard showing analytics charts, using a blue and white color scheme, with a left sidebar navigation and top header bar, professional design, sharp and detailed"

## Visual Styles by Content Type

### UI/Web Design
- "A clean, modern UI mockup of..." — Standard web/app design
- "A minimal, flat design mockup of..." — Simple, geometric
- "A glassmorphism UI design of..." — Frosted glass, blur effects
- "A dark mode UI design of..." — Dark backgrounds, light text
- "A wireframe sketch of..." — Low-fidelity, structural focus
- "A high-fidelity prototype of..." — Detailed, production-ready look

### Ad Creatives & Display Ads
- "A mobile-first ad creative for..." — Vertical, attention-grabbing
- "A display ad banner for..." — Web banner format
- "A retargeting ad graphic for..." — Product-focused, direct CTA
- "A native ad visual for..." — Editorial, blends with content
- "A carousel ad frame for..." — Sequential storytelling

### Social Media
- "An Instagram feed post for..." — Square or 4:5, bold visuals
- "An Instagram story graphic for..." — Vertical, full-bleed, swipe-up CTA
- "A LinkedIn post graphic for..." — Professional, clean
- "A Twitter/X post image for..." — Wide format, concise message
- "A Pinterest pin design for..." — Tall, aspirational
- "A YouTube thumbnail for..." — 16:9, high contrast, expressive faces
- "A TikTok cover image for..." — Vertical, trendy

### App Store & Product
- "An app store screenshot showing..." — Device frame, feature highlight
- "An app icon design for..." — Simple, recognizable, no text
- "A feature graphic for Google Play showing..." — Wide banner, brand-forward

### Email Marketing
- "An email header banner for..." — Wide, clean, single message
- "An email hero image for..." — Product or lifestyle focused
- "A newsletter graphic for..." — Informational, branded

### Presentations & Pitch Decks
- "A pitch deck slide showing..." — Bold typography, minimal elements
- "A presentation cover slide for..." — Impactful, branded
- "A data visualization slide for..." — Charts, clean layout
- "An investor deck slide for..." — Professional, metrics-focused

### Product & E-commerce
- "A product hero shot of..." — White background, clean
- "A lifestyle product photo of..." — In-context, aspirational
- "A product detail shot of..." — Close-up, textures
- "A promotional banner for..." — Sale/offer focused
- "A category banner for..." — Collection overview

### Blog & Content Marketing
- "A blog header image for..." — Wide, thematic
- "A featured image for an article about..." — Editorial quality
- "An infographic about..." — Data-rich, vertical flow
- "A data visualization showing..." — Charts, comparisons

### Brand Assets
- "A logo concept for..." — Simple, memorable, scalable
- "A brand mood board for..." — Color, texture, typography collection
- "An icon set for..." — Consistent style, clear at small sizes
- "A style tile for..." — Brand identity elements

### Sales Collateral
- "A one-pager design for..." — Single page, key info
- "A brochure cover for..." — Professional, branded
- "A case study graphic for..." — Results-focused
- "A testimonial card for..." — Quote, photo, branding

### Packaging & Labels
- "A product packaging design for..." — 3D mockup or flat
- "A label design for..." — Product-specific
- "A box design for..." — Dieline or 3D render

### Illustration & Art
- "A flat vector illustration of..." — Clean, scalable
- "A hand-drawn sketch of..." — Organic, informal
- "A watercolor painting of..." — Soft, artistic
- "An isometric illustration of..." — 3D-like, technical
- "A pixel art rendition of..." — Retro game aesthetic
- "A photorealistic rendering of..." — Lifelike imagery

## Platform Dimensions Reference

| Platform / Use Case | Dimensions | Aspect Ratio |
|---------------------|-----------|--------------|
| Instagram feed | 1080×1350px | 4:5 |
| Instagram square | 1080×1080px | 1:1 |
| Instagram/TikTok stories/reels | 1080×1920px | 9:16 |
| LinkedIn/Twitter feed | 1200×1200px | 1:1 |
| LinkedIn/Twitter wide | 1200×627px | 16:9 |
| Pinterest pin | 1000×1500px | 2:3 |
| YouTube thumbnail | 1280×720px | 16:9 |
| Facebook feed | 1200×630px | 16:9 |
| Facebook cover | 1640×856px | 16:9 |
| iOS app icon | 1024×1024px | 1:1 |
| iOS screenshot (iPhone 15 Pro) | 1290×2796px | 9:16 |
| Google Play icon | 512×512px | 1:1 |
| Google Play feature graphic | 1024×500px | 16:9 |
| Email header | 600×200px | 16:9 |
| Email banner | 600×300px | 16:9 |
| Blog header | 1200×630px | 16:9 |
| Presentation slide (16:9) | 1920×1080px | 16:9 |
| Product shot | 1080×1080px | 1:1 |
| Infographic | 1080×1920px+ | 9:16 |

## Aspect Ratios

Choose based on the content type:

| Ratio | Use Case |
|-------|----------|
| `16:9` | Desktop/web, presentations, hero images, banners, YouTube thumbnails |
| `9:16` | Mobile screens, stories, reels, app store screenshots, infographics |
| `1:1` | Icons, avatars, social media posts, product shots |
| `4:5` | Instagram feed posts, portrait content |
| `4:3` | General purpose, slides, thumbnails |
| `3:4` | One-pagers, covers, book covers |
| `2:3` | Pinterest pins, posters |

## Content-Type Prompt Templates

### Ad Creative
"A mobile-first ad creative for [brand/product], featuring [product/person] with [action/context], [color scheme], bold CTA text reading '[CTA]', clean composition with single focal point, professional advertising photography style, high quality"

### Social Media Post
"An Instagram feed post for [brand/topic], [visual style], [key visual element], minimal text with headline '[headline]', [color palette], trendy and eye-catching, optimized for engagement, high quality"

### App Store Screenshot
"An app store screenshot showing [app name] [feature/screen], inside a [device] frame, clean background with [color], feature callout text '[text]', professional app marketing style, sharp and polished"

### Pitch Deck Slide
"A pitch deck slide for [company/topic], large bold headline '[headline]', [data visualization or key graphic], [brand colors], generous white space, modern sans-serif typography, professional and investor-ready"

### Product Shot
"A product photography shot of [product] on a [background], [lighting style], [angle], showing [key details], e-commerce ready, professional studio quality, sharp details"

### Email Header
"An email header banner for [brand/campaign], [key visual], headline '[headline]', [brand colors], clean and simple composition, 600px wide format, professional email marketing design"

### Blog Header
"A blog header image for an article about [topic], [visual style], [key visual element], [color mood], editorial quality, wide format, engaging and relevant"

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

## Reference Image Tips

When using `--reference` images:

- **Style transfer**: "Generate a new image in the same visual style as the reference" — Gemini will match colors, typography feel, and layout patterns
- **Iteration**: "Modify the reference image to [change]" — Use for tweaking existing outputs
- **Consistency**: When generating multiple assets for the same brand, always include a previously generated image as reference to maintain visual consistency
- **Multiple references**: You can pass multiple `--reference` flags to combine visual elements from different sources

### What Works Well with References
- Changing content while keeping the layout
- Adjusting colors or themes
- Adding or removing elements
- Creating variations of an existing design
- Maintaining brand consistency across multiple assets

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

### Advertising & Marketing
- "professional advertising photography"
- "campaign-ready creative"
- "brand-consistent design"
- "conversion-optimized layout"

### Editorial & Content
- "editorial quality"
- "magazine-style layout"
- "premium content design"

### Product Photography
- "professional studio lighting"
- "e-commerce ready"
- "commercial product photography"
- "clean, shadow-free background"

### Artistic
- "artstation quality"
- "trending on Dribbble"
- "award-winning design"

## Negative Guidance

Tell Gemini what to avoid:

### General
- "no watermarks or logos"
- "no placeholder text, use realistic content"
- "avoid cluttered layout"
- "no stock photo feel"

### Ads & Marketing
- "no generic stock imagery"
- "no excessive text overlay"
- "no cluttered composition"
- "avoid cliché marketing visuals"

### UI/UX
- "no lorem ipsum, use realistic data"
- "no broken layouts or misaligned elements"
- "avoid inconsistent spacing"

### Product
- "no distracting backgrounds"
- "no unrealistic proportions"
- "no visible editing artifacts"

## Iteration Guidance

When iterating on a generated image:

1. **Use the previous image as reference** — pass it via `--reference` to maintain consistency
2. **Be specific about changes** — "make the header blue" is better than "change the colors"
3. **Don't change too much at once** — adjust 1-2 things per iteration for predictable results
4. **Keep the prompt core stable** — modify only the parts that need changing
5. **Build up complexity** — start simple, add detail in subsequent iterations

## Common Pitfalls

- **Too vague**: "a nice ad" — Always specify product, audience, style, CTA
- **Too many elements**: Requesting 20+ distinct elements confuses the model — focus on 5-8 key elements
- **Conflicting styles**: "minimalist but very detailed with lots of decorations" — Pick a lane
- **Text-heavy**: Gemini can render text but not always accurately — keep text to headings and short labels
- **Ignoring aspect ratio**: A mobile ad in 16:9 will look wrong — always match ratio to platform
- **Wrong content type cues**: Using "mockup" when you mean "ad" will get UI-style output — use the right style prefix
