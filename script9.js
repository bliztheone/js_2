function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  script.onerror = () => callback('error');
  document.head.append(script);
}

loadScript('./script-localStorage.js', function (error) {
  if (error) {
    console.log("ERROR");
  }
  else {
    console.log("srcipt local-storage загружен");
  }
});

var json = '[{"picture":"./img/ava1.png", "name": "Александр", "email":"sanya@gmail.com", "sname":"Александров", "abilities":["html5", "css3", "js"]}, {"picture":"./img/ava2.png","name": "Алексей", "email":"lex@gmail.com", "sname":"Алексеев", "abilities":["python", "c++"]}]'
var users = JSON.parse(json);

img = document.querySelectorAll(".user-cards__img_js");
userName = document.querySelectorAll(".user-cards__user-name_js");
email = document.querySelectorAll(".user-cards__user-email_js");
abilities = document.querySelectorAll(".user-cards__user-abilities_js");
mainBlock = document.querySelector(".user-cards__content_js")
var numberOfUsers = users.length;

/**
 * @description Функция принимает массив с данными пользователей и выводит карточки с данными и фото пользоватеелй 
 * @param {number} numberOfUsers функция принимает числовое значение - количество пользователей в масиве
 * @return {string} html код 
 */
function makecards(numberOfUsers) {
  for(i = 0; i < numberOfUsers; i++) {
  var abilitiesList = users[i].abilities.toString(); 
  var userBlock =  document.createElement("div")
  userBlock.innerHTML = `<div class='user-cards__user'><div class='user-cards__container'>
  <div class='user-cards__img'> <img src='${users[i].picture}'></img> </div>
  <div class='user-cards__user-name'>Имя: ${users[i].name}. Фамилия: ${users[i].sname}.</div>
  <div class='user-cards__user-email'><a href=${users[i].email}>${users[i].email}</a></div>
  <div class='user-cards__user-abilities'>Знает ${abilitiesList}</div></div></div>`;
  mainBlock.insertAdjacentElement("beforeend", userBlock);  
  }
};
makecards(numberOfUsers);

var input = document.querySelector(".numberfunc__input_js");
var summOfArg = document.querySelector(".numberfunc__result_js");
var numbers = document.querySelector(".numberfunc__numbers_js");


// кнопка добавления
function addNumber() {
  if ( isNaN(input.value) == false && input.value !== "" ) {
  var block =  document.createElement("div");
  block.classList.add("numberfunc__number_js");
  block.innerHTML = input.value;
  numbers.insertAdjacentElement("beforeend", block); 
  input.value = "";
  }
  else {
    alert("Введите число!");
    input.value = "";
  };
};
document.querySelector(".numberfunc__addbutton_js").addEventListener("click", addNumber);

// кнопка удаления 
function removeNumber() {  
  var numBlock = document.querySelectorAll(".numberfunc__number_js");
  numBlock[numBlock.length-1].remove();
}
document.querySelector(".numberfunc__delbutton_js").addEventListener("click", removeNumber);

var summ = 0;


//кнопка посчитать
function GetArgsSumm() {  
  document.querySelector(".numberfunc__funcbutton_js").removeEventListener("click", GetArgsSumm);
  summ = 0;
  summOfArg.innerHTML = 0;
  var timer = 1;
  var timerId = setInterval(()=>{    
    if (timer == 0) {
      clearInterval(timerId);
      document.querySelector(".numberfunc__funcbutton_js").addEventListener("click", GetArgsSumm);
    }
    else {      
      var numBlock = document.querySelectorAll(".numberfunc__number_js");  
      timer = numBlock.length - 1;
      numbers.classList.add("numberfunc__number_nonactive");
      numBlock[0].classList.add("numberfunc__number_avtive");
      setTimeout(() => {        
        summ += +numBlock[0].innerHTML;
        summOfArg.innerHTML = summ;
        numBlock[0].remove();
        numbers.classList.remove("numberfunc__number_nonactive");
      }, 600);
    };  
  }, 1000);
};
document.querySelector(".numberfunc__funcbutton_js").addEventListener("click", GetArgsSumm);

// валидация телефонного номера

var telReg = new RegExp(/\+?\d{1,3}\(?\d{3}\)?\d{3}\-?\d{2}\-?\d{2}/);
var inputTel = document.querySelector(".telNumber__input_js");
var resultTel = document.querySelector(".telNumber__output_js");

function checkTel() {  
  if (inputTel.value.search(telReg) !== -1) {
  resultTel.innerHTML = inputTel.value.match(telReg);
  };
};

document.addEventListener("input", checkTel);


