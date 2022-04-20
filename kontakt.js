let navnInput = document.querySelector("#navn");
let email = document.querySelector("#email");
let telefon = document.querySelector("#telefon");
let besked = document.querySelector("#besked");
let sendt = document.querySelector("#sendt");
let errorFejl = document.querySelectorAll(".error");

function validateForm() {

clearBesked();

  if(navnInput.value.length < 1) {
    console.log(errorFejl);
    errorFejl[0].innerText = "Navn kan ikke være tomt";
    navnInput.classList.add("error-border")

  }
  if(!emailIsValid(email.valid)) {
    errorFejl[1].innerText = "Invalid Email";
    navnInput.classList.add("error-border")
}
}
function clearBesked() {
  for (var i = 0; i < errorFejl.length; i++) {
    errorFejl[i].innerText = "";
  }
  navnInput.classList.remove("error-bordor")
  email.classList.remove("error-bordor")
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);

}
