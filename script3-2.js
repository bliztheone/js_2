var mas = [];
mas[0] = prompt ("Часть 2. введите первый элемент массива");
mas[1] = prompt ("введите второй элемент массива");
mas[2] = prompt ("введите третий элемент массива");
mas[3] = prompt ("введите четвертый элемент массива");
mas[4] = prompt ("введите пятый элемент массива");

var i = 4;

// через while
while (i >= 0) {
  console.log (mas[i])
  i--;
}

// через for 
for (var i2 = 4; i2 >= 0; i2--) {
  console.log (mas[i2])
}
