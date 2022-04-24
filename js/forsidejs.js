// Jacob
// først definere vi variablen "slideIndex"
let slideIndex = 1;

//Funktion showSlides referes til slideIndex - funktionen defineres
showSlides(slideIndex);

// her sættes en ny funktion "plusSlides" med parameteren "n" som er et udefineret tal
function plusSlides(n) {
  //slideIndex += n giver følgende: slideIndex = slideIndex + n
  showSlides(slideIndex += n);
}

// I denne funktion sættes currentSlide til parameter verdien "n"
function currentSlide(n) {
  //slideIndex sættes til "n" værdi
  showSlides(slideIndex = n);
}

// Her laves funktionen showSlides med parameteret n
function showSlides(n) {
  // Tilkændegiver variablen "i" til senere ændring
  let i;

  //Fortæller at variablen "slides" findes fra HTML classen "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  //Fortæller at variablen "dots" findes fra HTML classen "dot"
  let dots = document.getElementsByClassName("dot");

  //slides.length = array
  // Her siger vi at hvis n er større end slide.length så skal slideIndex være = 1
  if (n > slides.length) {slideIndex = 1;}
  
  // Hvis n er mindre end
  if (n < 1) {slideIndex = slides.length;}
  
  // i  er et tal der ændres hvergang loop'et kører
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
