var shop = {};
for (var i = prompt("Часть 3. Введите количество продуктов в магазине") ; i >= 1 ; i-- ) {  
  shop["product" + i] = {
    name: prompt ("введите имя продукта"),
    price: prompt ("введите цену продукта"),
  }  
  
  while ( (shop["product" + i].price > 0 && shop["product" + i].price < Infinity) != true) {
    shop["product" + i].price = prompt("введите цену продукта цифрами!");
  }
  
  // while ( isNaN(shop["product" + i].price)) {
  //   shop["product" + i].price = prompt("введите цену продукта цифрами!");
  // }
  // такой тип проверки тоже возможен, но для этой задачи логичнее использовать первый вариант так как цена не может быть отрицательной или равной нулю.
}
console.log (shop);
