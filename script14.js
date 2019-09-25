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
  }
});

var halfWidth = window.innerWidth - (window.innerWidth / 2);
var baloon = document.querySelector(".it__baloon_js");
function pos(e) {     
  baloonPos =  (halfWidth - e.pageX)/halfWidth;
  baloon.style.transform = `rotate(${baloonPos*5}deg)`; 
};  
document.addEventListener("mousemove", pos);

//задание 14


//валидация пароля
var passwordinput = document.querySelector(".input-password_js");
var button = document.querySelector(".sign-in__button_js");


var reg = new RegExp(/^[0-9a-z_]{4,12}$/);

function test() {
  button.removeEventListener("click", test);
  if (passwordinput.value.search(reg) !== -1) {
    console.log("it's ok")
  }
  else {
    passwordinput.classList.add("sign-in__wrong-pass");
    setTimeout(() => {passwordinput.classList.remove("sign-in__wrong-pass")}, 500);
  };
  setTimeout(() => {button.addEventListener("click", test)}, 500); 
}

button.addEventListener("click", test);

//fetch
var noteBook = document.querySelector(".notebook__books-list_js");
var bookNameInput = document.querySelector(".notebook__book-name-input_js");
var bookDescriptionInput = document.querySelector(".notebook__input-description_js");
var addBookButton = document.querySelector(".notebook__addbook-button_js");
var correctMenu = document.querySelector(".notebook__correct-menu_js");
var correctButton = document.querySelector(".notebook__correct-assign-button_js");
var correctNameInput = document.querySelector(".notebook__correct-nameInput_js");
var correctDescriptionTextarea = document.querySelector(".notebook__correct-descriptionInput_js");

function makeUI() {
  noteBook.innerHTML = "";
  let request = fetch('http://localhost/blog')                               
      .then(response => books = response.json())
      .then((response) =>  {
        books = response;      
        for (var i = 0; i < books.length; i++) {
          let CurrentID = books[i]._id 
          let item = document.createElement("div");
          let pen = document.createElement("div");
          pen.classList.add("notebook__edit-item")
          pen.id = `${CurrentID}`
          pen.innerHTML = '<img class="notebook__remove-item-pic notebook__remove-item-pic_js" src="img/pen.png">';

          pen.addEventListener("click", function(){
            showCorrectMenu(CurrentID)
          },false);          

          item.append(pen);
          let del = document.createElement("div");
          del.classList.add("notebook__remove-item");        
          del.innerHTML = '<img class="notebook__remove-item-pic notebook__remove-item-pic_js" src="img/del.svg">';
          
          del.addEventListener("click", function(){
            delItem(CurrentID)
          },false);

          item.append(del);
          let bookName = document.createElement("div");
          bookName.classList.add("notebook__book-name");
          bookName.innerHTML = books[i].title;
          item.append(bookName);
          let bookDescription = document.createElement("div");
          bookDescription.classList.add("notebook__book-description");
          bookDescription.innerHTML = books[i].text;
          item.append(bookDescription);
          noteBook.append(item);                         
          };               
          
        }); 

};

makeUI();

addBookButton.addEventListener("click", () => {
  (function() {
    if (bookDescriptionInput.value.length > bookNameInput.value.length && bookNameInput.value.length != "") {
      var reqest = fetch('http://localhost/blog/', {
        method: 'POST',     
        headers: {
          'Content-Type': 'application/json'
        },       
        body: JSON.stringify({
          text: bookDescriptionInput.value,
          title: bookNameInput.value,              
        })
      })                             
        .then((res) => { return res.text() })
        .then(res => makeUI())            
        .catch(err => console.log(err) );  
    }
    bookDescriptionInput.value = "";
    bookNameInput.value = "";
  })();  
})   


function delItem(CurrentID) {  
  let request = fetch('http://localhost/blog/', {
    method: 'DELETE',     
    headers: {
      'Content-Type': 'application/json'
    },       
    body: JSON.stringify({        
      _id: `${CurrentID}`,         
    })
    }) 
      .then((res) => {return res.text() })                             
      .then(res =>  makeUI() )                   
      .catch((err) => {console.log(err) }); 
};

  
function showCorrectMenu(CurrentID) {
  function correctItem(CurrentID) {     
    if (correctDescriptionTextarea.value.length > correctNameInput.value.length && correctNameInput.value.length != "") {
      var request = fetch('http://localhost/blog/', {
        method: 'PUT',     
        headers: {
          'Content-Type': 'application/json'
        },       
        body: JSON.stringify({ 
          text: correctDescriptionTextarea.value,
          title: correctNameInput.value,
          _id: `${CurrentID}`,         
        })
      }) 
        .then((res) => { return res.text() })  
        .then( (res) => correctMenu.classList.toggle("notebook__correct-menu_hidden") ) 
        .then( (res) => makeUI() )                 
        .catch((err) => {console.log(err) });   
    } 
    else {
      alert("некорректные данные");
      correctMenu.classList.toggle("notebook__correct-menu_hidden");
    };
  };   
  
  correctMenu.classList.toggle("notebook__correct-menu_hidden");
  correctButton.addEventListener("click", function func() {
    correctItem(CurrentID);
    correctDescriptionTextarea.value = "";
    correctNameInput.value = "";
    correctButton.removeEventListener("click", func)
  },false)
  
}   

