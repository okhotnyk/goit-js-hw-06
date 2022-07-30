const submitForm = document.querySelector(".login-form");

submitForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    let objectDataForm = { email: email.value, password: password.value };
    console.log(objectDataForm);
    event.currentTarget.reset();
  }
}
