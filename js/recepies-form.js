
var paragraph = document.querySelector(".error");



function showSelectedImage(imageUrl, error) {

    if (error !== null) {
        paragraph.innerText = error;
    }

    document.getElementById("selected-image").src = imageUrl;
}


function postRecepie(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.name.value;
    var recepie = form.recepie.value;
    var ingredients = form.ingredients.value;
    var preparation = form.preparation.value;
    const image = document.getElementById("selected-image").src;


    var token = localStorage.getItem("token");
    
    if (token == null) {
        paragraph.innerText = "Please Login"   
        return;
    }

    if (name == "" || recepie == "" || ingredients == "" || preparation == "" || image == "") {
        paragraph.innerText = "You need to fill all fields";
        return;
    }


    var url = "https://food-blog-8ca4b.firebaseio.com/recepies.json?auth=" + token;


    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            recepie: recepie,
            ingredients: ingredients,
            preparation: preparation,
            image: image
        })
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        if (data.error !== undefined) {
            var errorMessage = data.error.message.replace(/_/g, " ").toLowerCase();
            paragraph.innerText = errorMessage;
            return;
        }

        form.reset();
        document.getElementById("selected-image").src = "";
        location.assign("all-recepies.html")


    }).catch(function (error) {
        console.log(error);
    });



}