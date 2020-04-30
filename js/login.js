function login(e) {
    e.preventDefault();
    var form = e.target;
    var email = form.email.value;
    var password = form.password.value;

    var errorP = document.querySelector("p.error");
    var validation = isValid(name,email,password,errorP);
    
    if (!validation) {
        return;
    }

    var userInfo = {
        email: email,
        password: password,
        returnSecureToken: true
    };

    var url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnSX6JUnt48UcYqZtHlu_3ehwL6BXtpxQ";
                                                                         
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
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.idToken);
       
        console.log(data);
        location.replace("recepiesForm.html");
        
    }).catch(function (error) {
        if (error == "TypeError: Failed to fetch") {
            errorP.innerText = "No internet connection";
        } else {
            errorP.innerText = "Some critical error!";
        }
    });


}