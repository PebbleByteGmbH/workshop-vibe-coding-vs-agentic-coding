const page = document.body;
const themeSwitch = document.querySelector("hw-theme-switch");
const ideaButton = document.querySelector("#idea-button");
const ideaText = document.querySelector("hw-idea");

const ideas = [
  "Build a local campaign tracker: tasks, channels, owners, deadlines, and notes in IndexedDB.",
  "Make an Excel cleanup helper: paste messy rows, tag issues, and save cleanup rules locally.",
  "Create a design feedback board: store screens, comments, status, and decisions offline.",
  "Build a meeting action tracker: capture decisions, owners, due dates, and follow-ups.",
  "Make a tiny content calendar: plan posts, channels, copy drafts, and approval status.",
  "Create a customer quote library: save useful phrases, tags, sources, and reuse notes.",
  "Build a local asset checklist: track files, formats, usage rights, and missing exports.",
  "Make a budget sanity checker: enter planned vs actual costs and flag weird numbers.",
  "Create a research notes database: save observations, links, tags, and next steps.",
  "Build a handoff checklist: store recurring project steps and mark what is done."
];

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
