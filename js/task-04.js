let counterValue = 0;
const counterWindow = document.querySelector("#value");

const actions = document.querySelector("#counter");
const butDecrement = actions.firstElementChild;
const butIncrement = actions.lastElementChild;

butDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counterWindow.textContent = counterValue;
});

butIncrement.addEventListener("click", () => {
  counterValue += 1;
  counterWindow.textContent = counterValue;
});
