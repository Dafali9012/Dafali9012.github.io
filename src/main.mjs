import Card from "./templates/card.mjs";
import Snowflake from "./templates/snowflake.mjs";

console.log("hello portfolio");

// generate project cards from data
const cards = [];
const projectData = await (await fetch("projects_data/projects.json")).json();
projectData.projects.forEach(project => {
  cards.push(
    new Card({
      title: project.title,
      description: project.description,
      image: project.image,
      url: project.url
    })
  );
});

document.querySelectorAll(".card").forEach(card => {
  let dir = Math.round(Math.random());
  let degrees = (Math.random()*5+1)*(dir==0?-1:1);
  card.style.transform = `rotate(${degrees}deg) scale(0.9)`;
  card.addEventListener("mouseenter", e => {
    card.style.transform = `rotate(0deg) scale(0.9)`;
  });
  card.addEventListener("mouseleave", e => {
    card.style.transform = `rotate(${degrees}deg) scale(0.9)`;
  });
});

const snowflakes = [];
for(let i = 0; i < 50; i++) {
  snowflakes.push(new Snowflake());
}

let start = null;
let elapsed = 0;
let targetFPS = 60;
function update(timestamp) {
  elapsed += !start ? timestamp : timestamp - start;
  if(elapsed >= 1000 / targetFPS) {
    elapsed = 0;
    snowflakes.forEach(snowflake => snowflake.update());
    cards.forEach(card => card.update());
  }
  start = timestamp;
  requestAnimationFrame(update);
}
requestAnimationFrame(update);
