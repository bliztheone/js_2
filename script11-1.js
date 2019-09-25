// осталось времени 
var input = document.getElementById('input_js');
var result = document.getElementById('result_js')
var now = new Date();

function getdate() {  
  var arr = input.value.split(".") 
  var toDate = new Date(arr[0], (arr[1]), arr[2]);     
  if (toDate > now){        
    timerId = setInterval (remain, 1000);      
  }  
  else {
    result.innerHTML = "";
  };
};

 function remain() {     
  var arr = input.value.split(".") 
  var toDate = new Date(arr[0], (arr[1]-1), arr[2]);
  var now = new Date;
  var remainToDate = toDate - now;   
  var remaindays = Math.floor(remainToDate/1000/60/60/24);
  var remaihours = Math.floor((remainToDate/1000/60/60)%24);
  var remaiminutes = Math.floor((remainToDate/1000/60)%60);
  var remainseconds = Math.floor((remainToDate/1000)%60);
  result.innerHTML = remaindays + "д."+ remaihours + "ч." + remaiminutes + "мин." + remainseconds + "с."; 
}

document.addEventListener("input", getdate);
