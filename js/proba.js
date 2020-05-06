///// Da gi spojam all-recepies.js i home.js so ist get da gi zemam
//// plus recepie.html
var recepies;
allRecepies();

function allRecepies() {
  var url = "https://food-blog-8ca4b.firebaseio.com/recepies.json";
  fetch(url)
    .then(function (res) {
      return res.json();
    }).then(function (data) {
      recepies = Object.keys(data).map(function (element) {
        var newElement = {
          id: element,
          name: data[element].name,
          recepie: data[element].recepie,
          ingredients: data[element].ingredients,
          preparation: data[element].preparation,
          image: data[element].image
        };
        return newElement;
      });
     ///// koja so mi e prva funkcija kaj nea ojt datata a vo vtorata ne
      drawRecepies(recepies);
      console.log(recepies);
      drawAllRecepies(recepies);
      console.log(recepies);
      searchRecepie(recepies);

    }).catch(function (error) {
      console.log(error)
    });
}

/////home.html
function drawRecepies(array) {
  document.querySelector("#home-card").innerHTML = "";
  array.forEach(function (element) {
    var recepie = `
       <div class="card p-3 m-2" style="width: 14rem;">
      <img class="card-img-top" style="height:250px" src="${element.image}"
        alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title" style="height:70px">${element.recepie}</h5> <br>
        <p id="recepie-by"class="card-text">
          Recepie by: ${element.name}
        </p>
        <a href="recepie.html?id=${element.id}" class="btn btn-dark">Show More</a>
      </div>
    </div>
   
      `
    document.querySelector("#home-card").innerHTML += recepie;
  });

}



//////all-recepies.html
function searchRecepie() {

  var input = document.querySelector("#search").value;
  var formated = input.toLowerCase().trim();

  var filtered = recepies.filter(function (element) {
    return element.name.toLowerCase().indexOf(formated) > -1 ||
      element.recepie.toLowerCase().indexOf(formated) > -1

  });

  console.log(filtered)
  drawAllRecepies(filtered);
}





function drawAllRecepies(array) {

  document.querySelector("#all-recepies").innerHTML = "";

  array.forEach(function (element) {
    var rec = `
        <div class="card mb-5">
        <div class="row no-gutters">
            <div class="col-md-3 pt-2 pl-3 mb-3">
            <h3 class="card-title">${element.recepie}</h3>
            <p class="card-title recepie">Recepie by: ${element.name}</p>
            <img src="${element.image}" class="card-img mt-3"
                    alt="...">

            </div>
            <div class="col-md-8 mt-4">
                <div class="card-body text-justify">
                      <div class="d-flex">

                        <div class="p-3 col-md-5" >
                            <h5>Ingredient</h5>
                            <p class="card-text"><pre>${element.ingredients}</pre></p>
                        </div>
                        <div class="p-3">
                            <h5>Preparation</h5>
                            <p class="card-text">${element.preparation}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>`


    document.querySelector("#all-recepies").innerHTML += rec;
  });
}

///// recepie.html
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
});

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
    document.querySelector("#each-recepie").innerHTML += recepie;
}
 
