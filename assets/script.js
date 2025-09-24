let slideIndex = 1;
let Index = 1;
let mun = 4;
let cas = 1;
showSlides(slideIndex);
showSlide(slideIndex);


// button function

function minusSlides() {
  // let slides = document.getElementsByClassName("slid");
    if ( slideIndex <= 1) {
      showSlides(cas);
    } else {
      showSlides(mun);
    }
};
function plusSlides(){
  showSlides(slideIndex ++);
};

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slid");
  if (n > slides.length) {slideIndex-- }
  if (n < 1) {slideIndex = slides.length}  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  slides[slideIndex-1].style.display = "block";
  }
}
function showSlide(n) {
  let i;
  let slide = document.querySelectorAll(".sli");
  if (n > slide.length) {Index-- }
  if (n < 1) {Index = slide.length}  
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  slide[Index-1].style.display = "block";
  }
}
function minuSlides() {
  // let slides = document.getElementsByClassName("slid");
    if ( Index <= 1) {
      showSlide(cas);
    } else {
      showSlide(mun);
    }
  // showSlides(mun);
};
function pluSlides(){
  showSlide(Index ++);
};

$(".menu").click(function(){
  $(".nav-links").toggle();
});