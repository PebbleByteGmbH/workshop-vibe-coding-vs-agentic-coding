const locale = window.HwI18n.getLocale();
const copy = window.HwI18n.getCopy(locale);
const slidesPage = document.querySelector("hw-workshop-slides-page");
const pageName = slidesPage?.getAttribute("slide-set") === "day2" ? "slidesDay2" : "slides";

window.HwI18n.applyDocument(pageName, locale);
applySlidesPageCopy(slidesPage, copy, locale);
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

  const isPrintPdf = isPrintPdfRequest();
  document.documentElement.classList.toggle("hw-print-pdf", isPrintPdf);

  const revealOptions = {
    controls: !isPrintPdf,
    progress: !isPrintPdf,
    hash: true,
    center: false,
    width: isPrintPdf ? 1280 : "100%",
    height: isPrintPdf ? 720 : "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: false,
    transition: isPrintPdf ? "none" : "slide"
  };

  if (isPrintPdf) {
    revealOptions.view = "print";
  }

  Reveal.initialize(revealOptions);
}

function isPrintPdfRequest() {
  const params = new URLSearchParams(window.location.search);

  return params.has("print-pdf") || /[?&]print-pdf(?:[=&]|$)/.test(window.location.hash);
}
