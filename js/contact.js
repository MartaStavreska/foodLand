function sendMessage(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.name.value;
    var email = form.email.value;
    var message = form.message.value;

    if (name == "" || email == "" || message == "") {
        document.querySelector(".error").innerText = "You need to fill all fields";
        return;
    }

    fetch("https://food-blog-8ca4b.firebaseio.com/messages.json", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        })
    })
        .then(function (res) {
            return res.json();
        }).then(function (data) {

            console.log(data);
            form.reset();


        }).catch(function (error) {
            console.log(error);
        });
}


