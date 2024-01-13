import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1> Inventory Detail</h1>
      <h3>{inventory.flavor} - { inventory.price} - {inventory.flavorDescription}</h3>
      <p><em>All VEGAN, all the time</em></p>
      <button onClick={ props.onClickingEdit }>Update Ice Cream</button>
      <button onClick={() => onClickingDelete (inventory.id)}>All gone</button>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes ={
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;