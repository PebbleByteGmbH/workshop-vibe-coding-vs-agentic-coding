class HwLink extends HTMLElement {
  static get observedAttributes() {
    return ["href", "label", "target"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const link = document.createElement("a");
    link.href = this.getAttribute("href") || "#";
    link.textContent = this.getAttribute("label") || this.textContent.trim() || "Link";

    if (this.hasAttribute("target")) {
      link.target = this.getAttribute("target");
      link.rel = "noopener";
    }

    this.replaceChildren(link);
  }
}

customElements.define("hw-link", HwLink);
