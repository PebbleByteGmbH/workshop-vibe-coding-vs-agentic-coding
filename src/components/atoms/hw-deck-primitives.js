/* Shared semantic primitives; no framework or shadow DOM needed. */
(function () {
  function textElement(tag, text, className) {
    const element = document.createElement(tag);
    element.className = className;
    String(text || "").split("\n").forEach((line, index) => {
      if (index) element.append(document.createElement("br"));
      element.append(document.createTextNode(line));
    });
    return element;
  }

  window.HwDeckUI = {
    heading(text, level = 3, role = "component") {
      const heading = textElement(`h${level}`, text, `hw-deck-heading hw-deck-heading-${role}`);
      if (role === "display" && String(text).includes("\n")) {
        heading.replaceChildren(...String(text).split("\n").map((line) =>
          textElement("span", line, "hw-deck-title-line")));
      }
      return heading;
    },
    paragraph(text, className = "") {
      return textElement("p", text, `hw-deck-copy ${className}`.trim());
    },
    label(text, className = "") {
      return textElement("span", text, `hw-deck-label ${className}`.trim());
    },
    icon(name, className = "") {
      const icon = document.createElement("img");
      icon.className = `hw-deck-icon ${className}`.trim();
      icon.src = `vendor/tabler-icons/outline/${name}.svg`;
      icon.alt = "";
      icon.setAttribute("aria-hidden", "true");
      icon.decoding = "async";
      icon.draggable = false;
      return icon;
    },
    // Keep the visual separate so every heading stays with the body copy.
    sectionCard(card, visual = this.icon("apps")) {
      const nodes = [...card.children];
      const header = document.createElement("div");
      header.className = "hw-deck-card-visual";
      const body = document.createElement("div");
      body.className = "hw-deck-card-body";
      header.append(visual);
      body.append(...nodes);
      if (card.matches("a[href]")) {
        const arrow = this.icon("arrow-up-right", "hw-deck-card-link-arrow");
        arrow.setAttribute("aria-hidden", "true");
        header.append(arrow);
      }
      card.classList.add("hw-deck-card-sectioned");
      card.append(header, body);
      return card;
    },
    card(className = "", variant = "neutral", tag = "article") {
      const card = document.createElement(tag);
      card.className = `hw-deck-card ${className}`.trim();
      card.dataset.variant = variant;
      return card;
    }
  };
})();
