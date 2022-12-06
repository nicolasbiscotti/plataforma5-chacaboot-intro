import value from "../../value.mjs";

export default class Counter extends HTMLElement {
  // count = 6;

  constructor() {
    console.log("counter-wc is being constructed");
    super();

    value.subscribeToValue(this.update);

    const container = document.createElement("div");
    container.style.color = "green";
    container.style.width = "50vw";
    container.style.margin = "0 auto";

    this.valSpan = document.createTextNode(value.getValue());

    const span = document.createElement("span");
    span.appendChild(this.valSpan);

    const botton = document.createElement("button");
    botton.textContent = "ADD";
    botton.addEventListener("click", () => {
      value.setValue(Number(this.valSpan.textContent) + 1);
    });

    container.append(span, botton);

    this.container = container;
  }

  connectedCallback() {
    console.log("counter-wc is beign added to the DOM");
    this.appendChild(this.container);
    this.update();
  }

  update = () => {
    this.valSpan.textContent = value.getValue();
    console.log("counter-wc being updated, spanText = " + this.valSpan.textContent);
  };

  // setCount = (count) => {
  //   if (count >= 0) {
  //     this.count = count;
  //   } else {
  //     this.count += 1;
  //   }
  //   this.update();
  //   console.log(this.count);
  // };
}
