import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h3> Ice Cream Inventory Detail</h3>
      <h1>{inventory.flavor} </h1>
      <p>{ inventory.price}</p>
      <p>{inventory.flavorDescription}</p>
      <p>{inventory.available} scoops</p>
      <p><em>All VEGAN, all the time</em></p>
      <button onClick={ props.onClickingEdit }>Update Ice Cream</button>
      <button onClick= { props.onClickingSell }> Scoop </button>
      <button onClick={() => onClickingDelete (inventory.id)}>All gone</button>
      <hr/>
    </React.Fragment>
  );
}

InventoryDetail.propTypes ={
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default InventoryDetail;