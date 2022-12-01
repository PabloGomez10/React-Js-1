import React from "react";
import CartWidget from "./cartWidget";


function NavBar (){



return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Delta Informatica</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item dropdown">

          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

            Productos

          </a>

          <ul class="dropdown-menu">

            <li><a class="dropdown-item" href="#">Componentes</a></li>

            <li><a class="dropdown-item" href="#">Accesorios</a></li>

            <li><a class="dropdown-item" href="#">Equipos</a></li>

          </ul>

        </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre Nosotros</a>
      </li>
      
    </ul>
  </div>
</div>
<CartWidget/>
</nav>);
}

export default NavBar;