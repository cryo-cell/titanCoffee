let email = document.getElementById("email")
let fname = document.forms["creditForm"].fname;
let lname = document.forms["creditForm"].lname;
let city = document.forms["creditForm"].city;
let state = document.forms["creditForm"].state;
let ssn = document.forms["creditForm"].ssn;
let zip = document.forms["creditForm"].zip;
let gross = document.forms["creditForm"].gross;

function validate(){
    document.querySelector('form').addEventListener('reset', function(event) {
        window.location.reload();
    });

    let emailValue = email.value;
    let fnameValue = fname.value;
    let lnameValue = lname.value;
    let cityValue = city.value;
    let stateValue = state.value;
    let zipValue = zip.value;
    let grossValue = gross.value;
    let ssnValue = ssn.value;

    let errorObj = {};
    //console.log(emailValue,fnameValue,lnameValue, cityValue, stateValue, zipValue, ssnValue, grossValue)
   
    if (!emailValue.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        alert("Must be a valid email");
        errorObj.email = ("The email is INVALID")
    }
    else errorObj.email = ("The email is VALID")
     if (fnameValue == null || fnameValue == ""){
        alert("Please Enter your name.")
        errorObj.fname = ("No first name entered.")
        localStorage.setItem("fname", JSON.stringify(fnameValue))
        localStorage.setItem("lname", JSON.stringify(lnameValue))

     }
     else errorObj.fname = ("The first name is VALID")

     if(lnameValue == null || lnameValue == ""){
        alert("Please Enter your last name.")

        errorObj.lname = ("No last name entered.")
     }
     else errorObj.lname = ("The last name is VALID")

     if(cityValue == null || cityValue == "") {
        alert("Please Enter your city location.")
        errorObj.city = ("No city entered")
     }
     else errorObj.city = ("The city location is VALID")

     if(stateValue == null || stateValue == ""){
        alert("Please Enter your state location.")
        errorObj.state = ("No state entered")
     }
     else errorObj.state = ("The state is VALID")

     if(!zipValue.match(/^\d{5}(-\d{4})?$/)){
        alert("Invalid Zip Code. Please try again.")
        errorObj.zip = ("ZIP Code is INVALID.")
    }
    else errorObj.zip = ("ZIP Code is VALID")

     if(!grossValue.match(/\d/) || grossValue == null || grossValue == ""){
        alert("Income is incorrect")
        errorObj.gross = ("Income is INVALID")
    }
    else errorObj.gross = ("Income is VALID")

    if(ssnValue.length !== 4 || !ssnValue.match(/\d/)){
        alert("Please enter only the last four digits of your social security number.")
        errorObj.ssn = ("Social Security Number does not contain four digits.")
    }
    else errorObj.ssn = ("The SSN is VALID")

    
    const table = document.getElementById("tableData");
    console.log(table.innerHTML.length)
    table.style.width = '100%';
    table.setAttribute('border', 'solid', '1');

    // Create a header row
    let headerRow = table.insertRow();
    
    // Create header cells
    const fnameHeaderCell = headerRow.insertCell();
    const lnameHeaderCell = headerRow.insertCell();
    const emailHeaderCell = headerRow.insertCell();
    const cityHeaderCell = headerRow.insertCell();
    const stateHeaderCell = headerRow.insertCell();
    const zipHeaderCell = headerRow.insertCell();
    const grossHeaderCell = headerRow.insertCell();
    const ssnHeaderCell = headerRow.insertCell();

    // Set the text content of the header cells
    fnameHeaderCell.textContent = "First Name";
    lnameHeaderCell.textContent = "Last Name";
    emailHeaderCell.textContent = "Email";
    cityHeaderCell.textContent = "City";
    stateHeaderCell.textContent = "State";
    zipHeaderCell.textContent = "ZIP";
    grossHeaderCell.textContent = "Gross Income";
    ssnHeaderCell.textContent = "Last 4 of SSN";

    // Append the header cells to the header row
    headerRow.appendChild(fnameHeaderCell);
    headerRow.appendChild(lnameHeaderCell);
    headerRow.appendChild(emailHeaderCell);
    headerRow.appendChild(cityHeaderCell);
    headerRow.appendChild(stateHeaderCell);
    headerRow.appendChild(zipHeaderCell);
    headerRow.appendChild(grossHeaderCell);
    headerRow.appendChild(ssnHeaderCell);
    
    // Append the header row to the table
    table.appendChild(headerRow);
    
    // Create a data row
    const dataRow = table.insertRow();
    
    // Create data cells
    const fnameCell = dataRow.insertCell()
    const lnameCell = dataRow.insertCell()
    const emailCell = dataRow.insertCell()
    const cityCell = dataRow.insertCell()
    const stateCell = dataRow.insertCell()
    const zipCell = dataRow.insertCell()
    const grossCell = dataRow.insertCell()
    const ssnCell = dataRow.insertCell()
    
    // Set the text content of the data cells
    fnameCell.textContent = errorObj.fname;
    lnameCell.textContent = errorObj.lname;
    emailCell.textContent = errorObj.email;
    cityCell.textContent = errorObj.city;
    stateCell.textContent = errorObj.state;
    zipCell.textContent = errorObj.zip;
    grossCell.textContent = errorObj.gross;
    ssnCell.textContent = errorObj.ssn;

    // Append the data cells to the data row
    dataRow.appendChild(fnameCell);
    dataRow.appendChild(lnameCell);
    dataRow.appendChild(emailCell);
    dataRow.appendChild(cityCell);
    dataRow.appendChild(stateCell);
    dataRow.appendChild(zipCell);
    dataRow.appendChild(grossCell);
    dataRow.appendChild(ssnCell);
    
    // Append the data row to the table
    table.appendChild(dataRow);
    
    // Append the table to the document body
  
    if(grossValue >= 15000){
    alert(`Congrats on your new Account!
     You'll receive email confirmation at ${emailValue}`)
    }
    else if(grossValue < 15000 && grossValue !== "" && grossValue !== null){
    alert("You did not qualify at this time.")
    }
}
        

//btn.addEventListener("click", validateForm(formi))