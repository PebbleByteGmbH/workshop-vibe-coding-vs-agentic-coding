class HwWorkshopSlidesPage extends HTMLElement {
  connectedCallback() {
    const surface = document.createElement("hw-surface");
    surface.append(
      document.createElement("hw-theme-switch"),
      document.createElement("hw-workshop-slides-deck")
    );

    this.replaceChildren(surface);
  }
}

customElements.define("hw-workshop-slides-page", HwWorkshopSlidesPage);
