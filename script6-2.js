var menu = document.querySelector(".menu");
var navsquare = document.querySelector(".nav-square");
var square = document.querySelector(".square");
var trianglebox = document.querySelector(".triangle-box");
var triangle = document.querySelector(".triangle");
var navtriangle = document.querySelector(".nav-triangle");
var navsquareanim = document.querySelector(".nav-square-anim");
var navtriangleanim = document.querySelector(".nav-triangle-anim");


//создаем меню
function hide() {
  menu.classList.add("hide");
}
document.body.addEventListener("mousedown", hide);

function show() {
  menu.classList.remove("hide");
  if (`${event.clientX}` <= 1100) {
    menu.style.left = (`${event.clientX}px`);
    var menuleft = (`${event.clientX}`);
  }
  else {
    menu.style.left = (`${event.clientX - 250}px`);
  }

  if (`${event.clientY}` <= 510 ) {
    menu.style.top = (`${event.clientY}px`);
  }
  else {
    menu.style.top = (`${event.clientY - 150}px`);
  }  
}
document.addEventListener("contextmenu", show);


//добавляем квадрат
function addsquare() {
  square.classList.remove("hide");
  square.style.left = menu.style.left;
  square.style.top = menu.style.top;
  console.log("das")
}
navsquare.addEventListener("mousedown", addsquare);

//добавляем треугольник
function addtriangle() {
  trianglebox.classList.remove("hide");
  trianglebox.style.left = menu.style.left;
  trianglebox.style.top = menu.style.top; 
}
navtriangle.addEventListener("mousedown", addtriangle);

//добавляем анимацию квадрата
function squareanim() {  
  square.classList.add("squareanim");  
}
function removesquareanim() {
  square.classList.remove("squareanim");
}
navsquareanim.addEventListener("mouseover", removesquareanim);
navsquareanim.addEventListener("mousedown", squareanim);

//добавляем анимацию треугольнику
function translate() {  
  
  console.log(triangle);
  console.log(event.clientX);  
}
function triangleanim() {
  trianglebox.addEventListener("mouseover", translate)
  console.log("добавляем аниацию треугольника");
}
navtriangleanim.addEventListener("mousedown", triangleanim);

