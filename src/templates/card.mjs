export default class Card {
  constructor(data = {}) {
    this.data = {
      title: "default title",
      description: "default description",
      image: "no image",
      url: "github"
    }
    if(Object.keys(data).length != 0) this.data = { ...this.data, ...data };

    this.parent = document.querySelector("#projects");
    this.element = document.createElement("div");
    this.element.classList.add("col-4");
    this.element.innerHTML = `
      <div class="card">
        <h2 class="card-header">${this.data.title}</h2>
        <div class="card-image"></div>
        <p class="card-description">
          ${this.data.description}
        </p>
      </div>
    `;
    this.element.querySelector(".card-image").style.cssText = `
      background-image: url(${this.data.image});
    `;

    this.parent.appendChild(this.element);
  }
}
