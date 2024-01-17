import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>

    <input
    type ="text"
    name= "flavor"
    placeholder="Flavor Name" />
    
    <input
      type="text"
      name="price"
      placeholder="Dollars per scoop"/>

<input
      type="text"
      name="available"
      placeholder="Scoops available"/>

      <textarea
      name= "flavorDescription"
      placeholder="Flavor profile" />
    <button type= 'submit'>YUM! SEND IT</button>
    </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;