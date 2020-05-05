setHeaderAndFooter();
function setHeaderAndFooter() {
    document.querySelector("header").innerHTML += `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a href="home.html" class="navbar-brand"><img
        src="images/400-4002708_chef-hat-clip-art-chef-hat-svg-free.jpg"
        width="30" height="30" class="d-inline-block align-top" alt=""></a>
    <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="nav">
    <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link  px-3" href="home.html">Home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  px-3" href="events.html">Events<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  px-3" onclick="AddRecepie()">Add Recepie<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  px-3" href="all-recepies.html">Recepies<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  px-3" href="chefs.html">Chefs<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  px-3" href="contact.html">Contact<span class="sr-only"></span></a>
        </li>
        <li class="nav-item" id="admin-li">
          <a class="nav-link  px-3" href="messages.html" id="admin">Messages<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a id="logout" class="nav-link  px-3" href="home.html" onclick="LogOut()"><span class="sr-only"></span></a>
        </li>
      </ul>
    </div>
  </nav>
`;

    document.querySelector("footer").innerHTML = `<footer>
    <div class="row d-flex">
    <div class="col-md-4">
      <ul class="text-success">
        <h4 class="text-success"> Recipes</h4>
        <li> By ingredient</li>
        <li> Featured on TV</li>
        <li> Calendar</li>
        <li> Quick recipes</li>
        <li> Food facts</li>
        <li> Buy local</li>
      </ul>
    </div>

    <div class="col-md-4">
      <ul class="text-success">
        <h4 class="text-success"> Recipes</h4>
        <li> By ingredient</li>
        <li> Featured on TV</li>
        <li> Calendar</li>
        <li> Quick recipes</li>
        <li> Food facts</li>
        <li> Buy local</li>
      </ul>
    </div>

    <div class="col-md-4">
      <ul class="text-success">
        <h4 class="text-success"> Recipes</h4>
        <li> By ingredient</li>
        <li> Featured on TV</li>
        <li> Calendar</li>
        <li> Quick recipes</li>
        <li> Food facts</li>
        <li> Buy local</li>
      </ul>
    </div>


  </div>
  </footer>`;

}