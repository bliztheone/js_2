var text = document.querySelector(".step");
text.onclick = function clickButton() {
  text.classList.toggle("step");
  text.classList.toggle("h1");
}

var text2 = document.querySelector(".step1");
function change() {
  text2.classList.toggle("step1");
  text2.classList.toggle("h1");
}
text2.addEventListener('mousedown', change);

var blackbox = document.getElementsByClassName("blackbox")[0];

function addbox() {
  var redbox = document.createElement("div");
  redbox.innerHTML = "it's redbox";
  redbox.style.background = "rgb(253, 5, 5)";
  redbox.style.width = "100px";
  redbox.style.height = "100px";
  document.body.append(redbox);
  blackbox.removeEventListener("click", addbox);
}

blackbox.addEventListener("click", addbox);
