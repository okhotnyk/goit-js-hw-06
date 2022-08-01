const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  let value = event.currentTarget.value;
  value = value.trim();

  if (value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
