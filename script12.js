var loadScript = function(src) {
  return new Promise(function(resolve,reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject({message: "файл не найден", code: "404"});
    document.head.append(script);
    })    
  };

Promise.all([loadScript("./script-localStorage.js"),loadScript('./script11-1.js'),loadScript('./script11-2.js'),loadScript('./script11-3.js'),loadScript('./script11-4.js')])
  .then(payload => {console.log("скрипты загружены")})
  .catch(err => {console.log(err)})

// генерация ошибок

var users = [
  {name: "sange", attribute: "strength"},
  {name: "yasha", attribute: () => { if(resoluteTechinque == true) chanceToHit = 100}}  
]

async function searchByName(name) {  
  var result = ""
  for (var i = 0; i < users.length; i++) {    
    if (users[i].name.indexOf(name) != -1) {
      result = users[i];      
    }
  }

  if (result == "") {
    throw {
      name: "4321",
      message: "пользователя с таким именем не существует"
    }    
  }   
  else {
    console.log(result)
  }
 }

 async function showattribute(pos) {
  
  if (!users[pos-1])
  throw {
    name: "21",
    message: "Такого пользователя не существует"
  }

  else if (typeof users[pos-1].attribute !== "string")
    throw {
      name: "321",
      message: "некорректные данные attribute"
    } 
  
   else if (typeof users[pos-1].attribute == "string") {
     console.log(users[pos-1].attribute)
   }   
 }

function test(func) {
  try {
    func
  }
  catch(error) {
    console.log(error)
  }
 }
 test(searchByName("yasha"));
 test(searchByName("kaya"));
 test(showattribute(1))
 test(showattribute(2))
 test(showattribute(5))

//async + await

  function getScript(name, timer) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        var script = document.createElement('script');
        script.src = name;
        script.onload = () => {
          resolve("It's ok");
          console.log(`скрипт ${name} загружен`)
        }
        script.onerror = () => reject('Файл не загружен');
        document.head.append(script);        
        }, timer)
    })
  }
 
  async function loadIt() {
    await getScript("script11-3.js", 1000);
    await getScript("script11-4.js", 2000);
  }
  loadIt();

  // функция delay

function delay(timer) {
  return new Promise (resolve => {
    setTimeout( resolve, timer);
  })  
}

(async () => {
  await delay(4000);
  console.log("console.log сработал через 4 секунды");
  await delay(3000);
  console.log("console.log сработал через 3 секунды");
  await delay(2000);
  console.log("console.log сработал через 2 секунды");
  await delay(1000);
  console.log("console.log сработал через 1 секунду");
})();
