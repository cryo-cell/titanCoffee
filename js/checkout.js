  




let ajax = new XMLHttpRequest();
let total= 0; 
let data;

ajax.open("GET", "http://localhost:3000/orders", true)

ajax.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){
     data = JSON.parse(this.responseText); 
    //console.log( responseJsonObj[0]); 
    for (i = 0; i < data.length; i++) {
      //console.log( data );
      total += data[i].product.price * data[i].product.quantity
    }
      //let data = this.responseText
      //console.log(data) 
  }

  if(total !== 0){
    let screen = document.getElementsByClassName("main-menu")
;
    //console.log(orderJSON[i].product.name)
    //total += orderJSON[i].product.price * orderJSON[i].product.quantity
    for (i = 0; i < data.length; i++) {
      let product = document.createElement("span")
      product.style.marginTop = "75px"
      product.textContent = `Item: ${data[i].product.name} Price: $${data[i].product.price} Size: ${data[i].product.size} Qty: ${data[i].product.quantity}`;
      screen[0].append(product)
    }
    let finalTotal = document.createElement("span")
    finalTotal.style.marginTop = "75px"
    finalTotal.textContent = `Total: $${total}`
    screen[0].append(finalTotal)
  }
  //else console.log("yeah")
  //console.log(data) 
}


let orderJSON = JSON.parse(localStorage.getItem("order"))
ajax.send(JSON.stringify(orderJSON))
let screen = document.getElementsByClassName("main-menu")


//console.log(screen[0])

/*
for (i = 0; i < orderJSON.length; i++) {
  let product = document.createElement("span")
  product.style.marginTop = "75px"
  //console.log(orderJSON[i].product.name)
  //total += orderJSON[i].product.price * orderJSON[i].product.quantity
  product.textContent = `Item: ${orderJSON[i].product.name} Price: $${orderJSON[i].product.price} Size: ${orderJSON[i].product.size} Qty: ${orderJSON[i].quantity}`;
  //screen[0].append(product)
//console.log(product)
  /*if(orderArr[i].product == orderArr[i+1].product){
    delete orderArr[i+1]
    orderArr[i].product.quantity += an
  }*/
  //console.log(orderJSON[i])
//total += parseFloat(orderArr[i].product.price) * parseFloat(orderArr[i].product.quantity); 


/*
let finalTotal = document.createElement("span")
finalTotal.style.marginTop = "75px"

finalTotal.textContent = `Total: $${total}`
screen[0].append(finalTotal)

*/
function deleteXMLHttpRequestObject(){
let aj= new XMLHttpRequest();
  //console.log(aj)
  aj.open("DELETE", "http://localhost:3000/orders", true)
  aj.onload = function(){
    if(aj.status == 200 && aj.readyState == 4){
      //let data = JSON.parse(aj.textContent)
      for (i = 0; i < data.length; i++) {

      }   
      
      }
    
}
aj.send()

}