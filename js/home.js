var logoutA = document.querySelector("#logout");
if(localStorage.getItem("email")){
    logoutA.innerHTML = "Log Out"
}
logoutA.onclick = function(){
    localStorage.clear();
}

function showMore(){
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

function AddRecepie(){
  if(localStorage.getItem("email")){
    location.assign("recepiesForm.html");
  }else{
   location.assign("login.html")
  }
}



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
    array.forEach(function (element) {
   
        var rec = `
         <div class="card p-2  m-2" style="width: 15rem;">
        <img class="card-img-top" style="height:250px" src="${element.image}"
          alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.recepie}</h5>
          <p class="card-text">
            <br>
            Recepie by: ${element.name}
          </p>
          <a href="#" class="btn btn-dark">Show More</a>
        </div>
      </div>
        `
        document.querySelector("#card").innerHTML += rec;
       
       
    });
      
}

