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