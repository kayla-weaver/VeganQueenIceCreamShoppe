import React from "react";
import Inventory from "./Inventory";

function InventoryList(){
  return (
    <React.Fragment>
   <Inventory
   flavor="strawberry fields"
   price = "one billion per scoop"
   flavorDescription = "basil and strawberry"
   slogan = "All VEGAN, all the time ;)"/>

   <Inventory
   flavor="vanilla sunset"
   price = "seven billion per scoop"
   flavorDescription = "vanilla and stars"
   slogan = "All VEGAN, all the time ;)"/>
  </React.Fragment>
  );
}

export default InventoryList;