
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

            drawAllRecepies(recepies);
            searchRecepie(recepies);

        }).catch(function (error) {
            console.log(error)
        });
}


function searchRecepie(arrayOfRecepies) {
    var input = document.querySelector("#search").value;
    var formated = input.toLowerCase().trim();

    var filtered = arrayOfRecepies.filter(function (element) {
        return element.name.toLowerCase().indexOf(formated) > -1 ||
            element.recepie.toLowerCase().indexOf(formated) > -1

    });

    console.log(filtered)
    drawAllRecepies(filtered);
}





function drawAllRecepies(array) {
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


        document.querySelector(".container").innerHTML += rec;
    });
}



