var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
//ss
var slideIndex = 1;
showDivsSS(slideIndex);
function plusDivsSS(n) {
    showDivsSS(slideIndex += n);
}
function showDivsSS(n) {
    var i;
    var x = document.getElementsByClassName("mySlides1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
//ip
var slideIndex = 1;
showDivsIP(slideIndex);
function plusDivsIP(n) {
    showDivsIP(slideIndex += n);
}
function showDivsIP(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
//hw
var slideIndex = 1;
showDivsHW(slideIndex);
function plusDivsHW(n) {
    showDivsHW(slideIndex += n);
}
function showDivsHW(n) {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
$(document).ready(function(){
  
  $('.center').slick({
    centerMode: true,
    centerPadding: '150px',
    autoplay: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})