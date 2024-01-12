import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory } = props;
  
  return(
    <React.Fragment>
      <h1> InventoryDetail</h1>
      <h3>{inventory.flavor} - {inventory.price}</h3>
      <p><em>All VEGAN, all the time ;)</em></p>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes ={
  inventory: PropTypes.object
};

export default InventoryDetail;