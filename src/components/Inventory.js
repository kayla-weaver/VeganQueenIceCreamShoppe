import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  console.log(props);
  return (
    <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
      <h3>
      <p>Flavor: {props.flavor}</p>
      <p>Price per scoop: {props.price}</p>
      <p>Flavor Description: {props.flavorDescription}</p>
      <p>Available: {props.available} scoops</p></h3>
      <p><em>All VEGAN, all the time ;)</em></p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes  = {
  flavor: PropTypes.string,
  price: PropTypes.string,
  flavorDescription: PropTypes.string,
  id: PropTypes.string,
  available: PropTypes.string,
  whenInventoryClicked: PropTypes.func
}


export default Inventory;