function textCorrector() {
  var text = prompt("введите текст с ошибкой (после точки маленькая буква)");
  var i = 0;  
  for (i ; i <= text.length ; i++ ) {
    var search = text.indexOf(".", i);
    if ((text.indexOf(".", i) == -1) || (text.indexOf(".", i) == (text.length - 1))) break
    result = text.slice(0, search + 2) + text[search + 2].toUpperCase() + text.slice(search + 3);
    text = result;    
  }  
  
  return result;
}

console.log(textCorrector());
