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
 
   