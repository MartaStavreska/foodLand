var token = localStorage.getItem("token");
if(token == ""){
    location.assign("login.html")
}

function showSelectedImage(imageUrl, error) {
    //Ako slucajno se pojavi nekoj error mojata funkcija ke go stavi tekstot vo error parametarot
    //inaku ke bide null. Namesto alert moze da go ispisete errorot na drugo mesto
    if (error !== null) {
      alert(error);
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


    var paragraph = document.querySelector(".error").innerText;

    if (name == "" || recepie == "" || ingredients == "" || preparation == "" || image == "") {
        document.querySelector(".error").innerText = "You need to fill all fields";
        return;
    }


    var url = "https://food-blog-8ca4b.firebaseio.com/recepies.json";


    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            recepie:recepie,
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
       
        form.name.value = "";
        form.recepie.value = "";
        form.ingredients.value = "";
        form.preparation.value = "";
        document.getElementById("selected-image").src = "";
      //  location.assign("recepies-details.html")


    }).catch(function (error) {
        if (error == "TypeError: Failed to fetch") {
            paragraph.innerText = "No internet connection";
        } else {
            paragraph.innerText = "Some critical error!";
        }
    });



}