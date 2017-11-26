new Clipboard('button');
var data = {data: [{p:"Loading..."}]};
console.log("Fetching JSON data.");
fetch("data.json",{method: "GET"}).then(function (r){
return r.json();
}).then(function (j){data = j;console.log("Data fetched!");});
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var d = new Date();
document.getElementById("date").innerHTML = months[d.getMonth()] + " " + d.getDate();
if(d.getMonth() < 11 && d.getMonth() > 5){document.getElementById("msg1").removeAttribute("hidden")};
if(d.getMonth() === 11 && d.getDate() === 25){document.getElementById("msg2").removeAttribute("hidden")};
if(d.getMonth() === 11 && d.getDate() > 24){document.getElementById("msg3").removeAttribute("hidden");loadDays(24)};
if(d.getMonth() === 11 && d.getDate() < 25){loadDays(d.getDate() - 1)};
if(d.getMonth() < 6){document.getElementById("msg3").removeAttribute("hidden");loadDays(24)};
function loadDays(days){
var main = document.querySelector("main");
for(var i = 0;i < days;i++){main.innerHTML += '<a href="#' + i + '" class="day">' + (i + 1) + '</a> '};
console.log("Loaded " + days + " days");
}
document.getElementById("close").addEventListener("click",function (){document.getElementById("popup").setAttribute("hidden","hidden");console.log("Popup closed.")});
window.addEventListener("hashchange", showDay);
window.addEventListener("load", showDay);
function showDay(){
if(location.hash.length > 0){var day = location.hash.slice(1);
document.getElementById("popup").removeAttribute("hidden");
document.getElementById("title").innerHTML = "December " + (day + 1);
document.getElementById("text").innerHTML = data.data[day].p;
document.getElementById("credit").innerHTML = data.data[day].s;
document.getElementById("link").setAttribute("href",data.data[day].l);
document.getElementById("share").setAttribute("href","https://kyleplo.github.io/advent-calender#" + day);
console.log("Popup loaded.");
}}
