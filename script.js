new Clipboard('button');
var data = {data: [{p:"Loading..."}]};
console.log("Fetching JSON data.");
fetch("data.json",{method: "GET"}).then(function (r){
return r.json();
}).then(function (j){data = j;console.log("Data fetched!");});
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = new Date();
document.getElementById("date").innerHTML = months[d.getMonths()] + " " + d.getDate();
if(d.getMonths() < 11 && d.getMonths() > 5){document.getElementById("msg1").removeAttribute("hidden")};
if(d.getMonths() === 11 && d.getDate() === 25){document.getElementById("msg2").removeAttribute("hidden")};
if(d.getMonths() === 11 && d.getDate() > 24){document.getElementById("msg3").removeAttribute("hidden");loadDays(23)};
if(d.getMonths() === 11 && d.getDate() < 25){loadDays(d.getDate() - 1)};
if(d.getMonths() < 6){document.getElementById("msg3").removeAttribute("hidden");loadDays(23)};
