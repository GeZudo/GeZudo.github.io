// timer take in https://codepen.io/afarrar/pen/JRaEjP?editors=1010

function timer(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m 
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  setTimeout(timer, 1000);
}

timer()