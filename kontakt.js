let navnInput = document.querySelector("#navn");
let email = document.querySelector("#email");
let telefon = document.querySelector("#telefon");
let besked = document.querySelector("#besked");
let sendt = document.querySelector("#sendt");
let errorFejl = document.querySelector(".error");

function validateForm() {

  clearBesked();

  if(navnInput.value.length < 1) {
    errorFejl[0].innerText = "Name cannot be blank";
    navnInput.classList.add("error-bordor")

  }
  if(!emailIsValid(email.valid)) {
    errorFejl[1].innerText = "Invalid Email";
    navnInput.classList.add("error-bordor")
}
function clearBesked() {
  for (var i = 0; i < errorFejl.length; i++) {
    errorFejl[i].innerText = "";
  }
  navnInput.classList.remove("error-bordor")
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
