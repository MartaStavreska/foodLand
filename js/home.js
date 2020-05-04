
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
      drawRecepies(recepies);
    }).catch(function (error) {
      console.log(error)
    });
}


function drawRecepies(array) {

  document.querySelector("#home-card").innerHTML = "";
  array.forEach(function (element) {
    var rec = `
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
    document.querySelector("#home-card").innerHTML += rec;
  });

}



function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}