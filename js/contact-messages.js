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
            document.querySelector("#show-message").innerHTML = "Thank you for messaging us, we will get back to you as soon as possible."


        }).catch(function (error) {
            console.log(error);
        });
}





allMessages();
var messages;

function allMessages() {

    var h1 = document.querySelector("#forbiden");
    if (localStorage.getItem("email") == "marta@gmail.com") {
        var token = localStorage.getItem("token");
        document.body.removeChild(h1);
    } else {
        document.querySelector("#clear-message").innerHTML = "";
        h1.innerHTML = "Access Forbiden";
        return false;
    }
    
    fetch("https://food-blog-8ca4b.firebaseio.com/messages.json?auth=" + token)
        .then(function (res) {
            return res.json();
        }).then(function (data) {

            messages = Object.keys(data).map(function (key) {
                return {
                    id: key,
                    name: data[key].name,
                    email: data[key].email,
                    message: data[key].message
                }
            });

            drawMessages(messages);

        }).catch(function (error) {
            console.log(error);
        })

}

function drawMessages(arrayOfMessages) {
    arrayOfMessages.forEach(function (element) {
        var card =
    `<div class="card mt-3" style = "background-color:#f0f3bd">
      <div class="card-body"><h5>${element.name}</h5>
       <p>${element.email}</p>
        <p class="card-text">${element.message}</p>
      </div>
    </div>`
        document.querySelector("#print-messages").innerHTML += card;
    });

}
