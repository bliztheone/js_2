var input = document.querySelector(".temperature_js");
  function fahrenheit() {
    if (input.value >= -273 && input.value <= 5526 && typeof(+input) == "number") {
      document.getElementById('result_js').innerHTML = ((input.value * 9 / 5) + 32);
    }
    else {
      document.getElementById('result_js').innerHTML = "Такой температуры не существует!";
    }
  };
  input.oninput = fahrenheit;

var list = document.querySelector(".do-list_js");
var addbeforebegin = document.querySelector(".addbeforebegin_js");
var addafterbegin = document.querySelector(".addafterbegin_js");
var addbeforeend = document.querySelector(".addbeforeend_js");
var addafterend = document.querySelector(".addafterend_js");
var addtext = document.querySelector(".addtext_js");
var remove = document.querySelector(".remove_js");
var deltext = document.querySelector(".deltext_js");
var removebefore = document.querySelector(".removebefore_js");
var removeafter = document.querySelector(".removeafter_js");
var edittext = document.querySelector(".edittext_js");
var editnumber = document.querySelector(".editnumber_js");
var edit = document.querySelector(".edit_js");
var editbefore = document.querySelector(".editbefore_js");
var editafter = document.querySelector(".editafter_js");


function addString(position, elem, positionClass) {
  var block =  document.createElement(elem);
  text = addtext.value;
  block.innerHTML = text;  
  block.classList = positionClass;
  list.insertAdjacentElement(position, block); 
}

addbeforebegin.addEventListener("click", function(){ addString("beforebegin", "div", "before");});
addafterbegin.addEventListener("click", function(){ addString("afterbegin", "li", "insideList");});
addbeforeend.addEventListener("click", function(){ addString("beforeend", "li", "insideList");});
addafterend.addEventListener("click", function(){ addString("afterend", "div", "after");});

function remover(position) {
  if (document.querySelectorAll(position).length < (deltext.value) || deltext.value < 1 || isNaN(deltext.value) ) {
    alert("нет такой строки");
  }
  else { 
    var i = deltext.value - 1; 
    document.querySelectorAll(position)[i].remove();  
  }
}

remove.addEventListener("click", function(){ remover(".insideList");});
removebefore.addEventListener("click", function(){ remover(".before");});
removeafter.addEventListener("click", function(){ remover(".after");});

function editer(position) {
  if (document.querySelectorAll(position).length < editnumber.value || editnumber.value < 1 || isNaN(editnumber.value) ) {
    alert("нет такой строки");
  }
  else if (edittext.value == "") {
    alert("вы не ввели текст!")
  }
  else {
    i = editnumber.value - 1;
    text = edittext.value;
    document.querySelectorAll(position)[i].innerHTML = text;
  }
}

edit.addEventListener("click", function(){ editer(".insideList");});
editbefore.addEventListener("click", function(){ editer(".before");});
editafter.addEventListener("click", function(){ editer(".after");});


//анимация
var maxXPosition = 90;
var animelem = document.querySelector('.anim-elem_js');
var speedX = 0.5;
var positionX = 0;
function move() {
  positionX = positionX + speedX;
  if (positionX > maxXPosition || positionX < 0) {
    speedX = speedX * (-1);
  }
  animelem.style.left = positionX + '%';
}
setInterval(move, 1000 / 60);

