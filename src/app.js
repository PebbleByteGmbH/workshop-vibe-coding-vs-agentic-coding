const locale = window.HwI18n.getLocale();
const copy = window.HwI18n.getCopy(locale);
const page = document.body;
const workshopPage = document.querySelector("hw-workshop-page");

window.HwI18n.applyDocument("app", locale);
applyWorkshopPageCopy(workshopPage, copy, locale);

const themeSwitch = document.querySelector("hw-theme-switch");
const ideaButton = document.querySelector("#idea-button");
const ideaText = document.querySelector("hw-idea");
const ideas = copy.app.ideas;

let ideaIndex = 0;

themeSwitch.addEventListener("click", () => {
  const darkMode = page.classList.toggle("theme-dark");
  page.classList.toggle("theme-light", !darkMode);
  themeSwitch.setChecked(darkMode);
});

ideaButton.addEventListener("click", () => {
  ideaIndex = (ideaIndex + 1) % ideas.length;
  ideaText.setAttribute("text", ideas[ideaIndex]);
  ideaButton.pop();
});

function applyWorkshopPageCopy(element, pageCopy, currentLocale) {
  const hero = pageCopy.app.page;

  element.setAttribute("eyebrow", hero.eyebrow);
  element.setAttribute("title", hero.title);
  element.setAttribute("button-label", hero.buttonLabel);
  element.setAttribute("idea", hero.idea);
  element.setAttribute("link-href", window.HwI18n.localizeHref(hero.linkHref, currentLocale));
  element.setAttribute("link-label", hero.linkLabel);

  if (hero.secondaryLinkHref) {
    element.setAttribute("secondary-link-href", window.HwI18n.localizeHref(hero.secondaryLinkHref, currentLocale));
    element.setAttribute("secondary-link-label", hero.secondaryLinkLabel);
  } else {
    element.removeAttribute("secondary-link-href");
    element.removeAttribute("secondary-link-label");
  }

  element.setAttribute("dark-label", pageCopy.theme.darkLabel);
  element.setAttribute("light-label", pageCopy.theme.lightLabel);
  element.setAttribute("use-dark-label", pageCopy.theme.useDarkLabel);
  element.setAttribute("use-light-label", pageCopy.theme.useLightLabel);
  element.setAttribute("locale", currentLocale);
  element.setAttribute("locale-aria-label", pageCopy.localeSwitch.ariaLabel);
  element.setAttribute("locale-en-label", pageCopy.localeSwitch.enLabel);
  element.setAttribute("locale-de-label", pageCopy.localeSwitch.deLabel);
  element.setAttribute("brand-aria-label", pageCopy.brand.ariaLabel);
}
