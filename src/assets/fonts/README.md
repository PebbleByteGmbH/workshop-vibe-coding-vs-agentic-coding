# Locally bundled fonts

- `saira-variable.ttf`: Saira, variable weight 100–900 and width axis.
  Source: https://github.com/google/fonts/tree/main/ofl/saira
  License: `Saira-OFL.txt` (SIL Open Font License 1.1).
- `geist-variable.ttf`: Geist Sans, variable weight 100–900.
  Source: https://github.com/google/fonts/tree/main/ofl/geist
  License: `Geist-OFL.txt` (SIL Open Font License 1.1).

- `geist-mono-variable.ttf`: Geist Mono, variable weight 100–900.
  Source: https://github.com/google/fonts/tree/main/ofl/geistmono
  License: `GeistMono-OFL.txt` (SIL Open Font License 1.1).

All three fonts include Latin characters used by the English and German decks.
The older `saira-latin.woff2` asset is retained for compatibility but is no
longer referenced by the stylesheet. Fonts are loaded locally with
`font-display: swap`; there are no external font service requests.
