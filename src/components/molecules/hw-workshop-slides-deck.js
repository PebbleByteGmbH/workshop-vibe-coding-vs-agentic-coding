class HwWorkshopSlidesDeck extends HTMLElement {
  static get observedAttributes() {
    return ["locale", "slide-count", "slide-set"];
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.headerObserver?.disconnect();
    cancelAnimationFrame(this.headerFrame);
  }

  attributeChangedCallback() {
    this.render();
  }

  observeCardHeaders() {
    this.headerObserver?.disconnect();
    cancelAnimationFrame(this.headerFrame);
    const pendingGroups = new Set();
    this.headerObserver = new ResizeObserver((entries) => {
      entries.forEach(({ target }) => {
        const card = target.closest(".hw-deck-card");
        pendingGroups.add(card ? card.parentElement : target);
      });
      cancelAnimationFrame(this.headerFrame);
      // Apply sizes outside observer delivery to avoid resize-observer loops.
      this.headerFrame = requestAnimationFrame(() => {
        pendingGroups.forEach((group) => {
          if (!group.isConnected) return;
          const headers = [...group.querySelectorAll(":scope > .hw-deck-card > .hw-deck-card-visual")];
          // Reset before measuring so fonts, wrapping, and viewport changes can
          // shrink headers as well as grow them. Only align siblings in one row.
          headers.forEach((header) => header.style.removeProperty("--hw-deck-card-header-height"));
          const rows = new Map();
          headers.forEach((header) => {
            const top = header.parentElement.offsetTop;
            if (!rows.has(top)) rows.set(top, []);
            rows.get(top).push(header);
          });
          rows.forEach((row) => {
            const height = Math.max(...row.map((header) => header.offsetHeight));
            if (row.length > 1 && height > 0) {
              row.forEach((header) => header.style.setProperty("--hw-deck-card-header-height", `${height}px`));
            }
          });
        });
        pendingGroups.clear();
      });
    });

    this.querySelectorAll(".hw-deck-card-visual").forEach((header) => {
      this.headerObserver.observe(header);
      this.headerObserver.observe(header.parentElement.parentElement);
      // Content changes (including loaded fonts) must also resize shorter headers.
      [...header.children].forEach((child) => this.headerObserver.observe(child));
    });
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

    slides.append(...seminarSlides.map((slide, index) => createSlide(slide, slidesCopy, pageCopy.brand, index, seminarSlides.length)));
    reveal.append(slides);
    this.replaceChildren(reveal);
    this.observeCardHeaders();
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

function createSlide(slide, labels, brandCopy, index, total) {
  const section = document.createElement("section");
  const sectionClasses = ["seminar-slide"];

  if (slide.cover) {
    sectionClasses.push("seminar-slide-cover");
  }

  if (slide.layout) {
    sectionClasses.push(`seminar-slide-${slide.layout}`);
  }

  section.className = sectionClasses.join(" ");
  section.dataset.composition = slide.composition || "standard";
  section.dataset.palette = slide.palette || "white";
  if (slide.density) section.dataset.density = slide.density;

  const isStatement = slide.cover || slide.layout === "live-demo";
  if (slide.tone === "inverse") section.dataset.palette = "black";
  if (slide.blocks.some((block) => block.type === "screenshot")) section.dataset.media = "true";
  const header = document.createElement("header");
  header.className = "hw-deck-header";
  const heading = HwDeckUI.heading(slide.title, slide.cover ? 1 : 2, isStatement ? "display" : "slide");

  const content = document.createElement("div");
  content.className = "slide-content";
  content.append(...slide.blocks.map((block) => {
    const element = createBlock(block, labels);
    const exerciseList = slide.composition === "exercise-columns" && block.type === "bullets";
    const exerciseSteps = slide.composition === "exercise-steps" && block.type === "ordered";
    if (exerciseList || exerciseSteps) {
      element.classList.add("hw-deck-card");
      element.dataset.variant = "neutral";
      return HwDeckUI.sectionCard(element, HwDeckUI.icon(block.icon || (exerciseSteps ? "clipboard-list" : "file")));
    }
    return element;
  }));
  if (slide.composition === "exercise-table") {
    const examples = document.createElement("div");
    examples.className = "hw-deck-input-examples";
    const tableIndex = slide.blocks.findIndex((block) => block.type === "table");
    const table = content.children[tableIndex];
    const explanation = content.querySelector(":scope > .slide-text");
    if (table) examples.append(table);
    if (explanation) examples.append(explanation);
    content.append(examples);
  }
  if (slide.composition === "models") {
    // Keep the comparison together, with its three explanations below it.
    const explanations = document.createElement("div");
    explanations.className = "hw-deck-model-explanations";
    const sources = document.createElement("div");
    sources.className = "hw-deck-model-sources";
    explanations.append(...content.querySelectorAll(":scope > .slide-text"));
    sources.append(...content.querySelectorAll(":scope > .slide-link"));
    content.append(explanations, sources);
  }

  if (slide.subtitle) {
    header.append(HwDeckUI.label(slide.subtitle, "slide-eyebrow"));
  }

  if (slide.title) {
    header.append(heading);
  }

  section.append(header);

  if (slide.byline || slide.image) {
    section.append(createCoverMeta(slide, labels));
  }

  section.append(content);
  const footer = document.createElement("footer");
  footer.className = "hw-deck-footer";
  const number = HwDeckUI.label(`${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`, "hw-deck-page-number");
  footer.append(createSlideBrand(brandCopy), number);
  section.append(footer);

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
    const byline = HwDeckUI.paragraph(slide.byline);

    meta.append(byline);
  }

  return meta;
}

function createBlock(block, labels) {
  const builders = {
    agentFlow: createAgentFlow,
    agentLogos: createAgentLogos,
    automationFlow: createAutomationFlow,
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

function createAutomationFlow(block) {
  const flow = document.createElement("figure");
  flow.className = "hw-deck-automation";

  const intro = document.createElement("figcaption");
  intro.className = "hw-deck-automation-intro";
  intro.textContent = block.intro;

  const example = HwDeckUI.paragraph(block.example);
  example.className += " " + "hw-deck-automation-example";


  const steps = document.createElement("ol");
  steps.className = "hw-deck-automation-steps";

  steps.append(...block.steps.flatMap((item, index) => {
    const step = HwDeckUI.card("hw-deck-automation-step fragment", "neutral", "li");
    step.dataset.tone = item.tone;

    const symbol = document.createElement("span");
    symbol.className = "hw-deck-automation-symbol";
    symbol.setAttribute("aria-hidden", "true");

    const icon = HwDeckUI.icon(item.icon, "hw-deck-automation-icon");
    symbol.append(icon);

    const copy = document.createElement("div");
    copy.className = "hw-deck-automation-copy";

    const label = HwDeckUI.heading(item.label);

    const value = HwDeckUI.paragraph(item.value, "hw-deck-automation-value");

    const detail = HwDeckUI.paragraph(item.detail);
    detail.className += " " + "hw-deck-automation-detail";


    copy.append(value, detail);
    step.append(label, copy);
    HwDeckUI.sectionCard(step, symbol);

    if (index < block.steps.length - 1) {
      const arrow = document.createElement("li");
      arrow.className = "agent-flow-arrow hw-deck-automation-arrow fragment";
      arrow.setAttribute("aria-hidden", "true");
      return [step, arrow];
    }

    return [step];
  }));

  const loop = document.createElement("div");
  loop.className = "hw-deck-automation-loop fragment";

  const repeat = HwDeckUI.paragraph("", "hw-deck-automation-repeat");

  const repeatIcon = HwDeckUI.icon("refresh", "hw-deck-automation-repeat-icon");

  const repeatLabel = document.createElement("span");
  repeatLabel.textContent = block.repeat;
  repeat.append(repeatIcon, repeatLabel);
  loop.append(HwDeckUI.icon("arrow-up", "hw-deck-automation-return-arrow"), repeat);

  const takeaway = HwDeckUI.paragraph(block.takeaway);
  takeaway.className += " " + "hw-deck-automation-takeaway fragment";


  if (block.intro) flow.append(intro);
  if (block.example) flow.append(example);
  flow.append(steps, loop, takeaway);
  return flow;
}

function createEmojiOnly(block) {
  const list = document.createElement("div");
  list.className = "slide-emoji-row";

  list.append(...block.items.map((item) => {
    const emoji = document.createElement("div");
    emoji.className = "slide-emoji-item fragment";

    const symbols = HwDeckUI.icon(item);

    emoji.append(symbols);
    return emoji;
  }));

  return list;
}

function createAgentLogos(block, labels) {
  const grid = document.createElement("div");
  grid.className = "agent-logo-grid";
  grid.style.setProperty("--hw-deck-columns", Math.min(block.items.length, 3));

  grid.append(...block.items.map((item, index) => {
    const card = HwDeckUI.card("agent-logo-card fragment", cardVisualVariant(item, index), item.href ? "a" : "article");
    if (item.accent) {
      card.style.setProperty("--agent-brand-color", item.accent);
    }
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

    const name = HwDeckUI.heading(item.name);

    card.append(name);
    return HwDeckUI.sectionCard(card, mark);
  }));

  return grid;
}

function createConceptCards(block) {
  const grid = document.createElement("div");
  grid.className = "concept-card-grid";
  grid.style.setProperty("--hw-deck-columns", Math.min(block.items.length, 3));

  grid.append(...block.items.map((item, index) => {
    const card = HwDeckUI.card("concept-card fragment", cardVisualVariant(item, index));

    const title = HwDeckUI.heading(item.title);

    const children = [title];

    if (item.description) {
      const description = HwDeckUI.paragraph(item.description);
      description.className += " " + "concept-card-description";

      children.push(description);
    }

    if (item.metaphor) {
      const metaphor = HwDeckUI.paragraph(item.metaphor);
      metaphor.className += " " + "concept-card-metaphor";

      children.push(metaphor);
    }

    if (item.links?.length) {
      const links = document.createElement("ul");
      links.className = "hw-deck-concept-links";

      for (const itemLink of item.links) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = itemLink.href;
        link.textContent = itemLink.text;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        listItem.append(link);
        links.append(listItem);
      }

      children.push(links);
    }

    card.append(...children);
    return HwDeckUI.sectionCard(card, createConceptCardIcons(item));
  }));

  return grid;
}

function cardVisualVariant(item, index) {
  const variant = item.variant || ["neutral", "inverse", "accent"][index % 3];
  return variant === "inverted" ? "inverse" : variant;
}

function createConceptCardIcons(item) {
  if (!Array.isArray(item.icons) || !item.icons.length) {
    return createConceptCardSvgIcon(item.icon || "apps");
  }

  const icons = document.createElement("div");
  icons.className = "concept-card-icons";
  icons.append(...item.icons.map(createConceptCardSymbol));

  return icons;
}

function createConceptCardSymbol(symbol) {
  if (symbol.emoji) {
    const emoji = document.createElement("span");
    emoji.className = "concept-card-emoji-icon";
    emoji.textContent = symbol.emoji;
    emoji.setAttribute("aria-hidden", "true");
    return emoji;
  }

  if (typeof symbol === "string") {
    return createConceptCardSvgIcon(symbol);
  }

  return createConceptCardSvgIcon(symbol.icon);
}

function createConceptCardSvgIcon(name) {
  return HwDeckUI.icon(name, "concept-card-icon");
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

  if (block.emphasizeMiddle === true) {
    flowClasses.push("agent-flow-focused");
  }

  if (block.showArrows === false) {
    flowClasses.push("agent-flow-no-arrows");
  }

  flow.className = flowClasses.join(" ");

  const intro = HwDeckUI.paragraph(block.intro);
  intro.className += " " + "agent-flow-intro";


  const columns = document.createElement("div");
  columns.className = "agent-flow-columns";

  block.columns.forEach((column, index) => {
    columns.append(createAgentFlowColumn(column, block.showItemIcons !== false));

    if (block.showArrows !== false && index < block.columns.length - 1) {
      const arrow = document.createElement("div");
      arrow.className = "agent-flow-arrow fragment";
      arrow.setAttribute("aria-hidden", "true");
      columns.append(arrow);
    }
  });

  const keyIdea = HwDeckUI.card("", "inverse");
  keyIdea.className += " " + "slide-callout slide-callout-wide slide-callout-inverted agent-flow-key fragment";

  const label = HwDeckUI.heading(block.keyIdeaLabel || labels.keyIdeaLabel || "Key idea");

  const text = HwDeckUI.paragraph(block.keyIdea);


  keyIdea.append(label, text);
  if (block.intro) flow.append(intro);
  if (block.columns.length) flow.append(columns);
  if (block.keyIdea) flow.append(keyIdea);
  return flow;
}

function createAgentFlowColumn(column, showItemIcons = true) {
  const panel = HwDeckUI.card("", column.variant === "inverted" ? "inverse" : "neutral");
  const panelClasses = ["agent-flow-panel", `agent-flow-panel-${column.layout}`, "fragment"];

  if (column.size) {
    panelClasses.push(`agent-flow-panel-${column.size}`);
  }

  if (column.variant === "inverted") {
    panelClasses.push("agent-flow-panel-inverted");
  }

  panel.className += " " + panelClasses.join(" ");

  const title = HwDeckUI.heading(column.title);

  const items = document.createElement("div");
  items.className = "agent-flow-items";
  items.append(...column.items.map((item) => createAgentFlowItem(item, column.layout, showItemIcons)));

  panel.append(title, items);
  return HwDeckUI.sectionCard(panel, HwDeckUI.icon(column.icon || column.items[0]?.icon || "apps"));
}

function createAgentFlowItem(item, layout, showIcon = true) {
  const row = document.createElement("div");
  row.className = `agent-flow-item agent-flow-item-${layout}`;
  row.style.setProperty("--agent-flow-icon-color", item.color);

  const label = document.createElement("span");
  appendTextWithBreaks(label, item.label.replace(/\n/g, " "));

  if (showIcon) row.append(createIcon(item.icon));
  row.append(label);
  return row;
}

function createIcon(name) {
  return HwDeckUI.icon(name, "agent-flow-icon");
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
  const paragraph = HwDeckUI.paragraph(block.text);
  paragraph.className += " " + "slide-text fragment";

  return paragraph;
}

function createProfile(block) {
  const profile = document.createElement("div");
  profile.className = "slide-profile fragment";

  const lines = document.createElement("div");
  lines.className = "slide-profile-lines";
  lines.append(...block.lines.map((line) => {
    const item = HwDeckUI.paragraph(line);

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
    const icon = HwDeckUI.icon(item.type === "email" ? "mail" : "brand-linkedin", "slide-profile-contact-icon");
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
  image.loading = "eager";
  image.decoding = "async";
  image.draggable = false;
  const panel = document.createElement("div");
  panel.className = "hw-deck-image-panel";
  panel.append(image);
  figure.append(panel);

  if (block.caption) {
    const caption = document.createElement("figcaption");
    caption.textContent = block.caption;
    figure.append(caption);
  }

  return figure;
}

function createCallout(block) {
  const callout = HwDeckUI.card("", block.variant === "inverted" ? "inverse" : (block.variant || "neutral"));
  const calloutClasses = ["slide-callout", "fragment"];

  if (block.wide) {
    calloutClasses.push("slide-callout-wide");
  }

  if (block.variant === "inverted") {
    calloutClasses.push("slide-callout-inverted");
  }

  callout.className += " " + calloutClasses.join(" ");
  if (block.tone) callout.dataset.tone = block.tone;

  const label = HwDeckUI.heading(block.label);

  const text = HwDeckUI.paragraph(block.text);


  callout.append(label, text);
  return HwDeckUI.sectionCard(callout, HwDeckUI.icon(block.icon || "message"));
}

function createPrompt(block) {
  const wrapper = document.createElement("div");
  wrapper.className = "slide-prompt fragment";

  const label = HwDeckUI.heading(block.label);

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

  const tree = HwDeckUI.card("skill-anatomy-tree");

  const treeLabel = HwDeckUI.heading(block.treeLabel);

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = block.tree;
  pre.append(code);
  tree.append(treeLabel, pre);
  HwDeckUI.sectionCard(tree, HwDeckUI.icon("folder"));

  const checklist = HwDeckUI.card("skill-anatomy-checklist");

  const checklistLabel = HwDeckUI.heading(block.checklistLabel);

  const list = document.createElement("ul");
  list.append(...block.items.map((item) => createListItem(item, block.revealItems === true)));
  checklist.append(checklistLabel, list);
  HwDeckUI.sectionCard(checklist, HwDeckUI.icon("clipboard-list"));

  if (block.panel !== "checklist") anatomy.append(tree);
  if (block.panel !== "tree") anatomy.append(checklist);
  return anatomy;
}

function createBullets(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.reveal === false ? "slide-list-block" : "slide-list-block fragment";

  if (block.label) {
    const label = HwDeckUI.heading(block.label);
    wrapper.append(label);
  }

  const list = document.createElement("ul");
  list.append(...block.items.map((item) => createListItem(item, block.revealItems === true)));
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

  const label = HwDeckUI.heading(block.label);

  const list = document.createElement("ol");
  list.append(...block.items.map((item) => createListItem(item, block.revealItems)));

  wrapper.append(label, list);
  return wrapper;
}

function createColumns(block) {
  const list = document.createElement("ul");
  list.className = "slide-chip-list fragment";
  list.append(...block.items.map((item) => createListItem(item, block.revealItems === true)));
  return list;
}

function createComparison(block) {
  const comparison = document.createElement("div");
  comparison.className = block.revealItems ? "slide-comparison" : "slide-comparison fragment";
  comparison.style.setProperty("--hw-deck-columns", Math.min(block.items.length, 3));

  comparison.append(...block.items.map((item) => {
    const card = HwDeckUI.card("", block.cardStyle === "inverted" ? "inverse" : "neutral");
    const cardClasses = ["slide-mini-card"];

    if (block.cardStyle === "inverted") {
      cardClasses.push("slide-mini-card-inverted");
    }

    if (block.revealItems) {
      cardClasses.push("fragment");
    }

    card.className += " " + cardClasses.join(" ");
    if (item.tone) {
      card.dataset.tone = item.tone;
    }

    const label = HwDeckUI.heading(item.label);

    card.append(label, createCode(item));
    return HwDeckUI.sectionCard(card, HwDeckUI.icon(item.icon || "code"));
  }));

  return comparison;
}

function createSecurityColumns(block) {
  const wrapper = document.createElement("div");
  wrapper.className = block.revealItems ? "slide-security" : "slide-security fragment";
  wrapper.style.setProperty("--hw-deck-columns", Math.min(block.columns.length, 3));

  wrapper.append(...block.columns.map((column) => {
    const card = HwDeckUI.card(block.revealItems ? "slide-mini-card fragment" : "slide-mini-card", column.variant || "neutral");
    if (column.tone) {
      card.dataset.tone = column.tone;
    }

    const label = HwDeckUI.heading(column.label);

    const list = document.createElement("ul");
    list.append(...column.items.map((item) => createListItem(item)));

    card.append(label, list);
    return HwDeckUI.sectionCard(card, HwDeckUI.icon(column.icon || "lock"));
  }));

  return wrapper;
}

function createTable(block) {
  const table = document.createElement("table");
  table.className = "slide-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.append(...block.headers.map((header, index) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.scope = "col";
    if (block.numericColumns?.includes(index)) th.className = "hw-deck-numeric";
    return th;
  }));
  thead.append(headRow);

  const tbody = document.createElement("tbody");
  tbody.append(...block.rows.map((row) => {
    const tr = document.createElement("tr");
    tr.className = "fragment";

    tr.append(...row.map((cell, index) => {
      const td = document.createElement(index === 0 ? "th" : "td");
      if (index === 0) td.scope = "row";
      if (block.numericColumns?.includes(index)) td.classList.add("hw-deck-numeric");
      appendTableCellContent(td, cell);
      return td;
    }));
    return tr;
  }));

  table.append(thead, tbody);

  {
    const wrapper = document.createElement("div");
    wrapper.className = "hw-deck-table-scroll fragment";
    wrapper.tabIndex = 0;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-label", block.scrollLabel || block.headers.join(" · "));
    wrapper.append(table);
    wrapper.addEventListener("keydown", (event) => {
      if (["ArrowLeft", "ArrowRight"].includes(event.key) && wrapper.scrollWidth > wrapper.clientWidth) {
        // Let the browser scroll the focused table instead of navigating Reveal.
        event.stopPropagation();
      }
    });
    return wrapper;
  }

}

function appendTableCellContent(cellElement, cell) {
  if (typeof cell === "string") {
    cellElement.textContent = cell;
    return;
  }

  const label = document.createElement("span");
  label.className = "slide-table-label";

  if (cell.emojis?.length) {
    const emojis = document.createElement("span");
    emojis.textContent = cell.emojis.join("");
    emojis.setAttribute("aria-hidden", "true");
    label.append(emojis);
  }

  for (const name of cell.icons || (cell.icon ? [cell.icon] : [])) {
    label.append(HwDeckUI.icon(name, "slide-table-icon"));
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
