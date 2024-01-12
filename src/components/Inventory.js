import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenInventoryClicked(props.id)}>
      <h3>{props.flavor} - {props.price}</h3>
      <h3>{props.flavorDescription}</h3>
      <p><em>All VEGAN, all the time ;)</em></p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  flavor: PropTypes.string,
  price: PropTypes.string,
  flavorDescription: PropTypes.string,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};


export default Inventory;