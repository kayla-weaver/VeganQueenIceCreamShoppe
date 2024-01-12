import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types"


function InventoryList(props){
  return (
   <React.Fragment>
    <hr />
    {props.InventoryList.map((inventory)=>
    <Inventory 
      whenInventoryClicked = { props.onInventorySelection }
      flavor = {inventory.flavor}
      price = {inventory.price}
      flavorDescription={inventory.flavorDescription}
      id= {inventory.id}
      key={inventory.id}/>
     )}
   </React.Fragment>
  );
}

InventoryList.propTypes={
  inventoryList: PropTypes.array,
  onInventorySelection: PropTypes.func
};

export default InventoryList;