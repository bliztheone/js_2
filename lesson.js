// input = document.querySelector(".form-input");
// buttonadd = document.querySelector('.firstbutton');
box_js = document.querySelector('.box_js');
// form = document.querySelector(".form_js");

// var arr = [];

// /**
//  * @discription возщвращаем строку без пробелов
//  * @param {string} str строка 
//  * @return {string} возвращает строку без пробелов
//  */ 

// function withourspace(str) {
//     var reg = new RegExp(" ", "g");
//     return str.replace(reg, function(){
//         return "";
//     })
// }

// form.addEventlisner("submit", function (event) {
//     event.preventDefault();
//     if (withourspace(input.value).length == 0) {
//         console.log("вы ничего не ввели")
//     }

//     else {
//     var reg = new RegExp(inputName.value, "gi");
//     box_js.innerText = input.value.search(reg);
//     box_js.splice()
//     }
// })


// /**
//  * @discription Функция возвращает сумму всех введеных параметров
//  */

// function summ() {
//     var summa = 0;
//     for (var i = 0 ; i < arguments.length; i++){
//         summa+=arguments[i];
//     }
//     return summa;
// }

// console.log(suma(1,2,3,4,5));


// alert(JSON.stringify(user));
mail = document.querySelector(".mail")
img = document.querySelector(".img")

var str = `[{"name": "sasha", "email":"zoro@qwe.qwe", "sname":"sname", "tel":"+70000000000", "img":"./test.jpg"}, {"img":"./test.jpg", "name": "max2", "email":"zoro@qwe.qwe2", "sname":"sname2"}]`

var users = JSON.parse(str);
console.log(users)
for (var i=0; i< users.length; i++) {
    box_js.innerHTML += `${users[i].name}`
    mail.innerHTML += `${users[i].email}`
    img.innerHTML += `<img src="./${users[i].img}>`
}