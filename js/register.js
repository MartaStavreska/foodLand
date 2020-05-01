function register(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;

    var errorP = document.querySelector("p.error");
    var validation = isValid(name,email,password,errorP);
    
    if (!validation) {
        return;
    }

    var userInfo = {
        name: name,
        email: email,
        password: password,
        returnSecureToken: true
    };

    var url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDnSX6JUnt48UcYqZtHlu_3ehwL6BXtpxQ";
                                                                         
    fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo)
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        if (data.error !== undefined) {
            var errorMessage = data.error.message.replace(/_/g, " ").toLowerCase();
            errorP.innerText = errorMessage;
            return;
        }
       
        location.assign("login.html");
        
    }).catch(function (error) {
        console.log(error)
    });


}