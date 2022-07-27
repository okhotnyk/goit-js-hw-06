const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);
input.addEventListener("focus", onFocus);

function onBlur(event) {
  let value = event.currentTarget.value;
  value = value.trim();

  if (value.length == input.dataset.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}

function onFocus() {
  input.onfocus = this.value = "";
  input.classList.remove("invalid", "valid");
}
