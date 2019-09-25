function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  script.onerror = () => callback('error');
  document.head.append(script);
}

loadScript('./script-localStorage.js', function (error) {
  if (error) {
    console.log("ERROR");
  }
  else {
    console.log("srcipt local-storage загружен");
  }
});

var products = document.querySelector(".shops__products_js");
var games = document.querySelector(".shops__games_js");
var inputName = document.querySelector(".shops__nameinput_js");
var inputPrice = document.querySelector(".shops__priceinput_js");
var addPoructButton = document.querySelector(".shops__addproduct_js");
var addGameButton = document.querySelector(".shops__addgame_js");
var searchProductsButton = document.querySelector(".shops__searchproducts_js");
var searchGamesButton = document.querySelector(".shops__searchgames_js");
var searchbar = document.querySelector(".shops__searchbar_js");
var inputNumber = document.querySelector(".shops__numberinput_js");
var searchByNumberProduct = document.querySelector(".shops__search-by-number-products_js");
var searchByNumberGame = document.querySelector(".shops__search-by-number-games_js");
var changeProductName = document.querySelector(".shops__change-product-name_js");
var changeProductPrice = document.querySelector(".shops__change-product-price_js");
var changeGameName = document.querySelector(".shops__change-game-name_js");
var changeGamePrice = document.querySelector(".shops__change-game-price_js");
var changerTextInput = document.querySelector(".shops__textchangerinput_js");
var removeProduct = document.querySelector(".shops__removeproduct_js");
var removeGame = document.querySelector(".shops__removegame_js");

function removeProducts() {
  var productsCount = this.products.length;
  for (i=0; i < productsCount; i++) {
    if (this.products[i].productName == inputName.value) {
      this.products.splice(i, 1);      
    }
  }
  visualizationOfProducts();
  visualizationOfGames();
}

function changePrice() {
  var target = inputNumber.value - 1;
  if (this.products[target] &&  changerTextInput.value > 0) {
    this.products[target].price = changerTextInput.value;
    visualizationOfProducts();
    visualizationOfGames();
    changerTextInput.value = "";
  }
  else {
    alert("Введена некорректная цена");
    changerTextInput.value = "";
  }
}

function changeName() {
  var target = inputNumber.value - 1;
  if (this.products[target]) {
    this.products[target].productName = changerTextInput.value;
    changerTextInput.value = "";
    visualizationOfProducts();
    visualizationOfGames();    
  }
  else {
    alert("Товара под этим номером не существует!");
    changerTextInput.value = "";
  }
}

function searchByNumber() {
  var target = inputNumber.value - 1;
  if (this.products[target]) {
    searchbar.innerHTML = this.products[target].productName + ":" + this.products[target].price + "руб" + ". ";
    changerTextInput.innerHTML = "";
  }
  else {
    alert("Такой строки не существует")
  }
}

function search() { 
  var result = "";
  var target = inputName.value; 
  var reg = new RegExp(target, "i");   
  var length = this.products.length;
  if (target == "") return
  for (var i = 0; i < this.products.length; i++ ) {
    if (this.products[i].productName.search(reg) !== -1) {
      result += this.products[i].productName + ":" + this.products[i].price + "руб" + ". ";
      changerTextInput.innerHTML = "";
    };      
  };
  if (result == "") result = "Нет совпадений";  
  searchbar.innerHTML = result;
};

var productsShop = {
  name: "productShop",
  products: [{productName: "potato", price: "30"}, {productName: "bananas", price: "50"}],
  addProduct: () => {
    var prod = {
      productName: inputName.value,
      price: inputPrice.value,
    };
    while (prod.productName == "") { 
      alert("Вы не ввели название Товара");
      return
    };
    while (prod.price == "" || isNaN(+prod.price) == true || prod.price <= 0 ) { 
      alert("Вы не ввели некорректиную цену Товара. Введите пожалуйста цену заного");
      return
    };
    productsShop.products.push(prod); 
    var productsBlock =  document.createElement("div");
    productsBlock.classList.add("shops__product");
    productsBlock.innerHTML = `Товар: ${prod.productName} Цена: ${prod.price}`;
    products.insertAdjacentElement("beforeend", productsBlock);  
  },
  search: search,
  searchByNumber: searchByNumber,
  changeName: changeName,
  changePrice: changePrice,
  removeProducts: removeProducts,
}

addPoructButton.addEventListener("click", productsShop.addProduct)

var gamesShop = {
  name: "gamesShop",
  products: [{productName: "Red dead redemption", price: "3990"}, {productName: "Path of Exile", price: "990"}],
  addProduct: () => {
    var prod = {
      productName: inputName.value,
      price: inputPrice.value,
    };
    while (prod.productName == "") { 
      alert("Вы не ввели название Товара");
      return
    };
    while (prod.price == "" || isNaN(prod.price) == true || prod.price <= 0 ) { 
      alert("Вы не ввели некорректиную цену Товара. Введите пожалуйста цену заного");
      return
    };
    gamesShop.products.push(prod); 
    var gamesBlock =  document.createElement("div");
    gamesBlock.classList.add("shops__game");
    gamesBlock.innerHTML = `Товара: ${prod.productName} Цена: ${prod.price}`;
    games.insertAdjacentElement("beforeend", gamesBlock); 
  },
  search: search,
  searchByNumber: searchByNumber,
  changeName: changeName,
  changePrice: changePrice,
  removeProducts: removeProducts,
};

function visualizationOfProducts() {
  numberOfProducts = productsShop.products.length;
  products.innerHTML = "";
  for(i = 0; i < numberOfProducts; i++) {  
  var productsBlock =  document.createElement("div");
  productsBlock.classList.add("shops__product");
  productsBlock.innerHTML = `Товар: ${productsShop.products[i].productName} Цена: ${productsShop.products[i].price}`;
  products.insertAdjacentElement("beforeend", productsBlock);  
  };  
};
visualizationOfProducts();

function visualizationOfGames() {
  numberOfgames = gamesShop.products.length;
  games.innerHTML = "";
  for(i = 0; i < numberOfgames; i++) {  
  var gamesBlock =  document.createElement("div");
  gamesBlock.classList.add("shops__game");
  gamesBlock.innerHTML = `Товар: ${gamesShop.products[i].productName} Цена: ${gamesShop.products[i].price}`;
  games.insertAdjacentElement("beforeend", gamesBlock);  
  };  
};
visualizationOfGames();

var productSearch = productsShop.search.bind(productsShop);
var gameSearch = gamesShop.search.bind(gamesShop);
searchProductsButton.addEventListener("click", productSearch);
searchGamesButton.addEventListener("click", gameSearch);
addGameButton.addEventListener("click", gamesShop.addProduct);
searchByNumProdFunc = productsShop.searchByNumber.bind(productsShop);
searchByNumGameFunc = gamesShop.searchByNumber.bind(gamesShop);
searchByNumberProduct.addEventListener("click", searchByNumProdFunc);
searchByNumberGame.addEventListener("click", searchByNumGameFunc);
changeProductNameFunc = productsShop.changeName.bind(productsShop);
changeGameNameFunc = gamesShop.changeName.bind(gamesShop);
changeProductPriceFunc = productsShop.changePrice.bind(productsShop);
changeGamePriceFunc = gamesShop.changePrice.bind(gamesShop);
changeProductName.addEventListener("click", changeProductNameFunc);
changeProductPrice.addEventListener("click", changeProductPriceFunc);
changeGameName.addEventListener("click", changeGameNameFunc);
changeGamePrice.addEventListener("click", changeGamePriceFunc);
removeProductsFunc = productsShop.removeProducts.bind(productsShop);
removeGamesFunc = gamesShop.removeProducts.bind(gamesShop);
removeProduct.addEventListener("click", removeProductsFunc);
removeGame.addEventListener("click", removeGamesFunc);