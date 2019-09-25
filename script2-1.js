console.log ("число == строка =" + " " + (5 == "строка"));
console.log ("1 == trye =" + " " + (1 == true));
console.log ("число == NaN =" + " " + (5 == NaN));
console.log ("число == undefinded =" + " " + (5 == undefined));
console.log ("число == object =" + " " + (5 == {}));
console.log ("строка == false =" + " " + ("строка" == false));
console.log ("строка == NaN =" + " " + ("строка" == NaN));
console.log ("строка == undefiended =" + " " + ("строка" == undefined));
console.log ("строка == object =" + " " + ("строка" == {}));
console.log ("true == NaN =" + " " + (true == NaN));
console.log ("true == undefinded =" + " " + (true == undefined));
console.log ("true == object =" + " " + (true == {}));
console.log ("NaN == undefiended =" + " " + (NaN == undefined));
console.log ("NaN == object =" + " " + (NaN == {}));
console.log ("undefinded == object =" + " " + ({} == undefined));

var number = prompt ("введите первое однозначное число");
var number2 = prompt ("введите  второе однозначное число");
if (number >=10 || number2 >= 10) {
  alert ("вы ввели не однозначное число!");
}
else if (number == number2) {
  alert ("эти числа равны!")
}
else if (number > number2) {
    result = number;
    }
else {
    result = number2;
  }
alert("наибольшее число" + " " + result);

