// Jacob
// først definere vi variablen "slideIndex"
let slideIndex = 1;

//Funktion showSlides referes til slideIndex - funktionen defineres med variablen
showSlides(slideIndex);

// her sættes en ny funktion "plusSlides" med parameteren "n" som er et udefineret tal
function plusSlides(n) {
  //slideIndex += n giver følgende: slideIndex = slideIndex + n
  showSlides(slideIndex += n);
}

// I denne funktion sætter currentSlide parameter verdien til "n"
function currentSlide(n) {
  //slideIndex sættes til "n" værdi
  showSlides(slideIndex = n);
}

// Her laves funktionen showSlides med parameteret n
function showSlides(n) {
  // Tilkændegiver variablen "i" (et tal) til senere ændring
  let i;

  //Fortæller at variablen "slides" findes fra HTML classen "mySlides"
  let slides = document.getElementsByClassName("mySlides");

  //Fortæller at variablen "dots" findes fra HTML classen "dot"
  let dots = document.getElementsByClassName("prik");

  // Hvis n er større end slide.length (3) så skal slideIndex være = 1
  if (n > slides.length) {slideIndex = 1;}
  
  // Hvis n er mindre end 1 skal variablen slideIndex sættes til slide.length (3)
  if (n < 1) {slideIndex = slides.length;}
  
  // for loops har 3 statements:
  // statement 1 bliver udført 1 gang.                                Statement 1 sætter "i" til ligmed 0
  // statement 2 definere kravene for udførelse af loopet.            Statement 2 siger at hvis i er mindre end slides.length (1 < 3) så kør loopet
  // statement 3 bliver udført hvergang efter loopet er gennemført.   Statement 3 pludser i med 1
  for (i = 0; i < slides.length; i++) {
    // For hvert slide vi efterlade giver den dette slide stylingen "display = "none""
    slides[i].style.display = "none";
  }

  // dette forloop fungere som det ovenfor, dots.length er her også 3
  for (i = 0; i < dots.length; i++) {
    //Her ændres det nuværende slides dot class navn til "active" hvilket så findes i css og ændre prikkens farve
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //index starter på 0 .length starter på 1. Her rettes så de 2 hele tiden er det samme sted 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
