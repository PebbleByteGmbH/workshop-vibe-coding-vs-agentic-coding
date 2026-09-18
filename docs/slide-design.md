# Workshop slide design

Both workshop days and both languages use white backgrounds, large dark Geist
headings, smaller but readable Geist body text, and cards for images and related
information. PebbleByte yellow is the only accent color. Open either slide HTML
file directly in a browser; no install or build step is required. Reveal.js uses
the existing CDN; fonts and assets are local.

## Content preservation and slide boundaries

Day 1 has **51 slides** and day 2 has **41 slides**, in both English and German.
Split dense content across consecutive slides at meaningful topic boundaries.
Preserve the wording, links, images, table cells, and notes; do not hide details,
move them into notes, or shrink text to solve overflow. Keep corresponding English
and German slides aligned, including the same split boundaries. Preserve reveal
order within each content block. Keep all four Markdown transcripts in
`slide-text/` synchronized with slide titles, numbering, content, and grouping.

The model overview separates applications/reasoning, context/knowledge, and API
prices. Exercises separate instructions from worked examples. Process overviews
separate dense details or usage/safety guidance where needed. The two Use Case
summary tables each have their own slide. Safety tips are grouped 1–5 and 6–10.

## Art direction

| Role | Color |
| --- | --- |
| Background / cards | `#FFFFFF` |
| Headings / body | `#080808` |
| PebbleByte logo yellow | `#F7B74F` |

The accent matches the dominant opaque color sampled from the PebbleByte logo.
Do not introduce blue, pink, or other accent colors. Keep original instructional
screenshots, logos, and emoji unchanged. All slides, including covers and
interludes, use the white canvas in the default theme. Dark mode remains optional.

Use 4px card corners, dark 2px outlines, and hard 6px yellow shadows. All outer
shadows use the same offset, including buttons, controls, and hover states.
Concept cards have left-aligned icon fields above separate text bodies; logo fields
stay centered. Card headings begin the body, followed by descriptions. All card
headers use the same light yellow tint as the headerless “Ganz grob” callouts:
22% PebbleByte yellow mixed with white. Original logos and
emoji retain their colors, with a white backing for logos that need it.

Standard concept visuals are at least 104px tall with 64px icons. Compact and
resource-heavy cards use 64px visual fields and 40px icons; logo fields are 120px
tall. Use 20px section padding, 16px for resource-heavy cards, and 12px for dense
cards and process panels. Resource-heavy cards use the compact typography tier.
Align visual/header heights only among siblings in the same row, recalculating
after font or viewport changes. Never let one grid size headers in another grid.

Comparison, process, security, and code cards also have icon headers with their
headings in the body. “Ganz grob” flow takeaways remain headerless. Existing labels
use Geist Sans; page numbers use regular-weight, muted Geist Mono. Only whole-card
links receive a decorative northeast arrow, hidden from
assistive technology; keep their native link behavior and visible keyboard focus.
Dark mode changes card body surfaces and muted text while retaining dark borders
and yellow headers with dark text and icons.

Instructional screenshots stay upright and contained within the available area.
Their frame follows the image aspect ratio with a white backing, dark border,
12px corner radius, and the shared yellow shadow. Captions stay outside the image
panel. Preserve original asset colors. Tables have black headers with white text
and thin horizontal rules. The footer has no separator line above it.

The index page is the visual reference: a subtle grid on white, heavy headings,
outlined panels, and solid offset shadows. Keep PebbleByte yellow as the accent.
In presentation mode, the outer surface owns one continuous grid and slides are
transparent, so Reveal scaling cannot create mismatched grid spacing. Overview
thumbnails use solid theme backgrounds. PDF pages each own a decorative full-page
SVG grid outside the scaled slide composition, so the grid also prints when
browser background graphics are disabled.

Geist Sans uses weight 850 for headings and regular weight 400 for paragraphs and
normal list text. Slide headings use 1.04 line height and -0.025em tracking; card
headings use 1.15 and normal tracking. Body copy uses normal tracking and 1.45 line
height, or 1.3 in compact compositions. Covers use 104px type with 0.9 line height.
Geist Mono is used for code and regular-weight page numbers. Saira is used for the
PebbleByte wordmark. All fonts are locally bundled with licenses and German glyphs.

| Role | Standard desktop | Compact composition |
| --- | ---: | ---: |
| Cover / interlude | 104px | — |
| Slide heading | 56px | 48px |
| Component heading | 30px | 26px |
| Body copy | 20px | 18px |
| Table / code | 20px | 18px |
| Metadata / sources / controls | 16px | 16px |

Use compact typography where appropriate, and split topics when a slide would
still overflow. Do not introduce automatic font shrinking. The model comparison
uses 18px supporting explanations.

## Presentation metadata and components

The existing `locale`, `slide-set`, and `slide-count` custom-element attributes and
content block types remain supported. Slide data additionally accepts:

- `composition`: `cover`, `profile`, `concepts`, `concepts-dense`, `agenda`, `flow`,
  `logos`, `statement`, `media`, `models`, `reasoning`, `automation`, `reference`,
  `reference-pair`, `exercise-table`, `exercise-steps`, `exercise-columns`, `prompt`,
  `anatomy`, `security`, `safety`, `standard`, `model-details`, or `callout-pair`.
- `palette`: legacy metadata is retained, but backgrounds follow the shared
  white/light or optional dark theme. Accent color is always PebbleByte yellow.
- `density`: `compact` for the shared dense typography tier.

Assign the same presentation metadata to corresponding English and German slides.
Do not infer design choices from translated titles. `src/styles.css` owns tokens;
atom and molecule CSS own typography and layouts. Higher component layers compose
these primitives without styling. Prefix new helpers with `hw-deck-` to avoid
Reveal.js class-name collisions.

`HwDeckUI` creates semantic headings, paragraphs, labels, icons, and content groups.
The `card` helper provides the common frame; `sectionCard` wraps existing nodes
into visual and body sections without changing reading or fragment order, and adds
an accessible decorative arrow only for linked cards. Diagrams may separate
overviews from detailed steps. A single flow panel uses two columns for its items
on desktop and one on mobile. Skill anatomy supports separate tree/checklist pages
through the `panel` attribute in its block data. Tables retain
native headers, focusable scroll regions, and existing fragment behavior.

## Screen, mobile, and PDF

Desktop uses one 1280×720 composition scaled uniformly by Reveal.js, including at
1920×1080. Center each complete composition vertically within the padded content
area above the footer, including covers, interludes, and profile text and portraits.
Use the same vertical alignment in PDF export. Every slide must fit with all fragments visible, clear of its footer,
without internal desktop scrolling. The narrow-screen layout at widths up to
1000px may stack and scroll vertically; wide tables scroll within their own region.
The slide count and boundaries never change at a responsive breakpoint.

PDF export retains A4 landscape pages with a centered 1280×720 composition and one
constant scale. It waits for fonts and images, reveals all fragments, hides controls,
and disables motion. There must be exactly one page per slide.

## Verification

Check every slide in both languages at 1280×720 and 1920×1080, with all fragments
visible. Check both themes and tablet/mobile layouts at 768×1024 and 390×844.
Inspect the German model table, use-case summaries, ten safety tips, exercises,
profile, and screenshots closely. Screenshots must remain uncropped.

Verify original content coverage, links, notes, and table cells; then check keyboard
navigation, language switching, theme controls, and reduced motion. Export both days
and languages and inspect all pages for clipping and complete content.
