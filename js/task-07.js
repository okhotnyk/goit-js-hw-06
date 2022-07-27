const inputRef = document.querySelector("#font-size-control");
const textSizedRef = document.querySelector("#text");

inputRef.addEventListener("input", inputHandle);

function inputHandle(event) {
  let size = event.currentTarget.value;
  textSizedRef.style.fontSize = `${size}px`;
}
