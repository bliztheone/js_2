var first = prompt ("введите первую букву");
var second = prompt ("введите  вторую букву");
first = first.toLowerCase();
second = second.toLowerCase();
if (first < second) {
  result = first;
}
else {
  result = second;
  }
alert("в алфавите первее" + " " + result);
