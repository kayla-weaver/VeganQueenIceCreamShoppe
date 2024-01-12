import React from "react";
import Inventory from "./Inventory";

const mainInventoryList = [
  {
    flavor: 'Strawb',
    Price: "billion",
    flavorDescription: "yummy yummy good"
  },
  {
    flavor: 'Fwuit',
    Price: "7billion",
    flavorDescription: "yummy yummy gooooood"
  },

  {
    flavor: 'flavy',
    Price: "lots of billion",
    flavorDescription: "yummy yummy too good"
  }
];






function InventoryList(){
  return (
   <React.Fragment>
    <hr />
    {mainInventoryList.map((inventory, index)=>
    <Inventory flavor = {inventory.flavor}
      price = {inventory.price}
      flavorDescription={inventory.flavorDescription}
      key={index}/>
     )}
   </React.Fragment>
  );
}

export default InventoryList;