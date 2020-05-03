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
  
        <div class="mt-3 col-md-12 text-center border-top border-bottom">
          <h3 class="pt-3">${data.recepie}</h3>
          <p id="name" class="pt-3  ">Recepie by: ${data.name}</p>
          <div class="d-flex  text-justify border-top border-bottom">
            <div class="col-md-3 mt-4">
              <h5>Ingredients</h5>
              <p>
                <pre>${data.ingredients}<pre></p>
            </div>
            <div class="col-md-6  mt-4">
                <h5>Preparation</h5>
                <p>${data.preparation}</p>
            </div>
            <div class="col-md-3 p-2 text-center ml-3">
              <img src="${data.image}" class="w-100" style="height:400px;" alt="">
            </div> 
          </div>
      
       
       
          `
    document.querySelector(".container-fluid").innerHTML += recepie;
}
 