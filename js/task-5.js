function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");
console.log("body:", body)

btn.addEventListener('click', changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  body.style.transition = "3000ms ease";

  spanColor.innerHTML = body.style.backgroundColor;
}