function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = () => callback();
  script.onerror = () => callback('error');
  document.head.append(script);
};

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

class Shop  {  
  constructor(name) {
    this.name = name; 
    this.products = [];    
  };
  get name() {
    return  this._name
  };
  set name(value) {
    if (value.length < 2 || isNaN(value) === false) {
      console.log("Некорректное имя");
      return;
    };
    this._name = value
  };    

  addProduct()  {    
    var prod = { 
      productName: inputName.value,
      price: inputPrice.value,
    };
    if (prod.productName == "") { 
      alert("Вы не ввели название Товара");
      return
    };
    if (prod.price == "" || isNaN(prod.price) == true || prod.price <= 0 ) { 
      alert("Вы не ввели некорректиную цену Товара. Введите пожалуйста цену заного");
      return
    };
    this.products.push(prod); 
    console.log(this.products)     
  };

  removeProduct() {    
    if (this.products.length > 0) {
      var productsCount = this.products.length;
      for (let i=0; i < productsCount; i++) {
        if (this.products[i].productName == inputName.value) {
          this.products.splice(i, 1); 
          let pos = i;
          return pos             
        };
      };      
    }
    else return null
  };

  changePrice() {
    var target = inputNumber.value - 1;
    if (this.products[target] &&  changerTextInput.value > 0) {
      this.products[target].price = changerTextInput.value;      
      changerTextInput.value = "";
      return target  
    }
    else {
      alert("Введена некорректная цена");
      changerTextInput.value = "";
      return null
    };       
  };

  changeProductName() {
    var target = inputNumber.value - 1;
    if (this.products[target]) {
      this.products[target].productName = changerTextInput.value;
      changerTextInput.value = "";  
      return target        
    }
    else {
      alert("Товара под этим номером не существует!");
      changerTextInput.value = "";
      return null
    };       
  };

  //используя функцию
  searchByNumber = function() {
    var target = inputNumber.value - 1;
    if (this.products[target]) {
      searchbar.innerHTML = this.products[target].productName + ":" + this.products[target].price + "руб" + ". ";
      changerTextInput.innerHTML = "";
    }
    else {
      alert("Такой строки не существует")
    };    
  };

  //используя функцию
  searchByName = function() {
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
};


// создаем класс для магазина игр и продуктов для автоматической отрисовки на сайте
class GameShop extends Shop {
  addProduct() {
    super.addProduct();
    let lastProd = this.products.length - 1;
    games.insertAdjacentHTML("beforeend", `<div class="shops__game">Товар: ${this.products[lastProd].productName} Цена: ${this.products[lastProd].price}</div>`)
  };

  removeProduct() {     
    let pos = super.removeProduct();    
    let game = document.querySelectorAll(".shops__game");
    if (pos !== null){
      game[pos].remove();  
    };     
  };

  changePrice() {
    let game = document.querySelectorAll(".shops__game");
    var target = super.changePrice();
    if (target !== null) {      
      game[target].innerHTML = `<div class="shops__game">Товар: ${this.products[target].productName} Цена: ${this.products[target].price}</div>`
    };
  };

  changeProductName() {
    let game = document.querySelectorAll(".shops__game");
    let target = super.changeProductName();
    if (target !== null) {
      game[target].innerHTML = `<div class="shops__game">Товар: ${this.products[target].productName} Цена: ${this.products[target].price}</div>`
    };
  };
};

class ProductShop extends Shop {
  addProduct() {
    super.addProduct();
    let lastProd = this.products.length - 1;
    products.insertAdjacentHTML("beforeend", `<div class="shops__product">Товар: ${this.products[lastProd].productName} Цена: ${this.products[lastProd].price}</div>`)
  };

  removeProduct() {     
    let pos = super.removeProduct();    
    let product = document.querySelectorAll(".shops__product");    
    if (pos !== null){
      product[pos].remove();  
    };   
  };

  changePrice() {
    let product = document.querySelectorAll(".shops__product");
    var target = super.changePrice();
    if (target !== null) {
      product[target].innerHTML = `<div class="shops__product">Товар: ${this.products[target].productName} Цена: ${this.products[target].price}</div>`
    };
  };

  changeProductName() {
    let product = document.querySelectorAll(".shops__product");
    let target = super.changeProductName();
    if (target !== null) {
      product[target].innerHTML = `<div class="shops__product">Товар: ${this.products[target].productName} Цена: ${this.products[target].price}</div>`
    };
  };
};

var gamesShop = new GameShop("World Of Games");
console.log(gamesShop);

var productsShop = new ProductShop("магнит");
console.log(productsShop);


//боль
var gameAddfunc = gamesShop.addProduct.bind(gamesShop);
addGameButton.addEventListener("click", gameAddfunc);

var productAddFunc = productsShop.addProduct.bind(productsShop);
addPoructButton.addEventListener("click", productAddFunc)

var gamesSearchProdFunc = gamesShop.searchByName.bind(gamesShop);
searchGamesButton.addEventListener("click", gamesSearchProdFunc);

var searchProductsFunc = productsShop.searchByName.bind(productsShop);
searchProductsButton.addEventListener("click", searchProductsFunc);

var searchByNumberProductFunc = productsShop.searchByNumber.bind(productsShop); 
searchByNumberProduct.addEventListener("click", searchByNumberProductFunc);

var searchByNumberGamesFunc = gamesShop.searchByNumber.bind(gamesShop);
searchByNumberGame.addEventListener("click", searchByNumberGamesFunc);

var changeProductNameFUnc = productsShop.changeProductName.bind(productsShop); 
changeProductName.addEventListener("click", changeProductNameFUnc);

var changeProductPriceFuc = productsShop.changePrice.bind(productsShop); 
changeProductPrice.addEventListener("click", changeProductPriceFuc);

var changeGameNameFunc = gamesShop.changeProductName.bind(gamesShop);
changeGameName.addEventListener("click", changeGameNameFunc);

var changeGamePriceFunc = gamesShop.changePrice.bind(gamesShop);
changeGamePrice.addEventListener("click", changeGamePriceFunc);

var removeProductFunc = productsShop.removeProduct.bind(productsShop);
removeProduct.addEventListener("click", removeProductFunc);

var removeGameFunc = gamesShop.removeProduct.bind(gamesShop);
removeGame.addEventListener("click", removeGameFunc);

//slider 

class Slider {
  constructor (nextNav,previousNav) {     
    this.nextNav = nextNav;
    this.previousNav = previousNav;  
    this.imagesPosition = 0;
    this.dotPosition = 0;  
    this.images = document.querySelector(".images_js");
    this.nav1 = document.querySelector(".slider__nav1_js");
    this.nav2 = document.querySelector(".slider__nav2_js");
    this.dot = document.querySelectorAll(".slider__dot_js");
    this.imagesCount = document.querySelectorAll(".image_js").length;
    this.imageWidth = document.querySelectorAll(".image_js")[0].scrollWidth;
    this.lastSlide = this.imageWidth - this.images.scrollWidth;
    this.images.style.left = "0px";
  };   
  
  updateNav() {    
    if (this.previousNav && this.nextNav) {
      const previousNavStyle = new CSSStyleSheet();
      const nextNavStyle = new CSSStyleSheet();
      previousNavStyle.replaceSync(`#previous {background: url(${this.previousNav}) no-repeat center / contain;}`);
      nextNavStyle.replaceSync(`#next {background: url(${this.nextNav}) no-repeat center / contain;}`);
      document.adoptedStyleSheets = [nextNavStyle, previousNavStyle ];    
      this.nav1.id = "previous";
      this.nav2.id = "next";
    };
  };

  nextSlide() {
    function next() {
      if (this.imagesPosition > this.lastSlide) {         
        this.dot[this.dotPosition].classList.remove("slider__dot_blue");
        this.dot[(this.dotPosition + 1)].classList.add("slider__dot_blue");
        this.imagesPosition = this.imagesPosition - this.imageWidth;  
        this.images.style.left = this.imagesPosition + "px"; 
        this.dotPosition++; 
        }
      else if ( this.imagesPosition == this.lastSlide) {
        this.imagesPosition = 0;
        this.images.style.left = this.imagesPosition + "px";
        this.dot[this.dotPosition].classList.remove("slider__dot_blue");
        this.dot[0].classList.add("slider__dot_blue");
        this.dotPosition = 0;
      };    
    };

    let nextSlideFunc = next.bind(this);
    this.nav2.addEventListener("click", nextSlideFunc);
  };

  prevSlide() {
    function prev() {
      if (this.imagesPosition < -1) {
        this.dot[this.dotPosition].classList.remove("slider__dot_blue");
        this.dot[(this.dotPosition-1)].classList.add("slider__dot_blue");
        this.imagesPosition = this.imagesPosition + this.imageWidth;  
        this.images.style.left = this.imagesPosition + "px";  
        this.dotPosition--;    
        }
      else if ( this.imagesPosition == 0) {
        this.imagesPosition = this.lastSlide;
        this.images.style.left = this.imagesPosition + "px";
        this.dot[0].classList.remove("slider__dot_blue");
        this.dot[this.imagesCount-1].classList.add("slider__dot_blue");
        this.dotPosition = this.imagesCount-1;
      };
    };

    let prevSlideFunc = prev.bind(this);
    this.nav1.addEventListener("click", prevSlideFunc);
  };
  
  dotPositionSlide() {       
    for (let i=0; i < this.dot.length ;i++) {      
      function goToDotPos() {             
        this.dot[this.dotPosition].classList.remove("slider__dot_blue");
        this.dot[i].classList.add("slider__dot_blue");
        this.dotPosition  = i;
        this.images.style.left =  -this.imageWidth*i + "px";
        this.imagesPosition = -this.imageWidth*i;      
      };

      var goToDotPosFunc = goToDotPos.bind(this)
      this.dot[i].addEventListener("click", goToDotPosFunc);           
    };    
  };

  opacityNav() {
      function makeOpacity() {
      if (this.imagesPosition == 0) {
        this.nav1.classList.add("nav_opacity");
        this.nav2.classList.remove("nav_opacity");
      }
      else if (this.imagesPosition == this.lastSlide) {
        this.nav1.classList.remove("nav_opacity");
        this.nav2.classList.add("nav_opacity");
      }
      else {
        this.nav1.classList.remove("nav_opacity");
        this.nav2.classList.remove("nav_opacity");
      };
    };

    for (let i=0; i < this.dot.length ;i++) { 
      var dotNavFunc = makeOpacity.bind(this);
      this.dot[i].addEventListener("click", dotNavFunc);           
    }; 
    this.nav2.addEventListener("click", dotNavFunc);
    this.nav1.addEventListener("click", dotNavFunc);
  };  
};

let lesson8Slider = new Slider("./img/altRight.png", "./img/altLeft.png");

lesson8Slider.dotPositionSlide();
lesson8Slider.updateNav();
lesson8Slider.nextSlide();
lesson8Slider.prevSlide();
lesson8Slider.opacityNav();

