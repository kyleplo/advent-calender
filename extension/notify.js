chrome.runtime.onStartup.addListener(function (){
var d = new Date();
if(d.getMonth() === 11 && d.getDate() < 25){
chrome.storage.local.get("lastDate",function (data){
console.log("It's December " + d.getDate());
if(data.lastDate === d.getDate()){
console.log("Don't send notification - already sent");
}else{
console.log("Send notification");
chrome.storage.local.set({lastDate: d.getDate()});
fetch("data.json",{method: "GET"}).then(function (r){
return r.json();
}).then(function (j){data = j;console.log("Data fetched!");
chrome.notifications.create("today", {type: "basic", iconUrl: "icon.png",title:(25 - d.getDate()) + " days until Christmas!!",message: data.data[d.getDate() - 1].p,contextMessage:});
});
}
});}
else if(d.getMonth() === 11 && d.getDate() === 25){
// It's Christmas!!
console.log("Merry Christmas!!");
}else{
// It's after or before Christmas.
console.log("Not Christmas");
}
})
