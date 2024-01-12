import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInventoryForm(props){
  function handleNewInventoryFormSubmission(event){
    event.preventDefault();
    props.onNewInventoryCreation({
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      flavorDescription: event.target.flavorDescription.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit= {handleNewInventoryFormSubmission}>
    <input
    type ="text"
    name= "flavor"
    placeholder="Flavor Name" />
    
    <input
      type="text"
      name="price"
      placeholder="Dollars per scoop"/>

      <textarea
      name= "flavorDescription"
      placeholder="Flavor profile" />
    <button type= 'submit'>YUM! SEND IT</button>
    </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes={
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;