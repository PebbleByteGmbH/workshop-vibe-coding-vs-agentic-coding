(function () {
  const locale = window.HwI18n.getLocale();
  const sheet = window.HwCheatSheets.getSheet(locale, new URLSearchParams(location.search).get("day"));
  const { day, labels } = sheet;
  const common = window.HwI18n.getCopy(locale);
  const localize = href => window.HwI18n.localizeHref(href, locale);
  document.documentElement.lang = locale;
  document.title = `Agentic Coding - ${labels.title} - ${labels.day} ${day}`;
  const preview = document.querySelector("hw-cheat-sheet");
  preview.setAttribute("locale", locale);
  preview.setAttribute("day", day);
  document.querySelector("[data-sheet-format]").textContent = labels.format;
  const home = document.querySelector("[data-sheet-home]");
  home.textContent = labels.home;
  home.href = localize("index.html");
  const slides = document.querySelector("[data-sheet-slides]");
  slides.textContent = `${labels.slides} - ${labels.day} ${day}`;
  slides.href = localize(day === 2 ? "workshop-slides-day-2.html" : "workshop-slides.html");
  const days = document.querySelector("[data-sheet-days]");
  days.setAttribute("aria-label", labels.navigation);
  for (const value of [1, 2]) {
    const link = document.createElement("a");
    link.href = localize(`workshop-cheat-sheets.html?day=${value}`);
    link.textContent = `${labels.day} ${value}`;
    if (value === day) link.setAttribute("aria-current", "page");
    days.append(link);
  }
  const download = document.querySelector("[data-sheet-download]");
  const filename = `ai-workshop-day-${day}-${locale}.pdf`;
  download.href = `assets/cheat-sheets/${filename}`;
  download.download = filename;
  download.textContent = labels.download;
  const language = document.querySelector("hw-locale-switch");
  language.setAttribute("locale", locale);
  language.setAttribute("aria-label", common.localeSwitch.ariaLabel);
  language.setAttribute("en-label", common.localeSwitch.enLabel);
  language.setAttribute("de-label", common.localeSwitch.deLabel);
  const theme = document.querySelector("hw-theme-switch");
  for (const [attribute, key] of [["dark-label", "darkLabel"], ["light-label", "lightLabel"], ["use-dark-label", "useDarkLabel"], ["use-light-label", "useLightLabel"]]) {
    theme.setAttribute(attribute, common.theme[key]);
  }
  theme.addEventListener("click", () => {
    const dark = document.body.classList.toggle("theme-dark");
    document.body.classList.toggle("theme-light", !dark);
    theme.setChecked(dark);
  });
})();
