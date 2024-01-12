import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types"


function InventoryList(props){
  return (
   <React.Fragment>
    <hr />
    {props.InventoryList.map((inventory, index)=>
    <Inventory flavor = {inventory.flavor}
      price = {inventory.price}
      flavorDescription={inventory.flavorDescription}
      key={index}/>
     )}
   </React.Fragment>
  );
}

InventoryList.propTypes={
  InventoryList: PropTypes.array
};

export default InventoryList;