let adBanner = [
    ["./img/iced-coffee.jpg"],
    ["./img/hot-coffee.jpg"],
    ["./img/frozen-coffee.jpg"],
    ["./img/teaNboba.jpg"]
];

let x = 0;

document.getElementById('ad-img').setAttribute("src", adBanner[x]);

if (x < adBanner.length){
    setInterval(function(){
    document.getElementById('ad-img').setAttribute("src", adBanner[x]);
    x++;
    if (x > adBanner.length-1){
        x = 0;
    }}, 1000);
}

/*let logoBanner = [
    ["./img/spartan-color.png"],
    ["./img/iced-coffee.jpg"],
];

let y = 0;

document.getElementById('spartan-color').setAttribute("src", logoBanner[y]);

if (y < logoBanner.length){
    setInterval(function(){
    document.getElementById('spartan-color').setAttribute("src", logoBanner[y]);
    y++;
    if (y > logoBanner.length-1){
        y = 0;
    }}, 2000);
}
 */
//logo banner
   