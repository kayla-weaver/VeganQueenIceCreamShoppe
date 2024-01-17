import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm (props) {
  const { inventory } = props;
  
  function handleEditInventoryFormSubmission(event){
    event.preventDefault();
    props.onEditInventory({
      flavor: event.target.flavor.value,
      price: parseFloat (event.target.price.value),
      available: parseFloat(event.target.available.value),
      flavorDescription: event.target.flavorDescription.value,
      id: inventory.id
    })
  }
  
  
  return (
      <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Ice Cream :)"
        defaultValue={inventory} />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func
};

export default EditInventoryForm;