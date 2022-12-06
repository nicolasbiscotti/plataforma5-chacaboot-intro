import value from "../../value.mjs";

export default class Show extends HTMLElement {
  constructor() {
    console.log("show-wc is being constructed");
    super();

    value.subscribeToValue(this.update);

    const container = document.createElement("p");
    this.text = document.createTextNode(value.getValue());

    container.appendChild(this.text);
    this.container = container;
  }

  connectedCallback() {
    console.log("show-wc is beign added to the DOM");
    this.appendChild(this.container);
    this.update();
  }

  update = () => {
    this.text.textContent = value.getValue();
  };
}
