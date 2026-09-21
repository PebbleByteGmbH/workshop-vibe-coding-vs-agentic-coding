# Workshop cheat sheets

Open `src/workshop-cheat-sheets.html` directly in a browser. `day=1` or `day=2`
selects the workshop day; `lang=de` or `lang=en` selects the language. Missing or
unsupported values default to day 1 and German. The homepage and both deck menus
link here. The PDF button downloads the selected bundled file without a print
dialog or network request.

## Content and layout

`src/workshop-cheat-sheet-copy.js` supplies condensed definitions and translated
interface copy. Terms and metaphor text are read from each day's `layout: "summary"`
slides in `src/workshop-copy.js`; the original slide content stays unchanged.
The definition arrays follow the summary-section and table-row order. When adding,
removing, or moving summary rows, update both languages' definition arrays too.
There are currently 27 entries in day 1 and 19 in day 2.

`hw-cheat-sheet` is the reusable sheet molecule. Its `day` and `locale` attributes
update its rendered content. The sheet CSS lives in
`src/components/molecules/cheat-sheets.css`; shared paper dimensions and typography
tokens live in `src/styles.css`. The online preview and PDF use this same HTML/CSS
layout, with 10pt body text and 9pt secondary text in dense sections. Day 2 and the
shorter use-case checklist use 11pt body text and 10pt secondary text. Sections
share the available page height, keeping their lower edges aligned. Every metaphor
includes the original summary emoji and a localized "Metapher:" / "Metaphor:" label.
On narrow screens only, the
content reflows into one column with larger text. The printed paper is always light.

## Regenerate PDFs with only a browser

1. Open each combination of day and language on the cheat-sheet page.
2. Wait for the local fonts and logo to load, then use the browser's Print command.
3. Select **Save as PDF**, **A4**, **portrait**, **100% scale**, **no margins**,
   **background graphics on**, and **headers/footers off**. The sheet itself supplies
   10mm safe margins. Check that the preview contains exactly one page.
4. Save each file in `src/assets/cheat-sheets/` as
   `ai-workshop-day-1-de.pdf`, `ai-workshop-day-1-en.pdf`,
   `ai-workshop-day-2-de.pdf`, or `ai-workshop-day-2-en.pdf`.
5. Inspect all four PDFs at actual size. Confirm that text is selectable, every
   summary entry is present, no text or shadow is clipped, and the page is A4.

For automated authoring in an environment that already supplies a headless browser,
open those same local URLs, wait for `document.fonts.ready` and image decoding,
then print with CSS page size, backgrounds, scale 1, and browser headers disabled.
No authoring dependencies are shipped or required to use this workshop.

## Verification

- Compare all sheet terms with the summary tables in both languages.
- Check desktop preview, 768px and 390px layouts, light/dark controls, keyboard
  focus, and day/language switching. Switching language must retain the day.
- Download each variant and verify its filename, one-page A4 size, and text.
- Check the homepage's two existing slide links and new cheat-sheet link.
- Check each deck's cheat-sheet link and existing PDF export; the new sheet's
  portrait print stylesheet is loaded only on its own page.
