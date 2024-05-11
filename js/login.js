let email = document.getElementById("email")
let pass = document.forms["loginForm"].pass;
let obj = []

function validLogin(){
    let emailValue = email.value;
    let passValue = pass.value;
    
    let arr = JSON.parse(localStorage.getItem(emailValue))
    //console.log(arr.email)
    if (emailValue === "Admin" && passValue === "test123"){
        console.log("Hello Admin")
        localStorage.setItem("profile", JSON.stringify("Admin"))    
        setTimeout(() => {
            window.location.href="./sales.html"
        }, "2000");
    }
    else if (localStorage.getItem(emailValue)){
       if (emailValue === arr.email && passValue === arr.pass){
            console.log("Hello " + emailValue)
            localStorage.setItem("profile", JSON.stringify(arr.email))
            setTimeout(() => {
                window.location.href="./dashboard.html"
            }, "5000");
        }
        else {
            alert("Invalid credentials")
        console.log(emailValue)
        }
    }
    else {
        alert("Invalid credentials")
        console.log(emailValue) 
    }

}
    


