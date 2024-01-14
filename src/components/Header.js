import React from "react";
import icecreamImage from "./../img/icecream.png";

function Header(){
  return (
    <React.Fragment>
    <h1>Vegan Queen Ice Cream!</h1>
    <h4>For the queens that give a d*mn about our planet and want  a sweet, cold, and creamy treat!</h4>
    < hr />
    <img src={icecreamImage} alt= "An image of ice cream with a cute little heart on top" class="medium"/>
    </React.Fragment>
  );
}

export default Header;