let email = document.getElementById("email")
let pass = document.forms["registrationForm"].pass;
let confirmPass = document.forms["registrationForm"].confirmPass;
let info= []

function validate(){
    /*document.querySelector('form').addEventListener('reset', function(event) {
        window.location.reload();
    });*/

    let emailValue = email.value;
    let passValue = pass.value;
    let confirmPassValue = confirmPass.value;
    let errorObj = {};
    //console.log(emailValue,fnameValue,lnameValue, cityValue, stateValue, zipValue, ssnValue, grossValue)

    function validEmail(){
        if (!emailValue.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || (emailValue == null || emailValue == "")){
            alert("Must be a valid email // ex. me@example.com");
            errorObj.email = ("The email is INVALID")
            return false;
        }
        else {
            errorObj.email = ("The email is VALID");
            return true;
        }

    }
    function validPass(){
        if ((passValue === confirmPassValue) && (passValue !== null || passValue !== "") && (confirmPassValue !== null || confirmPassValue !== "")){
            errorObj.pass = ("Passwords are valid matches.")
            return true;
        }
        else if (passValue !== confirmPassValue) {
            alert("Password entries do not match.")
            errorObj.pass = ("The passwords you have entered do not match one another.")
            return false;
        }
        else if ((passValue === null || passValue === "") || (confirmPassValue === null || confirmPassValue === "")){
            alert("Password is empty, please enter your password twice")
            errorObj.pass = ("A password box is empty")
            return false;
        }
    }

    if(validPass() && validEmail()){
        if (localStorage.getItem(emailValue)){
            alert("Email already exists")
        }
        else{
        let user = {"email" : emailValue,"pass": passValue}
        let userStr = JSON.stringify(user)
        localStorage.setItem(user.email, userStr)

        let data = JSON.parse(localStorage.getItem(user.email))
        info.push(data)
        localStorage.setItem("info", JSON.stringify(info))  
        
        //let yo = JSON.parse(localStorage.getItem("info"))

        //console.log(yo)
        }
    }

    const table = document.getElementById("tableData");
    console.log(table.innerHTML.length)
    table.style.width = '100%';
    table.setAttribute('border', 'solid', '1');

    // Create a header row
    let headerRow = table.insertRow();
    
    // Create header cells
    const passHeaderCell = headerRow.insertCell();
    const emailHeaderCell = headerRow.insertCell();
  
    // Set the text content of the header cells
    passHeaderCell.textContent = "Password";
    emailHeaderCell.textContent = "Email";
    
    // Append the header cells to the header row
    headerRow.appendChild(passHeaderCell);
    headerRow.appendChild(emailHeaderCell);
    
    // Append the header row to the table
    table.appendChild(headerRow);
    
    // Create a data row
    const dataRow = table.insertRow();
    
    // Create data cells
    const passCell = dataRow.insertCell()
    const emailCell = dataRow.insertCell()
    
    // Set the text content of the data cells
    passCell.textContent = errorObj.pass;
    emailCell.textContent = errorObj.email;

    // Append the data cells to the data row
    dataRow.appendChild(passCell);
    dataRow.appendChild(emailCell);
    
    // Append the data row to the table
    table.appendChild(dataRow);
}