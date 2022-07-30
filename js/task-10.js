function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const wrapper = document.querySelector("#boxes");
let boxAmount;

inputEl.addEventListener("input", onInputChange);
buttonCreateEl.addEventListener("click", createBoxes);
buttonDestroyEl.addEventListener("click", destroyBoxes);

function onInputChange(event) {
  boxAmount = event.currentTarget.value;
}

function createBoxes(event) {
  let allCreatedBoxes = [];
  for (let i = 0; i < boxAmount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${20 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    allCreatedBoxes.push(box);
    wrapper.append(...allCreatedBoxes);
  }
}

function destroyBoxes(event) {
  wrapper.innerHTML = "";
}
