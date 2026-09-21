class HwCheatSheet extends HTMLElement {
  static get observedAttributes() { return ["locale", "day"]; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }

  render() {
    const sheet = window.HwCheatSheets.getSheet(this.getAttribute("locale"), this.getAttribute("day"));
    const { labels, day, locale } = sheet;
    const node = (tag, className, text) => {
      const element = document.createElement(tag);
      element.className = className;
      if (text) element.textContent = text;
      return element;
    };
    const article = node("article", `hw-sheet hw-sheet-day-${day}`);
    article.setAttribute("aria-labelledby", "hw-sheet-title");
    const header = node("header", "hw-sheet-header");
    const brandRow = node("div", "hw-sheet-brand-row");
    const brand = node("a", "hw-sheet-brand");
    brand.href = "https://pebblebyte.com/";
    const logo = node("img", "hw-sheet-logo");
    logo.src = "assets/pebblebyte-logo-yellow-square.png";
    logo.alt = "";
    brand.append(logo, node("span", "", "PebbleByte"));
    brandRow.append(brand, node("span", "hw-sheet-edition", `${labels.day} ${day} / ${locale.toUpperCase()}`));
    const titleRow = node("div", "hw-sheet-title-row");
    const title = node("h1", "", "Agentic Coding");
    title.id = "hw-sheet-title";
    titleRow.append(title, node("span", "hw-sheet-badge", "CHEAT SHEET"));
    header.append(brandRow, titleRow, node("p", "hw-sheet-subtitle", labels.subtitles[day - 1]));

    const sections = sheet.sections.map((section, index) => {
      const card = node("section", "hw-sheet-section");
      const heading = node("h2", "hw-sheet-section-title");
      heading.append(node("span", "hw-sheet-number", String(index + 1).padStart(2, "0")), document.createTextNode(section.title));
      const list = node("dl", "hw-sheet-entries");
      for (const entry of section.entries) {
        const row = node("div", "hw-sheet-entry");
        const term = node("dt", "", entry.term);
        const definition = node("dd", "", entry.definition);
        const metaphor = node("span", "hw-sheet-metaphor");
        const emoji = node("span", "hw-sheet-emoji", entry.emoji);
        emoji.setAttribute("aria-hidden", "true");
        metaphor.append(document.createTextNode(`${labels.metaphor}: `), emoji, document.createTextNode(` ${entry.metaphor}`));
        definition.append(metaphor);
        row.append(term, definition);
        list.append(row);
      }
      card.append(heading, list);
      return card;
    });
    const content = node("div", "hw-sheet-content");
    if (day === 1) {
      const left = node("div", "hw-sheet-column");
      const right = node("div", "hw-sheet-column");
      left.append(...sections.slice(0, 2));
      right.append(...sections.slice(2));
      content.append(left, right);
    } else {
      content.append(...sections);
    }
    const footer = node("footer", "hw-sheet-footer");
    const website = node("a", "hw-sheet-website", "pebblebyte.com");
    website.href = "https://pebblebyte.com/";
    footer.append(node("span", "", labels.footers[day - 1]), website);
    article.append(header, content, footer);
    this.replaceChildren(article);
  }
}
customElements.define("hw-cheat-sheet", HwCheatSheet);
