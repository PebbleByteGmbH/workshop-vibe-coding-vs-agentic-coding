# AI Workshop Light

This repository is a small workshop space for building with AI agents under simple constraints:

- Use plain HTML, CSS, and JavaScript.
- Put the app in `src/`.
- Keep examples readable and runnable.
- Everything must work on Windows, Linux, and macOS with only a browser installed.
- Do not require Node.js, npm, Docker, package managers, language runtimes, frameworks, bundlers, transpilers, local servers, or server app stacks unless the workshop rules change.
- Libraries are allowed only when they can run directly in the browser without installation or build steps.
- When persistence is needed, use IndexedDB as the local browser database.
- Do not introduce remote databases or cloud persistence by default.

## Local Agent Skills

The repo includes local skills in `.agents/skills/` so AI agents working in this project have the same workshop rules in context.

### `frontend-developer`

Use this skill when creating or reviewing the browser UI with plain `.html`, `.css`, and `.js`.

It tells agents to:

- keep the app inside `src/`;
- keep file structures simple;
- avoid frameworks, build steps, Node.js, npm, Docker, and installed runtimes;
- add libraries only as browser-ready files or acceptable CDN scripts;
- use semantic HTML, modern CSS, and browser-native JavaScript;
- handle markup, styling, rendering, DOM events, forms, and accessibility;
- build the actual exercise or app instead of a marketing-style landing page;
- verify the result with the smallest practical check.

### `indexdb-database-developer`

Use this skill when a workshop exercise stores local data.

It tells agents to:

- use IndexedDB for app data;
- avoid `localStorage`, `sessionStorage`, cookies, remote databases, and cloud persistence;
- avoid installed databases, servers, package managers, and build steps;
- implement local data create, read, update, delete, list, and reset flows;
- validate stored data on read;
- keep IndexedDB helpers separate from UI rendering;
- avoid storing secrets or accidentally adding remote persistence.

## Suggested Project Shape

For most exercises, start with:

```text
src/
  index.html
  styles.css
  app.js
  assets/
```

If the exercise needs more structure, prefer small folders such as:

```text
src/
  app.js
  index.html
  storage.js
  styles.css
  ui.js
```

Keep the workshop approachable: every file should be something a participant can open, read, and change.

## Running The App

Open `src/index.html` in a browser.

That is the whole runtime contract. No install step, no terminal command, no Docker, no Node.js, no npm, no framework.
