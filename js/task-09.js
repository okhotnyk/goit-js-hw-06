function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", onButtonChageColorClick);

function onButtonChageColorClick() {
  backgroundColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor.textContent;
}
