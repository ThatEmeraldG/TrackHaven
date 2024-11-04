validate = () => {
    let email = document.getElementById("emailInput"). value;
    let password = document.getElementById("pwInput"). value;

    if(email == ""){
        alert("Please input your email!");
    } else if (!email.includes("@")){
        alert("Please input a valid email!");
    } else if(password == ""){
        alert("Please input your password!");
    } else {
        confirm("Successfully Registered!");
    }
}