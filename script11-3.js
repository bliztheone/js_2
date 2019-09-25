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
  