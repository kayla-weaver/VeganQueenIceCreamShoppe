import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props){

  function handleNewInventoryFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      available: parseInt(event.target.available.value),
      flavorDescription: event.target.flavorDescription.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
    <ReusableForm 
        formSubmissionHandler={handleNewInventoryFormSubmission}
        buttonText="Add new Ice Cream :)" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes={
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;