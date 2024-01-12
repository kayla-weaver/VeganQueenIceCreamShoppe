import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <h3>{props.flavor} - {props.price}</h3>
      <h3>{props.flavorDescription}</h3>
      <p><em>All VEGAN, all the time ;)</em></p>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  flavor: PropTypes.string,
  price: PropTypes.string,
  flavorDescription: PropTypes.string
};


export default Inventory;