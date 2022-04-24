//Mathias

let navnInput = document.querySelector("#navn");
let email = document.querySelector("#email");
let telefon = document.querySelector("#telefon");
let besked = document.querySelector("#besked");
let sendt = document.querySelector("#sendt");
let errorFejl = document.querySelectorAll(".error");

function validateForm() {

clearBesked();
let errorFlag = false;
  if(navnInput.value.length < 1) {
    console.log(errorFejl);
    errorFejl[0].innerText = "Navn kan ikke være tomt";
    navnInput.classList.add("error-border");
    errorFlag = true;

  }
  if(email.value.length < 1) {
    errorFejl[1].innerText = "Skriv en gyldig Email";
    email.classList.add("error-border");
    errorFlag = true;
}
if (telefon.value.length < 1) {
  errorFejl[2].innerText = "Skriv et telefonnummer";
  telefon.classList.add("error-border");
  errorFlag = true;
}
if (besked.value.length < 1) {
  errorFejl[3].innerText = "Skriv en besked";
  besked.classList.add("error-border");
  errorFlag = true;
  }

if (!errorFlag){
  sendt.innerText = "Den er sendt";
}
else {
  return false;
}

}
function clearBesked() {
  for (let i = 0; i < errorFejl.length; i++) {
    errorFejl[i].innerText = "";
  }
  navnInput.classList.remove("error-border");
  email.classList.remove("error-border");
  besked.classList.remove("error-border");
  telefon.classList.remove("error-border");
}
