function objCreate() {
  var name = prompt("часть 1.введите имя пользователя");
  var age = prompt("введите возраст пользователя");
  var user = {
    username: name,
    userage: age,
    }
  return user;
};
console.log(objCreate());

function massCreate() {
  var mas = [];
  mas[0] = prompt ("Часть 2. введите первый элемент массива");
  mas[1] = prompt ("введите второй элемент массива");
  mas[2] = prompt ("введите третий элемент массива");
  mas[3] = prompt ("введите четвертый элемент массива");
  mas[4] = prompt ("введите пятый элемент массива");
  var reversedmas = mas.reverse();
  return reversedmas;
}
console.log(massCreate());

function shopmaker() {
  var shop = {};
  for (var i = prompt("Часть 3. Введите количество продуктов в магазине") ; i >= 1 ; i-- ) {  
  shop["product" + i] = {
    name: prompt ("введите имя продукта"),
    price: prompt ("введите цену продукта"),
  }  
  
  while ( (shop["product" + i].price > 0 && shop["product" + i].price < Infinity) != true) {
    shop["product" + i].price = prompt("введите цену продукта цифрами!");
    }
  }

  return shop;
}
console.log(shopmaker());