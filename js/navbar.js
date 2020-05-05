function AddRecepie() {
    if (localStorage.getItem("email")) {
        location.assign("recepiesForm.html");
    } else {
        location.assign("login.html")
    }
}


var logoutAnchor = document.querySelector("#logout");

if (localStorage.getItem("email")) {
    logoutAnchor.innerHTML = "Log Out"
}
logoutAnchor.onclick = function () {
    localStorage.clear();
}


var adminAnchor = document.querySelector("#admin");
var li = document.querySelector("#admin-li");
if(localStorage.getItem("email") == "marta@gmail.com"){
    adminAnchor.innerHTML = "Messages"
}else{
    document.querySelector("ul").removeChild(li);
}




