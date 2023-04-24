function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const btnChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

btnChange.addEventListener("click", changeColor);
