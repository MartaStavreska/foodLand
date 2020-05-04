function AddRecepie() {
    if (localStorage.getItem("email")) {
        location.assign("recepiesForm.html");
    } else {
        location.assign("login.html")
    }
}


var logoutA = document.querySelector("#logout");
if (localStorage.getItem("email")) {
    logoutA.innerHTML = "Log Out"
}
logoutA.onclick = function () {
    localStorage.clear();
}

