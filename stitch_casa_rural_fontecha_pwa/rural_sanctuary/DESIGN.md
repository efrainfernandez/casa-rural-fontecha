---
name: Rural Sanctuary
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#454840'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#75786f'
  outline-variant: '#c5c8bd'
  surface-tint: '#546348'
  primary: '#28351e'
  on-primary: '#ffffff'
  primary-container: '#3e4c33'
  on-primary-container: '#acbc9c'
  inverse-primary: '#bcccab'
  secondary: '#914a36'
  on-secondary: '#ffffff'
  secondary-container: '#fda288'
  on-secondary-container: '#773623'
  tertiary: '#452d07'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e431c'
  on-tertiary-container: '#d7b180'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e8c6'
  primary-fixed-dim: '#bcccab'
  on-primary-fixed: '#121f0a'
  on-primary-fixed-variant: '#3d4b32'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#743421'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#e7c08e'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5c421b'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 80px
  section-gap-mobile: 48px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is built to evoke the serene, grounding experience of a rural escape. It targets families and travelers seeking authenticity, comfort, and a connection to nature. The brand personality is "Refined Rustic"—it honors traditional Castilian architecture and the natural landscape of Pino del Río while providing the seamless usability of a modern high-end hospitality product.

The visual style is a blend of **Modern Minimalism** and **Tactile warmth**. It avoids the sterility of corporate SaaS by using organic color palettes and soft, inviting UI elements. The interface acts as a quiet frame for immersive photography of the property, the river, and the surrounding Palencian forests. The emotional response should be one of immediate relaxation, warmth (the "fireplace effect"), and trust.

## Colors
The palette is derived directly from the Palencian landscape. 
- **Primary (Pine Green):** Used for primary actions, navigation headers, and brand moments. It represents the forest and provides a stable, grounding presence.
- **Secondary (Terracotta):** Used for highlighting special features, call-to-outs, and "warmth" indicators like fireplace or heating icons.
- **Neutral (Sand & Cream):** The "Surface Cream" is the primary background color, providing a softer, more organic feel than pure white.
- **Text (Oak Brown):** Instead of pure black, a deep, warm oak brown is used for text to maintain the rustic harmony and reduce visual fatigue.

## Typography
The typographic pairing balances heritage with clarity. 
- **Headings:** Use *Libre Caslon Text*. This serif typeface brings an editorial, literary quality that feels established and welcoming. It should be used for property titles, section headers, and welcoming messages.
- **Body:** Use *Source Sans 3*. It is a highly legible, professional sans-serif that ensures accessibility on mobile devices. It handles the "logistics" of the UI—booking details, descriptions, and policies.
- **Labels:** Small labels and overlines should use the sans-serif in bold uppercase with increased letter spacing to create a clean, modern hierarchy.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous white space (or "cream space") to allow the content to breathe. 
- **Desktop:** A 12-column grid with wide 24px gutters. Content is often centered in a 1200px container to maintain an intimate, non-corporate feel.
- **Mobile:** A 4-column grid with 16px margins. Elements like property cards should utilize the full width of the screen or use horizontal "peek-a-boo" scrolling to showcase photography.
- **Rhythm:** Spacing should be used to group related items (e.g., house amenities) closely while separating major sections (e.g., Room Types vs. Location) with significant vertical gaps to mimic the open feeling of the countryside.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Ambient Shadows**.
- **Surfaces:** Use subtle shifts in cream and sand tones to separate content areas. A "Surface-Container" might be 2% darker than the main background.
- **Shadows:** Shadows are extremely soft, diffused, and slightly tinted with the secondary terracotta or oak brown color. This avoids a "grey/plastic" look and instead feels like a soft light hitting a physical surface. 
- **Photography:** Large images should have no shadows but may use a subtle inner vignette or a very thin (1px) warm-grey border to define their edges against the cream background.

## Shapes
The design system uses **Rounded (Level 2)** shapes. 
- Standard components (buttons, input fields) use a 0.5rem (8px) radius.
- Larger containers like property cards or image frames use `rounded-xl` (1.5rem / 24px) to emphasize a soft, organic, and family-friendly environment.
- Form fields should never be sharp; the goal is to eliminate "points of tension" in the interface.

## Components
- **Buttons:** The primary button is a solid Pine Green with white or cream text. Secondary buttons are "Oak Brown" outlines. Buttons should have generous horizontal padding (24px+) to feel "expensive" and low-stress.
- **Cards:** Property and activity cards use the `rounded-xl` setting. They feature a large image header, a Caslon title, and a simple row of "feature chips."
- **Chips:** Used for amenities (e.g., "Fireplace," "Wifi"). These should be low-contrast (Sand background with Oak text) to keep the focus on the primary imagery.
- **Inputs:** Text fields use a "Surface Cream" fill with a 1px "Sand" border. On focus, the border transitions to "Pine Green."
- **Iconography:** Icons must be thin-stroke and "open." Focus on natural metaphors: a stylized flame for the fireplace, a waving line for the river, and soft silhouettes for family-friendly indicators.
- **Interactive Calendar:** For bookings, the calendar should use a soft terracotta circle to indicate selected dates, reinforcing the "warmth" of the stay.