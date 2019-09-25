
function cutkyky () {
  var text2 = prompt("введите текст со словом кукушка ");
  var cutter = "кукушка";
  i = 0;
  for (i ; i <= text2.length ; i++ ) {
    var search = text2.indexOf(cutter);
    
    if (search == -1) {
      result = text2;
    }

    else {
     result = text2.slice(0, search);  
    }     
  }
 return result;  
}

console.log(cutkyky());