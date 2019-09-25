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

// диаграмма

var text = document.querySelector(".diagramm__countries");
var svg = document.querySelector(".diagramm");
var countries;

function makeDiagramm() {
  var summOfArea = 0;
  var strokeDash = 0;

  for (var i = 0; i < countries.length; i++ ) {
    summOfArea += countries[i].area;    
  };
  
  for (var i2 = 0; i2 < countries.length; i2++ ) {   
    var countriesArea = countries[i2].area / summOfArea * 100;
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");    
    var summOfAreas = 0;

    if (i2 == 0) {
      var color = `rgb(${(Math.random()*255)}, ${Math.random()*255}, ${Math.random()*255})`;
      strokeDash = 100 - countriesArea;      
      circle.setAttributeNS(null,"fill", "none");
      circle.setAttributeNS(null,"stroke", color);
      circle.setAttributeNS(null,"r", "15.91549430918954");
      circle.setAttributeNS(null,"cx", "32");
      circle.setAttributeNS(null,"cy", "32");
      circle.setAttributeNS(null,"stroke-width", "31.8");
      circle.setAttributeNS(null,"stroke-dasharray", `${countriesArea} ${100-countriesArea}`);      
      svg.append(circle);      
      var country = document.createElement("div")
      var dot = document.createElement("div");
      var countryText = document.createElement("div");
      dot.classList.add("diagramm__dot");
      dot.style.backgroundColor = color;
      countryText.append(dot);
      country.innerHTML = countries[i2].name + " " + Math.floor(countriesArea*100)/100 +  "%"
      countryText.append(country);  
      text.append(countryText);        
    };

    if (i2 > 0 && i2 < countries.length) {
      var color = `rgb(${(Math.random()*255)}, ${Math.random()*255}, ${Math.random()*255})`;
      summOfAreas += countriesArea;      
      circle.setAttributeNS(null,"fill", "none");
      circle.setAttributeNS(null,"stroke", color);
      circle.setAttributeNS(null,"r", "15.91549430918954");
      circle.setAttributeNS(null,"cx", "32");
      circle.setAttributeNS(null,"cy", "32");
      circle.setAttributeNS(null,"stroke-width", "31.8");
      circle.setAttributeNS(null,"stroke-dasharray", `${countriesArea} ${100-countriesArea}`);
      circle.setAttributeNS(null,"stroke-dashoffset", `${strokeDash}`);      
      svg.append(circle);    
      var country = document.createElement("div")
      var dot = document.createElement("div");
      var countryText = document.createElement("div");
      dot.classList.add("diagramm__dot");
      dot.style.backgroundColor = color;
      countryText.append(dot);
      country.innerHTML = countries[i2].name + " " + Math.floor(countriesArea*100)/100 +  "%"    
      countryText.append(country); 
      text.append(countryText);  
      strokeDash = 100 - summOfAreas + strokeDash;       
    };
  };
};

(() => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/countries", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return
    if (xhr.status !== 200) {
      console.log(error);
    }
    else {
      countries = JSON.parse(xhr.responseText);      
      makeDiagramm();
    }
  }
})();

// основное задание



function getUsers() {
  var id = setTimeout (() => document.querySelector(".loader").classList.remove("loader__hide"), 1000);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/users", true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return
    if (xhr.status !== 200) {
      console.log(error);
    }
    else {
      users = JSON.parse(xhr.responseText);      
      console.log(users);
      document.querySelector(".cards-block__hide").classList.remove("cards-block__hide");
      MakeCards();
      document.querySelector(".cards-block__download-button_js").classList.add("cards-block__hide");
      document.querySelector(".loader").classList.add("loader__hide");
      document.querySelector(".cards-block__download-button_js").removeEventListener("click", getUsers);
      clearTimeout(id);
    };
  };
};

document.querySelector(".cards-block__download-button_js").addEventListener("click", getUsers);

var cards = document.querySelector(".cards-block__cards_js")

function makeAvatarBlock(avatar, i) {  
  var img = document.createElement("img");
  img.src = users[i].img;
  img.classList.add("cards-block__img");
  avatar.classList.add("cards-block__avatar");  
  avatar.append(img);  
};

function makeTextItem(itemBlock, i, itemName, text, property, isWIfeImg) {  
  itemBlock.classList.add("cards-block__text-item");
  teg = "span"
  let ageBarier = ""
  if (users[i].age > 30) ageBarier = "_red.png";
  else {
    ageBarier = "_blue.png";  
  }
  let wifeID = "";
  if(isWIfeImg) {
    wifeID = "id='cards-block__wife-pic'";
    ageBarier = ".png";  
    itemBlock.style.display = "block";
  }
  itemBlock.innerHTML = `<img class="cardrs-block__item-image" ${wifeID} src="./img/${itemName}${ageBarier}">
  <span>${property} ${text}</span>`;  
}

function makeNameBlock(block, i) {
  block.classList.add("cards-block__card-block");
  let h2 = document.createElement("h2");
  h2.innerHTML = users[i].name;
  block.append(h2);
  let infoContainer = document.createElement("div");
  infoContainer.classList.add("card-block__info-container");

  let age = document.createElement("div");
  makeTextItem(age, i, "age", "года", users[i].age);
  infoContainer.append(age);
  block.append(infoContainer);  

  let phone = document.createElement("div");
  makeTextItem(phone, i, "phone", "", users[i].phone);
  infoContainer.append(phone);
  block.append(infoContainer); 

  let adress = document.createElement("div");
  makeTextItem(adress, i, "adress", "", users[i].adress);
  infoContainer.append(adress);
  block.append(infoContainer);   
}

function makeChildrenBlock(block, i) {
  block.classList.add("cards-block__card-block");
  let h2 = document.createElement("h2");
  h2.innerHTML = "Children";
  block.append(h2);
  let infoContainer = document.createElement("div");
  infoContainer.classList.add("card-block__info-chilren-container");

  let furstChildrenName = document.createElement("div");
  makeTextItem(furstChildrenName, i, "children", "", users[i].children[0].name);
  infoContainer.append(furstChildrenName);
  block.append(infoContainer);  

  let firstChildrenAge = document.createElement("div");
  makeTextItem(firstChildrenAge, i, "age", "года", users[i].children[0].age);
  infoContainer.append(firstChildrenAge);
  block.append(infoContainer); 

  let secondChildrenName = document.createElement("div");
  makeTextItem(secondChildrenName, i, "children", "", users[i].children[0].name);
  infoContainer.append(secondChildrenName);
  block.append(infoContainer);  

  let secondChildrenAge = document.createElement("div");
  makeTextItem(secondChildrenAge, i, "age", "года", users[i].children[0].age);
  infoContainer.append(secondChildrenAge);
  block.append(infoContainer);  
}

function makeWifeBlock(block, i) {
  block.classList.add("cards-block__card-block");
  let h2 = document.createElement("h2");
  h2.innerHTML = "wife";
  block.append(h2);
  let infoContainer = document.createElement("div");

  let mainWifeItem = document.createElement("div");
  makeTextItem(mainWifeItem, i, "wife", "", users[i].wife.name, true);
  infoContainer.append(mainWifeItem);
  block.append(infoContainer); 

  let wifeAge = document.createElement("div");
  makeTextItem(wifeAge, i, "age", "года", users[i].wife.age);
  infoContainer.append(wifeAge);
  block.append(infoContainer); 

  let wifePhone = document.createElement("div");
  makeTextItem(wifePhone, i, "phone", "", users[i].wife.phone);
  infoContainer.append(wifePhone);
  block.append(infoContainer); 
}

function MakeCards() {  
  for (let i = 0; i < users.length; i++) { 
    let card = document.createElement("div");
    card.classList.add("cards-block__card");
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("cards-block__card-container");

    //avatar
    let avatar = document.createElement("cards-block__avatar");   
    makeAvatarBlock(avatar, i);
    card.append(avatar);

    //name
    let NameBlock = document.createElement("div");
    NameBlock.classList.add("cards-block__name");
    makeNameBlock(NameBlock, i);
    cardContainer.append(NameBlock);
    card.append(cardContainer);

    //children
    let childrenBlock = document.createElement("div");
    childrenBlock.classList.add("cards-block__children");
    makeChildrenBlock(childrenBlock, i);
    cardContainer.append(childrenBlock);
    card.append(cardContainer);

    //wife
    let wifeBlock = document.createElement("div");
    wifeBlock.classList.add("cards-block__wife-info");
    makeWifeBlock(childrenBlock, i);


    cards.append(card);
  }
  
  
}
