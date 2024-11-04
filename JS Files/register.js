validate = () => {
    let email = document.getElementById("emailInput").value;
    let name = document.getElementById("nameInput").value;
    let phone = document.getElementById("phoneInput").value;
    let password = document.getElementById("pwInput").value;
    let passwordConfirm = document.getElementById("pwInput2").value;
    let city = document.getElementById("cityOptions").value;
    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;
    
    let phoneformat = /^\(?(\d{4})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name == "" || name.length < 3){
        alert("Please input your valid name!");
    } else if(phone == ""){
        alert("Please fill in Phone Number!");
    } else if(email == ""){
        alert("Please fill in your email!");
    } else if(password == ""){
        alert("Please fill in the password!");
    } else if(passwordConfirm == ""){
        alert("Please confirm your password!");
    } else if(genderMale == "" && genderFemale == ""){
        alert("Please select your Gender!");
    } else if(city == ""){
        alert("Please select the City!");
    } else if(!(phone.match(phoneformat))){
        alert("Phone number is invalid");
    } else if (!email.includes("@")){
        alert("Email needs to include the character @");
    } else if (!(email.match(emailformat))){
        alert("Please input the valid email format!");
    } else if (password.length < 8){
        alert("Password needs to be at least 8 characters long");
    } else if(password != passwordConfirm){
        alert("Confirm Password does not match with Password");
    } else {
        confirm("Successfully Registered!");
    }

}