const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let value = event.currentTarget.value;
  value = value.trim();

  if (!value || !value.trim()) {
    value = "Anonymous";
  }

  refs.output.textContent = value;
}
