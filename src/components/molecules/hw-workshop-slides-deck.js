class HwWorkshopSlidesDeck extends HTMLElement {
  static get observedAttributes() {
    return ["locale", "slide-count", "slide-set"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const locale = this.getAttribute("locale") || window.HwI18n?.getLocale() || "en";
    const pageCopy = window.HwI18n?.getCopy(locale) || {};
    const slidesCopy = pageCopy.slidesPage || {};
    const seminarSlides = getSlides(getSlideSet(pageCopy, this.getAttribute("slide-set")), this.getAttribute("slide-count"));
    const reveal = document.createElement("div");
    reveal.className = "reveal";

    const slides = document.createElement("div");
    slides.className = "slides";

    slides.append(...seminarSlides.map((slide) => createSlide(slide, slidesCopy)));
    reveal.append(slides);
    reveal.append(createSlideBrand(pageCopy.brand));
    this.replaceChildren(reveal);
  }
}

function getSlideSet(pageCopy, slideSet) {
  if (slideSet === "day2") {
    return pageCopy.slidesDay2 || [];
  }

  return pageCopy.slides || [];
}

function getSlides(slides, slideCount) {
  const count = Number.parseInt(slideCount, 10);

  if (!Number.isFinite(count) || count < 1) {
    return slides;
  }

  return slides.slice(0, count);
}

function createSlideBrand(brandCopy = {}) {
  const brand = document.createElement("a");
  brand.className = "slide-brand";
  brand.href = "https://pebblebyte.com/";
  brand.target = "_blank";
  brand.rel = "noopener noreferrer";
  brand.setAttribute("aria-label", brandCopy.ariaLabel || "PebbleByte website");

  const logo = document.createElement("img");
  logo.src = "assets/pebblebyte-logo-yellow-square.png";
  logo.alt = "";
  logo.setAttribute("aria-hidden", "true");
  logo.draggable = false;

  const name = document.createElement("span");
  name.textContent = "PebbleByte";

  brand.append(logo, name);
  return brand;
}

function createSlide(slide, labels) {
  const section = document.createElement("section");
  const sectionClasses = ["seminar-slide"];

  if (slide.cover) {
    sectionClasses.push("seminar-slide-cover");
  }

  if (slide.layout) {
    sectionClasses.push(`seminar-slide-${slide.layout}`);
  }

  section.className = sectionClasses.join(" ");

  const heading = document.createElement(slide.cover ? "h1" : "h2");
  appendTextWithBreaks(heading, slide.title);

  const content = document.createElement("div");
  content.className = "slide-content";
  content.append(...slide.blocks.map((block) => createBlock(block, labels)));

  if (slide.subtitle) {
    const eyebrow = document.createElement("p");
    eyebrow.className = "slide-eyebrow";
    eyebrow.textContent = slide.subtitle;
    section.append(eyebrow);
  }

  if (slide.title) {
    section.append(heading);
  }

  if (slide.byline || slide.image) {
    section.append(createCoverMeta(slide, labels));
  }

  section.append(content);

  if (slide.notes) {
    const notes = document.createElement("aside");
    notes.className = "notes";
    notes.textContent = slide.notes;
    section.append(notes);
  }

  return section;
}

function createCoverMeta(slide, labels) {
  const meta = document.createElement(slide.bylineHref ? "a" : "div");
  meta.className = "slide-cover-meta";
  if (slide.bylineHref) {
    meta.href = slide.bylineHref;
    meta.target = "_blank";
    meta.rel = "noopener noreferrer";
    meta.setAttribute("aria-label", formatLabel(labels.bylineAriaLabel, { byline: slide.byline }) || `${slide.byline} on LinkedIn`);
  }

  if (slide.image) {
    const image = document.createElement("img");
    image.src = slide.image.src;
    image.alt = slide.image.alt || "";
    image.loading = "eager";
    image.decoding = "async";
    image.draggable = false;
    meta.append(image);
  }

  if (slide.byline) {
    const byline = document.createElement("p");
    byline.textContent = slide.byline;
    meta.append(byline);
  }

  return meta;
}

function createBlock(block, labels) {
  const builders = {
    agentFlow: createAgentFlow,
    agentLogos: createAgentLogos,
    bullets: createBullets,
    callout: createCallout,
    code: createCode,
    columns: createColumns,
    comparison: createComparison,
    conceptCards: createConceptCards,
    emojiOnly: createEmojiOnly,
    link: createLink,
    ordered: createOrderedList,
    profile: createProfile,
    prompt: createPrompt,
    screenshot: createScreenshot,
    security: createSecurityColumns,
    skillAnatomy: createSkillAnatomy,
    table: createTable,
    text: createText
  };

  return builders[block.type](block, labels);
}

function createEmojiOnly(block) {
  const list = document.createElement("div");
  list.className = "slide-emoji-row";

  list.append(...block.items.map((item) => {
    const emoji = document.createElement("div");
    emoji.className = "slide-emoji-item fragment";

    const symbols = document.createElement("span");
    symbols.textContent = item;

    emoji.append(symbols);
    return emoji;
  }));

  return list;
}

function createAgentLogos(block, labels) {
  const grid = document.createElement("div");
  grid.className = "agent-logo-grid";

  grid.append(...block.items.map((item) => {
    const card = document.createElement(item.href ? "a" : "article");
    card.className = "agent-logo-card fragment";
    card.style.setProperty("--agent-logo-accent", item.accent);
    if (item.href) {
      card.href = item.href;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    if (item.logoBackground) {
      card.style.setProperty("--agent-logo-bg", item.logoBackground);
    }

    const mark = document.createElement("div");
    mark.className = "agent-logo-mark";

    if (item.logo) {
      const logo = document.createElement("img");
      logo.src = item.logo;
      logo.alt = item.alt || formatLabel(labels.fallbackLogoAlt, { name: item.name }) || `${item.name} logo`;
      logo.loading = "lazy";
      mark.append(logo);
    } else {
      mark.textContent = item.mark;
    }

    const name = document.createElement("strong");
    name.textContent = item.name;

    card.append(mark, name);
    return card;
  }));

  return grid;
}

function createConceptCards(block) {
  const grid = document.createElement("div");
  grid.className = "concept-card-grid";

  grid.append(...block.items.map((item) => {
    const card = document.createElement("article");
    card.className = "concept-card fragment";
    card.style.setProperty("--concept-card-accent", item.accent);

    const title = document.createElement("strong");
    title.textContent = item.title;

    const children = [createConceptCardIcons(item), title];

    if (item.description) {
      const description = document.createElement("p");
      description.className = "concept-card-description";
      description.textContent = item.description;
      children.push(description);
    }

    if (item.metaphor) {
      const metaphor = document.createElement("p");
      metaphor.className = "concept-card-metaphor";
      metaphor.textContent = item.metaphor;
      children.push(metaphor);
    }

    card.append(...children);
    return card;
  }));

  return grid;
}

function createConceptCardIcons(item) {
  if (!Array.isArray(item.icons)) {
    return createConceptCardSvgIcon(item.icon);
  }

  const icons = document.createElement("div");
  icons.className = "concept-card-icons";
  icons.append(...item.icons.map(createConceptCardSymbol));

  return icons;
}

function createConceptCardSymbol(symbol) {
  if (typeof symbol === "string") {
    return createConceptCardSvgIcon(symbol);
  }

  if (symbol.emoji) {
    const emoji = document.createElement("span");
    emoji.className = "concept-card-emoji-icon";
    emoji.textContent = symbol.emoji;
    emoji.setAttribute("aria-hidden", "true");
    return emoji;
  }

  return createConceptCardSvgIcon(symbol.icon);
}

function createConceptCardSvgIcon(name) {
  const icon = document.createElement("img");
  icon.className = "concept-card-icon";
  icon.src = `vendor/tabler-icons/outline/${name}.svg`;
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

function createAgentFlow(block, labels) {
  const flow = document.createElement("div");
  const flowClasses = ["agent-flow", `agent-flow-count-${block.columns.length}`, "fragment"];

  if (block.equalHeight === true) {
    flowClasses.push("agent-flow-equal");
  }

  if (block.equalColumns === true) {
    flowClasses.push("agent-flow-equal-columns");
  }

  if (block.showArrows === false) {
    flowClasses.push("agent-flow-no-arrows");
  }

  flow.className = flowClasses.join(" ");

  const intro = document.createElement("p");
  intro.className = "agent-flow-intro";
  intro.textContent = block.intro;

  const columns = document.createElement("div");
  columns.className = "agent-flow-columns";

  block.columns.forEach((column, index) => {
    columns.append(createAgentFlowColumn(column));

    if (block.showArrows !== false && index < block.columns.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "agent-flow-arrow fragment";
      arrow.setAttribute("aria-hidden", "true");
      columns.append(arrow);
    }
  });

  const keyIdea = document.createElement("div");
  keyIdea.className = "slide-callout slide-callout-wide slide-callout-inverted agent-flow-key fragment";

  const label = document.createElement("strong");
  label.textContent = block.keyIdeaLabel || labels.keyIdeaLabel || "Key idea";

  const text = document.createElement("p");
  text.textContent = block.keyIdea;

  keyIdea.append(label, text);
  flow.append(intro, columns, keyIdea);
  return flow;
}

function createAgentFlowColumn(column) {
  const panel = document.createElement("div");
  const panelClasses = ["agent-flow-panel", `agent-flow-panel-${column.layout}`, "fragment"];

  if (column.size) {
    panelClasses.push(`agent-flow-panel-${column.size}`);
  }

  if (column.variant === "inverted") {
    panelClasses.push("agent-flow-panel-inverted");
  }

  panel.className = panelClasses.join(" ");

  const title = document.createElement("h3");
  title.textContent = column.title;

  const items = document.createElement("div");
  items.className = "agent-flow-items";
  items.append(...column.items.map((item) => createAgentFlowItem(item, column.layout)));

  panel.append(title, items);
  return panel;
}

function createAgentFlowItem(item, layout) {
  const row = document.createElement("div");
  row.className = `agent-flow-item agent-flow-item-${layout}`;
  row.style.setProperty("--agent-flow-icon-color", item.color);

  const icon = createIcon(item.icon);
  const label = document.createElement("span");
  appendTextWithBreaks(label, item.label);

  row.append(icon, label);
  return row;
}

function createIcon(name) {
  const icon = document.createElement("img");
  icon.className = "agent-flow-icon";
  icon.src = `vendor/tabler-icons/outline/${name}.svg`;
  icon.alt = "";
  icon.loading = "eager";
  icon.decoding = "async";
  icon.draggable = false;

  return icon;
}

function appendTextWithBreaks(element, text) {
  const lines = text.split("\n");

  lines.forEach((line, index) => {
    if (index > 0) element.append(document.createElement("br"));
    element.append(document.createTextNode(line));
  });
}

function formatLabel(template, values) {
  if (!template) return "";

  return Object.entries(values).reduce((label, [name, value]) => {
    return label.split(`{${name}}`).join(value || "");
  }, template);
}

function createText(block) {
  const paragraph = document.createElement("p");
  paragraph.className = "slide-text fragment";
  paragraph.textContent = block.text;
  return paragraph;
}

function createProfile(block) {
  const profile = document.createElement("div");
  profile.className = "slide-profile fragment";

  const lines = document.createElement("div");
  lines.className = "slide-profile-lines";
  lines.append(...block.lines.map((line) => {
    const item = document.createElement("p");
    item.textContent = line;
    return item;
  }));

  const contacts = document.createElement("div");
  contacts.className = "slide-profile-contacts";
  contacts.append(...block.contacts.map(createProfileContact));

  profile.append(lines, contacts);
  return profile;
}

function createProfileContact(item) {
  const link = document.createElement("a");
  link.className = `slide-profile-contact slide-profile-contact-${item.type}`;
  link.href = item.href;
  link.target = item.type === "email" ? "_self" : "_blank";

  if (item.type !== "email") {
    link.rel = "noopener noreferrer";
  }

  if (item.type === "email" || item.type === "linkedin") {
    const icon = document.createElement("span");
    icon.className = "slide-profile-contact-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = item.type === "email" ? "@" : "in";
    link.append(icon);
  }

  const label = document.createElement("span");
  label.textContent = item.label;
  link.append(label);
  return link;
}

function createLink(block) {
  const anchor = document.createElement("a");
  anchor.className = block.size === "small" ? "slide-link slide-link-small fragment" : "slide-link fragment";
  anchor.href = block.href;
  anchor.textContent = block.text;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  return anchor;
}

function createScreenshot(block) {
  const figure = document.createElement("figure");
  figure.className = "slide-screenshot fragment";

  const image = document.createElement("img");
  image.src = block.src;
  image.alt = block.alt || "";
  image.loading = "lazy";
  image.decoding = "async";
  image.draggable = false;
  figure.append(image);

  if (block.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = block.caption;
    figure.append(caption);
  }

  return figure;
}

function createCallout(block) {
  const callout = document.createElement("div");
  const calloutClasses = ["slide-callout", "fragment"];

  if (block.wide) {
    calloutClasses.push("slide-callout-wide");
  }

  if (block.variant === "inverted") {
    calloutClasses.push("slide-callout-inverted");
  }

  callout.className = calloutClasses.join(" ");
  if (block.label === "Rule" || block.label === "Safety rule") {
    callout.dataset.tone = "green";
  }

  const label = document.createElement("strong");
  label.textContent = block.label;

  const text = document.createElement("p");
  text.textContent = block.text;

  callout.append(label, text);
  return callout;
}

function createPrompt(block) {
  const wrapper = document.createElement("div");
  wrapper.className = "slide-prompt fragment";

  const label = document.createElement("strong");
  label.textContent = block.label;

  wrapper.append(label, createCode(block));
  return wrapper;
}

function createCode(block) {
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = block.text;
  pre.append(code);
  return pre;
}

function createSkillAnatomy(block) {
  const anatomy = document.createElement("div");
  anatomy.className = "skill-anatomy fragment";

  const tree = document.createElement("div");
  tree.className = "skill-anatomy-tree";

  const treeLabel = document.createElement("strong");
  treeLabel.textContent = block.treeLabel;

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = block.tree;
  pre.append(code);
  tree.append(treeLabel, pre);

  const checklist = document.createElement("div");
  checklist.className = "skill-anatomy-checklist";

  const checklistLabel = document.createElement("strong");
  checklistLabel.textContent = block.checklistLabel;

  const list = document.createElement("ul");
  list.append(...block.items.map((item) => createListItem(item)));
  checklist.append(checklistLabel, list);

  anatomy.append(tree, checklist);
  return anatomy;
}

function createBullets(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.reveal === false ? "slide-list-block" : "slide-list-block fragment";

  if (block.label) {
    const label = document.createElement("strong");
    label.textContent = block.label;
    wrapper.append(label);
  }

  const list = document.createElement("ul");
  list.append(...block.items.map((item) => createListItem(item)));
  wrapper.append(list);
  return wrapper;
}

function createOrderedList(block) {
  const wrapper = document.createElement("div");
  const classes = ["slide-list-block", "fragment"];

  if (block.variant) {
    classes.push(`slide-list-block-${block.variant}`);
  }

  wrapper.className = classes.join(" ");

  const label = document.createElement("strong");
  label.textContent = block.label;

  const list = document.createElement("ol");
  list.append(...block.items.map((item) => createListItem(item, block.revealItems)));

  wrapper.append(label, list);
  return wrapper;
}

function createColumns(block) {
  const list = document.createElement("ul");
  list.className = "slide-chip-list fragment";
  list.append(...block.items.map((item) => createListItem(item)));
  return list;
}

function createComparison(block) {
  const comparison = document.createElement("div");
  comparison.className = block.revealItems ? "slide-comparison" : "slide-comparison fragment";

  comparison.append(...block.items.map((item) => {
    const card = document.createElement("div");
    const cardClasses = ["slide-mini-card"];

    if (block.cardStyle === "inverted") {
      cardClasses.push("slide-mini-card-inverted");
    }

    if (block.revealItems) {
      cardClasses.push("fragment");
    }

    card.className = cardClasses.join(" ");
    if (item.tone) {
      card.dataset.tone = item.tone;
    }

    const label = document.createElement("strong");
    label.textContent = item.label;

    card.append(label, createCode(item));
    return card;
  }));

  return comparison;
}

function createSecurityColumns(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.revealItems ? "slide-security" : "slide-security fragment";

  wrapper.append(...block.columns.map((column) => {
    const card = document.createElement("div");
    card.className = block.revealItems ? "slide-mini-card fragment" : "slide-mini-card";
    if (column.tone) {
      card.dataset.tone = column.tone;
    }

    const label = document.createElement("strong");
    label.textContent = column.label;

    const list = document.createElement("ul");
    list.append(...column.items.map((item) => createListItem(item)));

    card.append(label, list);
    return card;
  }));

  return wrapper;
}

function createTable(block) {
  const table = document.createElement("table");
  const revealCells = block.revealCells === true;
  const tableClasses = ["slide-table"];

  if (block.revealTable === true || (!block.revealRows && !revealCells)) {
    tableClasses.push("fragment");
  }

  table.className = tableClasses.join(" ");

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.append(...block.headers.map((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    return th;
  }));
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  tbody.append(...block.rows.map((row) => {
    const tr = document.createElement("tr");
    if (block.revealRows && !revealCells) {
      tr.className = "fragment";
    }

    tr.append(...row.map((cell) => {
      const td = document.createElement("td");
      if (revealCells) {
        td.className = "fragment";
      }
      appendTableCellContent(td, cell);
      return td;
    }));
    return tr;
  }));

  table.append(thead, tbody);
  return table;
}

function appendTableCellContent(cellElement, cell) {
  if (typeof cell === "string") {
    cellElement.textContent = cell;
    return;
  }

  const label = document.createElement("span");
  label.className = "slide-table-label";

  if (cell.icon) {
    const icon = document.createElement("img");
    icon.className = "slide-table-icon";
    icon.src = `vendor/tabler-icons/outline/${cell.icon}.svg`;
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    icon.draggable = false;
    label.append(icon);
  }

  const text = document.createElement("span");
  text.textContent = cell.text;
  label.append(text);
  cellElement.append(label);
}

function createListItem(text, reveal = false) {
  const item = document.createElement("li");
  if (reveal) {
    item.className = "fragment";
  }

  item.textContent = text;
  return item;
}

customElements.define("hw-workshop-slides-deck", HwWorkshopSlidesDeck);
