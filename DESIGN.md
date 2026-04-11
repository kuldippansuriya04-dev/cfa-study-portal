# Design Brief

## Direction

Professional Institutional Learning Portal — CFA Institute-inspired design with refined navy/gold palette, card-based content layout, and achievement-focused visual hierarchy.

## Tone

Refined, trustworthy, formal but approachable. Gold accents signal achievement and premium educational content. Minimal decoration prioritizes clarity and focus.

## Differentiation

Score progress rings with gold tiers, topic weight badges (15-20%), and systematic topic-to-practice-to-exam flow that mirrors institutional testing workflows.

## Color Palette

| Token      | OKLCH         | Role                              |
| ---------- | ------------- | --------------------------------- |
| background | 0.99 0.005 0  | Clean white page background       |
| foreground | 0.2 0.02 260  | Deep navy body text               |
| card       | 1.0 0.0 0     | Pure white elevated surfaces      |
| primary    | 0.35 0.12 260 | Deep navy CTA and navigation      |
| accent     | 0.65 0.15 65  | Warm gold achievement highlights  |
| muted      | 0.93 0.01 260 | Light gray section separators     |
| border     | 0.88 0.01 260 | Subtle card and section borders   |

## Typography

- Display: Fraunces — elegant serif for section titles and logo wordmark
- Body: General Sans — professional sans for UI labels and body copy
- Mono: Geist Mono — monospace for code and technical snippets
- Scale: hero `text-5xl font-bold tracking-tight`, h2 `text-3xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base`

## Elevation & Depth

Subtle card-based elevation using 2-8px shadows and 0.88 lightness borders. No ambient blur or gloss effects. Hierarchy through surface color (card vs. background) and shadow weight.

## Structural Zones

| Zone      | Background       | Border                 | Notes                                   |
| --------- | ---------------- | ---------------------- | --------------------------------------- |
| Header    | primary + gold   | none                   | Navy navbar with white logo, gold dots |
| Sidebar   | white (0.98)     | border (subtle)        | Topic list, collapsible sections        |
| Content   | background      | alternate muted (0.93) | Card grid with shadow-card utility      |
| Footer    | muted (0.93)     | border-t               | Links, copyright, quiet gray treatment |

## Spacing & Rhythm

16px base grid. Section gaps 24-32px. Card padding 20px. Topic badges 2px-left accent bar. Progress rings 64px diameter with centered score text. Micro-spacing (button padding, label gaps) uses 8px increments.

## Component Patterns

- Buttons: rounded-sm navy primary with white text, gold accent on hover, shadow-card on focus
- Cards: rounded-md white card with shadow-card, 20px padding, topic/exam/question cards
- Badges: topic weight badges with badge-weight utility (uppercase, small, accent background/foreground)
- Progress: score rings using chart-1 (gold), border in muted, center text in primary

## Motion

- Entrance: fade-in 0.3s on page load, slide-up 0.4s for new content
- Hover: text-opacity shift and shadow-elevated on cards and buttons
- Decorative: pulse-gentle on active badges, smooth transitions on all interactive elements

## Constraints

- No gradients, no blurs, no glassmorphism — institutional simplicity required
- Gold accent used exclusively for achievements, progress, and earned status
- Navy primary restricted to CTA, navigation, and focus states
- All color values use OKLCH; no raw hex or rgb literals

## Signature Detail

Progress rings with gold achievement tiers positioned as micro-certificates in the score dashboard — learners see visual proof of domain mastery at a glance.
