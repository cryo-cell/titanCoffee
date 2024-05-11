let title = document.getElementById("title")
let arr = JSON.parse(localStorage.getItem("user"))
let quick = document.querySelectorAll(".quick-view-content")
//  console.log(quick)
/*
for(let i=0; i<quick.length; i++){
    quick[i].style.visibility = "hidden"
}

for(let i=0; i<quick.length; i++){
    if(quick[i].style.visibility == "hidden"){
        quick[i].addEventListener('mouseOver', function(){
            quick.style.visibility = "visible"
        })
    }
}*/
if (localStorage.getItem("fname")){
title.innerHTML = localStorage.getItem("fname")
}
else title.innerHTML = JSON.parse(localStorage.getItem("profile"))

if(JSON.parse(localStorage.getItem("profile")) !== "Admin"){
    document.getElementById("sales").style.display = "none"
}
let banner = [
    ["./img/hot-coffee.jpg"],
    ["./img/iced-coffee.jpg"],
    ["./img/frozen-coffee.jpg"],
    ["./img/teaNboba.jpg"]
];

let x = 0;

document.getElementById('ad-img').setAttribute("src", banner[x]);

if (x < banner.length){
    setInterval(function(){
    document.getElementById('ad-img').setAttribute("src", banner[x]);
    x++;
    if (x > banner.length-1){
        x = 0;
    }}, 5000);
}
