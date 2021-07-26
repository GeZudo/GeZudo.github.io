// timer take in https://codepen.io/afarrar/pen/JRaEjP?editors=1010

function timer(){
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dec"]
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var day = date.getDate();
  var mon = months[date.getMonth()];

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  day = (day < 10) ? "0" + day : day;

  var time = day + " de " + mon + " " + h + ":" + m 
  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;
  setTimeout(timer, 1000);
}

timer()