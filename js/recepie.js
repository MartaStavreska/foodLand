var urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");
console.log(id);

var url = "https://food-blog-8ca4b.firebaseio.com/recepies/" + id + ".json";

fetch(url).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);
    drawEachRecepie(data);
}).catch(function (error) {
    console.log(error);
})

function drawEachRecepie(data) {
    var recepie =
        `
        <div class="mt-3">
        <h3 class="pt-3 offset-2">${data.recepie}</h3>
        <p id="name" class="pt-3 offset-3 ">Recepie by: ${data.name}</p>
        <div class="d-flex  text-justify">
            <div class="col-md-3 ml-3 mt-4">
                <h5>Ingredients</h5>
                <p>${data.ingredients}</p>
            </div>
            <div class="col-md-6 offset-1 mt-4">
                <h5>Preparation</h5>
                <p>${data.preparation}</p>
            </div>
        </div>

        </div>

        <div class="col-md-5 mt-3 text-center">
        <img src="${data.image}" class="w-100" alt="">
        </div> 
  `
    document.querySelector(".container-fluid").innerHTML += recepie;
}
