function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  script.onerror = () => callback('error');
  document.head.append(script);
};

loadScript('./script-localStorage.js', function (error) {
  if (error) {
    console.log("ERROR");
  }
  else {
    console.log("srcipt local-storage загружен");
  };
});

// осталось времени 
var input = document.getElementById('input_js');
var result = document.getElementById('result_js');
var now = new Date();

function getdate() {  
  var arr = input.value.split("."); 
  var toDate = new Date(arr[0], (arr[1]), arr[2]);     
  if (toDate > now){        
    timerId = setInterval (remain, 1000);      
  }  
  else {
    result.innerHTML = "";
  }

}

 function remain() {     
  var arr = input.value.split(".") 
  var toDate = new Date(arr[0], (arr[1]-1), arr[2]);
  var now = new Date;
  var remainToDate = toDate - now;   
  var remaindays = Math.floor(remainToDate/1000/60/60/24);
  var remaihours = Math.floor((remainToDate/1000/60/60)%24);
  var remaiminutes = Math.floor((remainToDate/1000/60)%60);
  var remainseconds = Math.floor((remainToDate/1000)%60);
  result.innerHTML = remaindays + "д."+ remaihours + "ч." + remaiminutes + "мин." + remainseconds + "с."; 
}

document.addEventListener("input", getdate);


// лампа
var light = document.querySelector(".lamp__light_js");
var lamp1 = document.querySelector(".lamp__img_js");
var lamp2 = document.querySelector(".lamp__img2_js");
var lamp3 = document.querySelector(".lamp__img3_js");

function dark() {
  lamp1.style.opacity = "1";
  light.style.background = "rgba(0, 0, 0, 0.5)";
  lamp1.style.filter = "drop-shadow(10px 5px 2px #4444dd)";
}

function blue() {
  lamp2.style.opacity = "1";
  light.style.background = "rgba(66, 141, 255, 0.5)";
  lamp2.style.filter = "drop-shadow(10px 5px 2px #4444dd)";
}

function yellow() {
  lamp3.style.opacity = "1";
  light.style.background = "rgba(239, 206, 74, 0.5)";
  lamp3.style.filter = "drop-shadow(10px 5px 2px #4444dd)";  
}

function white() {
  light.style.background = "white";
  lamp1.style.opacity = "0.5";
  lamp2.style.opacity = "0.5";
  lamp3.style.opacity = "0.5";
  lamp1.style.filter = "";
  lamp2.style.filter = "";
  lamp3.style.filter = "";
}

lamp1.addEventListener("mouseover", dark);
lamp1.addEventListener("mouseout", white);
lamp2.addEventListener("mouseover", blue);
lamp2.addEventListener("mouseout", white);
lamp3.addEventListener("mouseover", yellow);
lamp3.addEventListener("mouseout", white);

//паралакс
function parallax() {
  var position = window.pageYOffset;
  var img = document.querySelector(".parallax__img_js");
  if (position > 1000) {
    position = 1000
  }
  img.style.top = -(position * 0.15) + "px"  
}

document.addEventListener("scroll", parallax);

//слайдер

var images = document.querySelector(".images_js");
var nav1 = document.querySelector(".slider__nav1_js");
var nav2 = document.querySelector(".slider__nav2_js");
var dot = document.querySelectorAll(".slider__dot_js");
var imageWidth = document.querySelector('.image1_js').scrollWidth;
var lastSlide = imageWidth - images.scrollWidth;
var imagesCount = document.querySelectorAll(".image_js").length;
images.style.left = "0px";
var dotPosition = 0;
var imagesPosition = 0;

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
nav1.addEventListener("click", opacityNav);


for (let i=0; i < dot.length ;i++) {
  dot[i].onclick = function() {
    dot[dotPosition].classList.remove("slider__dot_blue");
    this.classList.add("slider__dot_blue");
    dotPosition = i;
    images.style.left =  -imageWidth*i + "px";
    imagesPosition = -imageWidth*i;      
  }
}


