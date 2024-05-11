class Product {
    constructor(name, price, size, quantity) {
      this.name = name;
      this.price = price;
      this.size = size;
      this.quantity = quantity;
    }
  }
  
  class Order {
    constructor(date, product, id) {
      this.date = date;
      this.product = product;
      this.id = id;
    }
}

let orderArr =[]
let quickView = document.getElementsByClassName("quick-view-content")
let y = 0;

function clearRadios(){
  for (i = 0; i < quickView.length; i++) {
    /*quickView[i].addEventListener('mouseout', (e)=> {
      onmouseout = console.log(e.target)
    })*/
    if(quickView[i].children[0].getElementsByTagName("input")[0].type == "radio"){
      quickView[i].children[0].getElementsByTagName("input").checked = "false"
    }
  }
}

for (i = 0; i < quickView.length; i++) {
  //console.log(quickView[i])
  let views = quickView[i]
  views.addEventListener('mouseout',  ()=> {
    //quickView[i].children[0].getElementsByTagName("input").checked = "false"
    console.log(window.getComputedStyle(views, null).display)
    if(window.getComputedStyle(views, null).display !== "block"){
      //console.log(views.style.display)
      let inputs = views.getElementsByTagName("input") 
      //console.log(inputs)
    
      for (i = 0; i < inputs.length; i++) {
        if(inputs[i].type == "radio"){
          inputs[i].checked = false
        }
        if(inputs[i].type == "number"){
          inputs[i].value = 0;
        }
      }
    }
  onmouseout = () => {}    
  })
}

function cartValues(){
  let order = new Order;
  order.quantity = 0;
  order.date = new Date();
  let prod = new Product;
  y+=1
  order.id = y

  //of the elements of class quick-view-content
  //if the input.type == "radio" is checked
  //and the input.type == number's value is not 0
  //add the value of the input.type =="number" to quantity
  //add the id, value, and placeholder of the radio elements to the prod instance of the Product class
  /*
  let elem = document.getElementsByClassName('quick-view-content');
 // console.log(elem.length)
  let ele =[]
  let yehaw = []
  for (i = 0; i < elem.length; i++) {
    ele.push(elem[i])
    console.log(ele)
  }
  for (i = 0; i < ele.length; i++) {
    console.log(ele[i])
     yehaw.push(ele[i].getElementsByClassName("quantity"))  
  }
  for (i = 0; i < yehaw.length; i++) {
    console.log(yehaw[i])
  }

  */
  let ele = document.getElementsByTagName('input');



  function quantityEntered(){
    let entered = false;
    for (i = 0; i < ele.length; i++) {
      if(ele[i].type == "number" && ele[i].value !== 0){
        //console.log(ele[i].value)
        entered = true;
      }
    }
    return entered;
  }


  let qty = 0;
  for (i = 0; i < ele.length; i++) {

    if(ele[i].type == "number" && ele[i].value >0){
      console.log(ele[i].value)
      qty = parseInt(ele[i].value);

      break;
    }
    else {
      qty = 0;
    }
  }
  for (i = 0; i < ele.length; i++) {

      //If the radio button is checked, add the id, value, and placeholder of the radio elements to the prod instance of the Product class
    if ((ele[i].type == "radio" && ele[i].checked)){
        //if(ele[i].checked){
        //console.log(ele[i].value + " Value: ")
        //+ ele[i].value + "<br>")
        //console.log(ele[i])
        prod.name = ele[i].id
        prod.price = ele[i].value
        prod.size = ele[i].placeholder
        prod.quantity = qty
        //console.log(prardy)
        order.product = prod;

        //order.quantity += quantity;
        orderArr.push(order)
        //console.log(orderArr)
        ele[i].checked = false;
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "http://localhost:3000/orders", true);

        ajax.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText)
            console.log(data)
          } 
        }
        ajax.send(JSON.stringify(order))
      }
    } 
  let cartQty = document.getElementById("cartQty")
  let quantity = document.querySelectorAll(".quantity")
  quantity.forEach((item) => {
    order.quantity += parseFloat(item.value)
    item.value = 0;
  })
  cartQty.innerHTML = orderArr.length
}
//console.log(JSON.parse(localStorage.getItem("order")))


function checkOut(){

  localStorage.setItem("order", JSON.stringify(orderArr))

  
   //orderJSON = JSON.parse(localStorage.getItem("order"))

      // orderJSON = JSON.parse(localStorage.getItem("order"))
  //console.log(orderJSON)

  setTimeout(()=>{
    window.location.href = "checkout.html"

  }, '1000')
}

 
  






function clearCart(){
localStorage.setItem("order", [])
}


//console.log(orderJSON)
//console.log(total)




/*
for (const input of ele) {
  if(input.type =="radio"){
    if(input.checked){
      console.log(input);


    }
  }
}
for (const input of ele) {
  if(input.type =="number"){
      console.log(input);


    }
  }
*/