function isValid(name,email,password,errorP){
    if(email == ""){
        errorP.innerText = "Email field is requred";
        return false;
    }

    var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!emailRegex.test(email)) {
      errorP.innerText = "Email is invalid";
      return false;
    }
  
    if (password == "") {
      errorP.innerText = "Password field is required";
      return false;
    }
  
    if (password.length < 6) {
      errorP.innerText = "Password needs to be 6 characters";
      return false;
    }
  
    return true;
}
  
   
