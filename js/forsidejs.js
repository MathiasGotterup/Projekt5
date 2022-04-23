// Jacob

let slideIndex = 1;

//Viser billedet når siden startes
showSlides(slideIndex);

// Frem og tilbage knapperne i siden virker
function plusSlides(n) {
  //slideIndex += n giver følgende: slideIndex = slideIndex + n
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  //slideIndex = n giver følgende: slideIndex = n
  showSlides(slideIndex = n);
}

function showSlides(n) {
  // Tilkændegiver variablen "i" til senere ændring
  let i;

  //Fortæller at variablen "slides" findes fra HTML classen "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  //Fortæller at variablen "dots" findes fra HTML classen "dot"
  let dots = document.getElementsByClassName("dot");

  //slides.length = array
  if (n > slides.length) {slideIndex = 1;}
  
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
