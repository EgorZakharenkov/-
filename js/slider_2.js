var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
    showSlides(slideIndex = n);
}
let play = document.querySelector(".icon");
let videos = document.querySelectorAll(".videos");
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";



}

let bool = false;

const Play  = ()=>{
    if(bool == false){
        videos[slideIndex-1].play();
         bool = true;

    }
    else{
        videos[slideIndex-1].pause();
         bool = false;

    }
}

