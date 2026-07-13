const locale = window.HwI18n.getLocale();
const copy = window.HwI18n.getCopy(locale);

window.HwI18n.applyDocument("slides", locale);
applySlidesPageCopy(document.querySelector("hw-workshop-slides-page"), copy, locale);
initializeThemeSwitch();
initializeSlides();

function initializeThemeSwitch() {
  const page = document.body;
  const themeSwitch = document.querySelector("hw-theme-switch");

  if (!themeSwitch) return;

  themeSwitch.addEventListener("click", () => {
    const darkMode = page.classList.toggle("theme-dark");
    page.classList.toggle("theme-light", !darkMode);
    themeSwitch.setChecked(darkMode);
  });
}

function applySlidesPageCopy(element, pageCopy, currentLocale) {
  element.setAttribute("dark-label", pageCopy.theme.darkLabel);
  element.setAttribute("light-label", pageCopy.theme.lightLabel);
  element.setAttribute("use-dark-label", pageCopy.theme.useDarkLabel);
  element.setAttribute("use-light-label", pageCopy.theme.useLightLabel);
  element.setAttribute("locale", currentLocale);
  element.setAttribute("locale-aria-label", pageCopy.localeSwitch.ariaLabel);
  element.setAttribute("locale-en-label", pageCopy.localeSwitch.enLabel);
  element.setAttribute("locale-de-label", pageCopy.localeSwitch.deLabel);
}

function initializeSlides() {
  if (!window.Reveal) return;

  Reveal.initialize({
    controls: true,
    progress: true,
    hash: true,
    center: false,
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    transition: "slide"
  });
}
