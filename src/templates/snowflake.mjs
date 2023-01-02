export default class Snowflake {

  constructor() {
    this.parent = document.querySelector("#snowflakes");
    this.element = document.createElement("div");
    this.element.classList.add("snowflake");
    this.parent.appendChild(this.element);

    this.y = Math.random()*window.innerHeight;
    this.randomize();
    this.updateElement();

    this.degreeCounter = Math.random()*360;
  }

  randomize() {
    this.size = Math.random()*20+5;
    this.x = Math.random()*window.innerWidth-this.size;
    this.opacity = Math.random();
    this.speed = Math.random()*3+2;
    this.degreeCounter = Math.random()*360;
  }

  updateElement() {
    this.element.style.width = `${this.size}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.opacity = `${this.opacity}`;
  }

  update() {
    this.degreeCounter += 2;
    if(this.degreeCounter >= 360) this.degreeCounter = 0;
    this.x = this.x + Math.cos(this.degreeCounter * (Math.PI/180));
    this.element.style.left = `${this.x}px`
    this.y += this.speed;
    this.element.style.top = `${this.y}px`;
    this.element.style.opacity = (this.opacity / window.innerHeight) * (window.innerHeight - this.y);
    if(this.y >= window.innerHeight) {
      this.randomize();
      this.updateElement();
      this.y = -this.size;
    }
  }
}
