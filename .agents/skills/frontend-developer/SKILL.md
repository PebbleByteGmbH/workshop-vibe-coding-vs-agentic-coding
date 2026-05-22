---
name: frontend-developer
description: Use this skill for every workshop task that creates, edits, or reviews the browser UI with plain HTML, CSS, and JavaScript. This is the frontend skill: use it for markup, layout, styling, DOM behavior, accessibility, and browser-only app logic. If the task stores local data, also use the indexdb-database-developer skill.
---

# Frontend Developer

## When To Use

Use this skill when the task involves:

- creating or editing `src/index.html`;
- creating or editing CSS;
- creating or editing browser JavaScript;
- adding UI controls, forms, views, navigation, rendering, or DOM events;
- reviewing whether the app still works with only a browser.

If the frontend stores, reads, updates, deletes, or clears local data, also use `indexdb-database-developer`.

## Why To Use

This workshop is intentionally small and portable. The goal is to build apps that participants can open, read, change, and run on Windows, Linux, and macOS without installing anything.

Use this skill to keep the app:

- beginner-readable;
- browser-only;
- free of frameworks and build steps;
- structured as plain HTML, CSS, and JavaScript;
- easy for AI agents and humans to extend consistently.

## Ground Rules

- Put the app in `src/`.
- Use plain `.html`, `.css`, and `.js` files.
- Do not add frameworks, bundlers, transpilers, package managers, JSX, TypeScript, server-side rendering, Docker, or required language runtimes.
- The project must work with only a modern browser installed.
- Keep examples runnable by opening `src/index.html` directly in a browser.
- Do not require a local server unless the user explicitly asks for a browser feature that cannot run from `file://`.
- Libraries are allowed only when they run directly in the browser without Node.js, npm, build steps, or installation.
- When using browser-ready libraries, inspect their global CSS/API names before adding custom classes or data attributes. For Reveal.js decks, do not create custom elements or classes named `slide-number`, `progress`, `controls`, `backgrounds`, `slide-background`, `fragment`, `present`, `past`, `future`, `current-fragment`, `speaker-notes`, or `pause-overlay`; these collide with Reveal's built-in behavior and can create overlays or broken navigation. Prefix deck-specific classes with the component name, such as `seminar-` or `hw-deck-`.
- Prefer browser APIs and tiny self-contained files over dependencies.
- Use CSS custom properties as design tokens for colors, spacing, margins, padding, border widths, border radii, shadows, typography, layout dimensions, and motion values.
- Define swappable light and dark theme classes, such as `.theme-light` and `.theme-dark`, by overriding semantic color tokens instead of restyling individual components.
- Build new components from the shared CSS variables. Avoid hard-coded component colors, radii, spacing, margins, shadows, and repeated sizing values unless they are browser defaults or one-off reset values.
- Prefer small component-based frontend apps. Browser-native Web Components are allowed and encouraged when they keep the app readable and runnable without a build step.
- Use Atomic Design folders for componentized UI: `components/atoms/`, `components/molecules/`, `components/organisms/`, `components/templates/`, and `components/pages/`.
- Atoms and molecules are the only component layers that should define component CSS. Organisms, templates, and pages should compose atoms and molecules without adding visual styling of their own.
- Keep Web Components simple: define custom elements with plain JavaScript files loaded by `script defer`, avoid module-only setups that can make direct `file://` opening fragile, and keep public methods small and explicit.
- Make Web Components reusable through attributes. Text, labels, IDs, ARIA copy, variants, and other simple configuration should be set where the component is used, not hard-coded inside the component.
- Use `observedAttributes` and `attributeChangedCallback` for attributes that affect rendered output, so components respond when attributes change.
- Higher Atomic Design layers should pass attributes down to the atoms and molecules they compose. Page-level elements should be able to swap copy for different pages without editing lower-level component files.
- If data is stored locally, use IndexedDB through the `indexdb-database-developer` skill.

## How To Use

1. Inspect existing files and match the current style.
2. Put the page entry point in HTML and keep it small.
3. If componentizing, create Atomic Design folders before adding components.
4. Define or reuse CSS variables before adding component styling.
5. Style only atoms and molecules; compose organisms, templates, and pages from those pieces.
6. Expose reusable component content and configuration through attributes.
7. Put behavior in browser-native JavaScript and Web Components where useful.
8. Use semantic HTML before adding ARIA.
9. Use browser-native APIs before adding libraries.
10. Keep state explicit and render from state.
11. Handle empty, disabled, and error states in the UI.
12. Verify by opening `src/index.html` in a browser.

## Suggested Files

```text
src/
  index.html
  styles.css
  app.js
  components/
    atoms/
      atoms.css
      hw-button.js
    molecules/
      molecules.css
      hw-form-row.js
    organisms/
      hw-task-list.js
    templates/
      hw-app-template.js
    pages/
      hw-app-page.js
  assets/
  vendor/
```

Use `src/vendor/` only for browser-ready library files that do not require installation.

## Component Architecture

When a frontend grows beyond a single static page, prefer a small Web Components architecture:

```text
atoms
  Smallest styled primitives, such as buttons, labels, titles, fields, badges, and surfaces.
molecules
  Styled combinations of atoms, such as a theme switch, search field, form row, or compact card.
organisms
  Unstyled sections composed from atoms and molecules, such as a hero, toolbar, list, or editor.
templates
  Unstyled page layouts composed from organisms and shared molecules.
pages
  Unstyled route/page custom elements that choose a template and provide page-level content.
```

CSS ownership rule:

- Put design tokens and global resets in `src/styles.css`.
- Put atom styles in `components/atoms/atoms.css`.
- Put molecule styles in `components/molecules/molecules.css`.
- Do not add component styling to organisms, templates, or pages. If a higher layer needs visual changes, extract or adjust an atom or molecule instead.
- New atom and molecule styles must use the shared CSS variables.

Web Component rule:

- Use native `customElements.define(...)` classes.
- Prefer light DOM composition so global token CSS can style the app predictably.
- Load component files with plain `<script defer>` tags in dependency order.
- Keep `src/app.js` for small app wiring and shared state; avoid turning it into a framework.
- Define a clear public attribute API for each reusable component, for example `title`, `eyebrow`, `label`, `value`, `variant`, `aria-label`, or `button-label`.
- Keep default attribute fallbacks inside components, but pass real page content from the page, template, or organism where the component is used.
- Implement `observedAttributes` for attributes that change rendered text, state, or accessibility labels.

## HTML Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workshop App</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="components/atoms/atoms.css">
    <link rel="stylesheet" href="components/molecules/molecules.css">
    <script src="components/atoms/hw-button.js" defer></script>
    <script src="components/atoms/hw-title.js" defer></script>
    <script src="components/molecules/hw-card.js" defer></script>
    <script src="components/pages/hw-page.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body class="theme-light">
    <hw-page
      eyebrow="Agentic Coding"
      title="Hello Workshop"
      button-label="Start"
    ></hw-page>
  </body>
</html>
```

## CSS Token Example

```css
:root {
  --font-body: Arial, Helvetica, sans-serif;
  --color-text: #1f2933;
  --color-surface: #f5f7fa;
  --color-accent: #2563eb;
  --space-8: 8px;
  --space-16: 16px;
  --space-32: 32px;
  --size-page-width: 720px;
  --radius-control: 8px;
  --border-width: 1px;
  font-family: var(--font-body);
}

.theme-dark {
  --color-text: #f8fafc;
  --color-surface: #101827;
  --color-accent: #93c5fd;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: var(--color-text);
  background: var(--color-surface);
}
```

## Atom CSS Example

```css
hw-button button {
  border: var(--border-width) solid var(--color-text);
  border-radius: var(--radius-control);
  padding: var(--space-8) var(--space-16);
  background: var(--color-text);
  color: var(--color-surface);
}

hw-title {
  display: block;
  max-width: var(--size-page-width);
}
```

## Molecule CSS Example

```css
hw-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  max-width: var(--size-page-width);
}

@media (max-width: 520px) {
  hw-card {
    gap: var(--space-16);
  }
}
```

## Atom JavaScript Example

```js
class HwButton extends HTMLElement {
  static get observedAttributes() {
    return ["label"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const label = this.getAttribute("label") || "Button";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    this.replaceChildren(button);
  }
}

customElements.define("hw-button", HwButton);
```

## Molecule JavaScript Example

```js
class HwCard extends HTMLElement {
  static get observedAttributes() {
    return ["eyebrow", "title", "button-label"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const eyebrow = document.createElement("hw-label");
    eyebrow.setAttribute("text", this.getAttribute("eyebrow") || "");

    const title = document.createElement("hw-title");
    title.setAttribute("text", this.getAttribute("title") || "Workshop");

    const button = document.createElement("hw-button");
    button.setAttribute("label", this.getAttribute("button-label") || "Start");

    this.replaceChildren(eyebrow, title, button);
  }
}

customElements.define("hw-card", HwCard);
```

## Page JavaScript Example

```js
class HwPage extends HTMLElement {
  connectedCallback() {
    const card = document.createElement("hw-card");
    card.setAttribute("eyebrow", this.getAttribute("eyebrow") || "");
    card.setAttribute("title", this.getAttribute("title") || "Workshop");
    card.setAttribute("button-label", this.getAttribute("button-label") || "Start");
    this.replaceChildren(card);
  }
}

customElements.define("hw-page", HwPage);
```

## Review Checklist

- The app lives in `src/`.
- `src/index.html` opens directly in a browser.
- No framework, build dependency, package manager, local server, Docker setup, or runtime requirement slipped in.
- HTML is semantic and inputs have labels.
- CSS is responsive and text does not overflow.
- CSS uses shared custom properties for colors, spacing, radii, margins, shadows, typography, and repeated sizing.
- Light and dark themes are easy to swap by changing a theme class or semantic variables.
- JavaScript uses browser APIs directly.
- UI controls are usable with keyboard and mouse.
- Storage, if used, follows `indexdb-database-developer`.
