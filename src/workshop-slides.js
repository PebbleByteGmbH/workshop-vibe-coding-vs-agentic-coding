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
