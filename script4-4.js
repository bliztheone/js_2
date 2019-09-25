var products = [];
var i = prompt("Часть 3. Введите количество продуктов в магазине") - 1;
for (i ; i >= 0 ; i-- ) {  
  products[i] = {
    name: prompt ("введите имя продукта"),
    price: prompt ("введите цену продукта"),
  }  
  
  while ( (products[i].price > 0 && products[i].price < Infinity) != true) {
    products[i].price = prompt("введите цену продукта цифрами!");
  }
}
products.reverse();
// потому что мы заполняем продукты в обратном порядке

var shop = {
  shopname: prompt("введите название магазина"),
  poduct: products,
}


while (true) {
  var comand = prompt("доступные команды: searchprice(поиск по цене), searchname(поиск по имени), pushproduct(добавить продукт в конец списка), deleteproduct(удалить продукт), showproducts(показать все продукты), showshop(покзать весь магазин), changeprice чобы изменить цену продукта, чтобы выйти из меню введите stop");
  if (comand == "searchprice") searchprice();
  else if (comand == "searchname") searchname();
  else if (comand == "pushproduct") pushproduct();
  else if (comand == "deleteproduct") deleteproduct();
  else if (comand == "showproducts") showproducts();
  else if (comand == "showshop") showshop();
  else if (comand == "changeprice") changeprice();  
  else if (comand == "stop") break;
  else alert("неизвестная команда");
}


function searchprice() {
  var search = prompt("по какой цене ищем?");
  var product = products.find(item => item.price == search); 
  alert(product.name);
}

function searchname() {
  var search = prompt("цена какого продукта нужна?");
  var product = products.find(item => item.name == search); 
  alert(product.price);
}

function pushproduct() {
  var prod = {
    name: prompt ("введите имя продукта который добавим в конец"),
    price: prompt ("введите цену продукта который добавим в конец"),
  }
  products.push(prod);  
}

function deleteproduct() {
  var num = prompt("введите номер продукта который удалим") - 1;
  products.splice(num, 1);  
}

function showproducts() {
  console.log(products);
}

function showshop() {
  console.log(shop);
}

function changeprice() {
  var changer = (prompt("у какого по счету продукта изменим цену?") - 1);
  products[changer].price = prompt("введите новую стоимость продукта");  
}

