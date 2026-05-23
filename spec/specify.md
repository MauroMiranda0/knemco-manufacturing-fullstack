# Design Specification (Specify)

## 1. Overview
This document outlines the design system, UI/UX guidelines, and visual language for the client's projects. Adhering to these specifications ensures brand consistency, recognizable aesthetics, and a unified user experience across all digital touchpoints.

## 2. Color Palette
The project utilizes a specific color scheme designed for readability, modern aesthetics, and brand identity (Mentor Palette):

*   **Background (`--color-bg`):** `#F0F9F7` (Mint cream) - Used for primary page backgrounds.
*   **Text (`--color-text`):** `#132A25` (Dark green) - Used for primary text, headings, and high-contrast elements.
*   **Primary Accent (`--color-primary-accent`):** `#ED4845` (Imperial red) - Used for primary buttons, active links, and important call-to-actions.
*   **Secondary Background (`--color-secondary-bg`):** `#9ED4E5` (Non Photo blue) - Used for alternate section backgrounds or highlighting areas.
*   **Secondary Accent (`--color-secondary-accent`):** `#E4B363` (Earth yellow) - Used for secondary highlights or specific visual elements.
*   **White (`--color-white`):** `#FFFFFF` - Used for card backgrounds and contrasting text.
*   **Light Gray (`--color-gray-light`):** `#E0E0E0` - Used for subtle borders and dividers.

## 3. Typography
We use two primary Google Fonts to establish hierarchy and improve readability:

*   **Primary Font (Headings, Buttons, Display):** `Montserrat`, sans-serif (Weights: 400, 500, 600, 700)
    *   Used for all `h1` to `h6` tags to give a modern, geometric feel.
*   **Secondary Font (Body Text, Paragraphs):** `Inter`, sans-serif (Weights: 400, 500)
    *   Used for all standard reading text to ensure maximum legibility.

## 4. UI Components

### Buttons
Buttons should be clear, distinct, and follow the defined hierarchy:
*   **Primary Button (`.btn-primary`):** 
    *   Background: `#ED4845`
    *   Text: `#FFFFFF`
    *   State: Subtle drop shadow `rgba(237, 72, 69, 0.2)`. 
    *   Hover: Background darkens to `#C13A38`, elevates (`-4px`), and shadow intensifies.
*   **Secondary Button (`.btn-secondary`):** 
    *   Background: Transparent
    *   Border: `#ED4845`
    *   Text: `#ED4845`
    *   Hover: Fills with `#ED4845`, text turns `#FFFFFF`, slight elevation.
*   **General Button Styling (`.btn`):** 
    *   Border Radius: `8px`
    *   Text Transform: `uppercase`
    *   Letter Spacing: `1px`
    *   Transitions: `all 0.3s ease`

### Links
*   **Default state:** Primary Accent Color (`#ED4845`).
*   **Hover state:** Text Color (`#132A25`).
*   **Decoration:** None.

## 5. Layout & UI/UX Principles
*   **Responsiveness:** All designs must be mobile-first and fully responsive across tablet and desktop breakpoints.
*   **Spacing:** Use consistent spacing multiples to maintain rhythm. Provide ample whitespace around sections to prevent visual clutter.
*   **Micro-animations:** Incorporate smooth transitions (e.g., hover effects on buttons, cards, and links) to make the interface feel responsive and alive.
*   **Readability:** Ensure high contrast between text and background colors as specified in the palette.

## 6. CSS Architecture
*   We use **Vanilla CSS** with a global `index.css` for CSS variables, resets, typography, and base element styling.
*   Component-specific styles are kept in separate CSS files (e.g., `Hero.css`, `Navbar.css`) to maintain modularity and prevent style bleed. This approach is preferred over utility-first frameworks (like Tailwind) for this specific client to ensure absolute control over custom design elements.
