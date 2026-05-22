class HwThemeSwitch extends HTMLElement {
  static get observedAttributes() {
    return ["checked", "dark-label", "light-label", "use-dark-label", "use-light-label"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.replaceChildren();

    const button = document.createElement("button");
    const checked = this.getAttribute("checked") === "true";
    button.type = "button";
    button.setAttribute("role", "switch");
    button.setAttribute("aria-checked", String(checked));
    button.setAttribute("aria-label", checked ? this.useLightLabel : this.useDarkLabel);

    const track = document.createElement("span");
    track.className = "switch-track";
    track.setAttribute("aria-hidden", "true");

    const thumb = document.createElement("span");
    thumb.className = "switch-thumb";

    const label = document.createElement("span");
    label.className = "switch-label";
    label.textContent = checked ? this.lightLabel : this.darkLabel;

    track.append(thumb);
    button.append(track, label);
    this.append(button);
  }

  setChecked(checked) {
    if (checked) {
      this.setAttribute("checked", "true");
      return;
    }

    this.removeAttribute("checked");
  }

  get darkLabel() {
    return this.getAttribute("dark-label") || "Dark";
  }

  get lightLabel() {
    return this.getAttribute("light-label") || "Light";
  }

  get useDarkLabel() {
    return this.getAttribute("use-dark-label") || "Use dark theme";
  }

  get useLightLabel() {
    return this.getAttribute("use-light-label") || "Use light theme";
  }
}

customElements.define("hw-theme-switch", HwThemeSwitch);
