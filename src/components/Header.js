import React from "react";
import icecreamImage from "./../img/icecream.png";

function Header(){
  return (
    <React.Fragment>
    <h1>Vegan Ice Cream!</h1>
    <img src={icecreamImage} alt= "An image of ice cream with a cute little heart on top" class="medium"/>
    </React.Fragment>
  );
}

export default Header;