var images = document.querySelector(".images_js");
var nav1 = document.querySelector(".slider__nav1_js");
var nav2 = document.querySelector(".slider__nav2_js");
var imagesPosition = 0;
var dot = document.querySelectorAll(".slider__dot_js");
var imageWidth = document.querySelector('.image1_js').scrollWidth;
var lastSlide = imageWidth - images.scrollWidth;
var imagesCount = document.querySelectorAll(".image_js").length;
images.style.left = "0px";
var dotPosition = 0;

function opacityNav() {
  if (imagesPosition == 0) {
    nav1.classList.add("nav_opacity");
    nav2.classList.remove("nav_opacity");
  }
  else if (imagesPosition == lastSlide) {
    nav1.classList.remove("nav_opacity");
    nav2.classList.add("nav_opacity");
  }
  else {
    nav1.classList.remove("nav_opacity");
    nav2.classList.remove("nav_opacity");
  }
}

function next() {  
  if (imagesPosition > lastSlide) {  
  dot[dotPosition].classList.remove("slider__dot_blue");
  dot[(dotPosition+1)].classList.add("slider__dot_blue");
  imagesPosition = imagesPosition - imageWidth;  
  images.style.left = imagesPosition + "px"; 
  dotPosition++; 
  }
  else if ( imagesPosition == lastSlide) {
    imagesPosition = 0;
    images.style.left = imagesPosition + "px";
    dot[dotPosition].classList.remove("slider__dot_blue");
    dot[0].classList.add("slider__dot_blue");
    dotPosition = 0;
  }
}

images.addEventListener("dblclick", next);
images.addEventListener("dblclick", opacityNav);
nav2.addEventListener("click", next);
nav2.addEventListener("click", opacityNav)

function prev() {  
  if (imagesPosition < -1) {
  dot[dotPosition].classList.remove("slider__dot_blue");
  dot[(dotPosition-1)].classList.add("slider__dot_blue");
  imagesPosition = imagesPosition + imageWidth;  
  images.style.left = imagesPosition + "px";  
  dotPosition--;    
  }
  else if ( imagesPosition == 0) {
    imagesPosition = lastSlide;
    images.style.left = imagesPosition + "px";
    dot[0].classList.remove("slider__dot_blue");
    dot[imagesCount-1].classList.add("slider__dot_blue");
    dotPosition = imagesCount-1;
  }
}

nav1.addEventListener("click", prev);
nav1.addEventListener("click", opacityNav)


dot[1].onclick = function() {
  dot[dotPosition].classList.remove("slider__dot_blue");
  this.classList.add("slider__dot_blue");
  dotPosition = 1;
  images.style.left = -imageWidth*1 + "px"
  imagesPosition = -imageWidth*1;
};
dot[1].addEventListener("click", opacityNav);

dot[0].onclick = function() {
  dot[dotPosition].classList.remove("slider__dot_blue");
  this.classList.add("slider__dot_blue");
  dotPosition = 0;
  images.style.left = -imageWidth*0 + "px";
  imagesPosition = -imageWidth*0;
};
dot[0].addEventListener("click", opacityNav);

dot[2].onclick = function() {
  dot[dotPosition].classList.remove("slider__dot_blue");
  this.classList.add("slider__dot_blue");
  dotPosition = 2;
  images.style.left =  -imageWidth*2 + "px";
  imagesPosition = -imageWidth*2;
}
dot[2].addEventListener("click", opacityNav);