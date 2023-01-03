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
    this.element.classList.add("col-lg-4", "col-12", "card-container");
    this.element.innerHTML = `
      <div class="card">
        <h2 class="card-header">${this.data.title}</h2>
        <div class="card-image"></div>
        <p class="card-description">
          ${this.data.description}
        </p>
      </div>
    `;
    this.element.querySelector(".card-image").style.backgroundImage = `url(${this.data.image})`;
    this.parent.appendChild(this.element);

    this.x = this.element.getBoundingClientRect().left;
    this.y = this.element.getBoundingClientRect().top;
    this.width = this.element.getBoundingClientRect().width;

    this.element.style.left = `${(Math.random() * window.innerWidth - this.width/2) - this.x}px`;
    this.element.style.top = `${(Math.random() * window.innerHeight - this.width/2) - this.y}px`;

    this.element.style.transform = `rotate(${Math.random()*360}deg) scale(1)`;

    this.organized = false;
    this.organizeCount = 30;
  }

  update() {
    if(this.organizeCount > 0) this.organizeCount--;
    else if(!this.organized) {
      this.organized = true;
      this.element.style.left = `0px`;
      this.element.style.top = `0px`;
      this.element.style.transform = `rotate(0deg)`;
    }
  }
}
