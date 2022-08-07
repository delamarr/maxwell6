
var z = document.getElementById('slide'); 

        function openNav() {
            if (z.style.display === 'none') {
        z.style.display = 'block'; 
        z.style.transition = '0.3s';
    } else {
        z.style.display='none';
    } 
        }


var x = document.getElementById('sub1'); 

        function showSub1() {
            if (x.style.display === 'none') {
        x.style.display = 'block'; 
        x.style.transition = '0.3s';
    } else {
        x.style.display='none';
    } 
        }

var y = document.getElementById('sub2'); 

        function showSub2() {
            if (y.style.display === 'none') {
        y.style.display = 'block'; 
        y.style.transition = '0.3s';
    } else {
        y.style.display='none';
    } 
        }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}sliide

