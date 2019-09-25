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

loadScript('./script11-1.js', function (error) {
  if (error) console.log("ERROR");
  else {
    console.log("Скрипт 1 загружен");
    loadScript('./script11-2.js', function (error) {
      if (error) console.log("ERROR");
      else {
        console.log("Скрипт 2 загружен");
        loadScript('./script11-3.js', function (error) {
          if (error) console.log("ERROR");          
          else {
            console.log("Скрипт 3 загружен"); 
            loadScript('./script11-4.js', function (error) {
              if (error) console.log("ERROR");              
              else {
                console.log("Скрипт 4 загружен");
              }
            });
          }
        });
      }
    });
  }
});



//промисы

var loadScript2 = function (src) {
  return new Promise (function(resolve,reject) {  
    var script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve("It's ok");
    script.onerror = () => reject('error');
    document.head.append(script);  
  })
};

loadScript2("script11-1.js")
  .then (payload => {    
    var div = document.createElement("div");
    div.innerHTML = "Скрипт 1 загрузился при помощи промиса";
    document.querySelector(".promise-result").append(div)
  })  
  .catch (error => console.log(error))
 
loadScript2("script11-2.js")
.then (payload => {  
  var div = document.createElement("div");
  div.innerHTML = "Скрипт 2 загрузился при помощи промиса";
  document.querySelector(".promise-result").append(div)
})
  .catch (error => console.log(error))
 
loadScript2("script11-3.js")
.then (payload => {  
  var div = document.createElement("div");
  div.innerHTML = "Скрипт 3 загрузился при помощи промиса";
  document.querySelector(".promise-result").append(div)
})
  .catch (error => console.log(error))

loadScript2("script11-4.js")
.then (payload => {  
  var div = document.createElement("div");
  div.innerHTML = "Скрипт 4 загрузился при помощи промиса";
  document.querySelector(".promise-result").append(div)
})
  .catch (error => console.log(error))

