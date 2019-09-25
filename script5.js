//добавляю блок, внутри которого другой блок добавленый при помощи innerHTML. стили этого блока добавлены в css.
var base = document.createElement("div");
base.className = "base"
base.innerHTML = "<div class='bg'> текст ради текста </div>";
document.body.append(base);

//пользователь вводит названия стилей, далее пользователь вводит название стиля текст которого нужно получить
var one = prompt("введите класс первого блока");
var two = prompt("введите класс второго блока");
var three = prompt("введите класс третьего блока");

var div = document.getElementsByTagName("div");
div[0].className = one;
div[1].className = two;
div[2].className = three;

var test = prompt("введите класс блока текст которого нужно отобразить")

if (div[0].className == one) {
  alert(div[0].innerText);
}
else if ( div[1].className == two) {
  alert(div[1].innerText);
}
else if (div[2].className == three) {
  alert(div[2].innerText);
}
else {
  alert("ошибка, нет блока с таким классом")
}

//добавил блоку два стиля, этому же блоку написана анимация на keyframes
div[3].classList.add("class1", "class2");



