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
        <div class="mt-3 col-md-12 text-center border-bottom border-top">
        <h3 class="pt-3">${data.recepie}</h3>
        <p id="name" class="pt-3 border-bottom">Recepie by: ${data.name}</p>
        <div class="text-justify">
          <div class="d-flex offset-2">
          <div class="col-md-5 mt-4">
              <h5>Ingredients</h5>
              <p><pre>${data.ingredients}<pre></p>
            </div>
             <div class="col-md-4">
               <img src="${data.image}" class="w-100" style="max-height:400px"  alt="">
           </div>
          </div>
           <div class="col-md-8 offset-2">
              <h5>Preparation</h5>
              <p class="mt-3">${data.preparation}</p>
          </div> 
        </div>
        </div>
      
       
       
          `
    document.querySelector(".container-fluid").innerHTML += recepie;
}
 