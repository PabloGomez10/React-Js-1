import React, { Component } from "react";
import NavBar from "./componentes/navBar";
import ItemListContainer from "./componentes/itemListContainer";

class App extends Component{
  render (){
    return (
      <div className="">
     <NavBar/>
     <ItemListContainer Bienvenidos= "Bienvenidos a Delta Informatica"/>

    </div>
    );
  }
}

export default App;
