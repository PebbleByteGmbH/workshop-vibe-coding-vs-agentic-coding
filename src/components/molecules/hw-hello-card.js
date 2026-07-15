class HwHelloCard extends HTMLElement {
  static get observedAttributes() {
    return [
      "eyebrow",
      "title",
      "title-level",
      "button-label",
      "button-id",
      "idea",
      "link-href",
      "link-label",
      "secondary-link-href",
      "secondary-link-label"
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.replaceChildren();
    const children = [
      createElement("hw-label", "text", this.eyebrow),
      createElement("hw-title", "text", this.title, { level: this.titleLevel }),
      createIdeaButton(this.buttonLabel, this.buttonId),
      createElement("hw-idea", "text", this.idea)
    ];

    if (this.links.length) {
      children.push(createLinkGroup(this.links));
    }

    this.append(...children);
  }

  get eyebrow() {
    return this.getAttribute("eyebrow") || "Agentic Coding";
  }

  get title() {
    return this.getAttribute("title") || "Hello Workshop";
  }

  get titleLevel() {
    return this.getAttribute("title-level") || "1";
  }

  get buttonLabel() {
    return this.getAttribute("button-label") || "Tap for a tiny idea";
  }

  get buttonId() {
    return this.getAttribute("button-id") || "idea-button";
  }

  get idea() {
    return this.getAttribute("idea") || "Make one small thing. Make it feel yours.";
  }

  get linkHref() {
    return this.getAttribute("link-href") || "";
  }

  get linkLabel() {
    return this.getAttribute("link-label") || "Cheat sheet";
  }

  get secondaryLinkHref() {
    return this.getAttribute("secondary-link-href") || "";
  }

  get secondaryLinkLabel() {
    return this.getAttribute("secondary-link-label") || "Seminar slides day 2";
  }

  get links() {
    return [
      { href: this.linkHref, label: this.linkLabel },
      { href: this.secondaryLinkHref, label: this.secondaryLinkLabel }
    ].filter((link) => link.href);
  }
}

function createIdeaButton(label, id) {
  const button = document.createElement("hw-button");
  button.id = id;
  button.setAttribute("label", label);
  return button;
}

function createLink(href, label) {
  const link = document.createElement("hw-link");
  link.setAttribute("href", href);
  link.setAttribute("label", label);
  return link;
}

function createLinkGroup(links) {
  const group = document.createElement("div");
  group.className = "seminar-link-list";
  group.append(...links.map((link) => createLink(link.href, link.label)));
  return group;
}

function createElement(tagName, textAttribute, text, attributes = {}) {
  const element = document.createElement(tagName);
  element.setAttribute(textAttribute, text);

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }

  return element;
}

customElements.define("hw-hello-card", HwHelloCard);
