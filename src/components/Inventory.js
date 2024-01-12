import React from "react";

function Inventory(){
  const flavor = "Strawberry";
  const flavor2 = "Basil";
  return (
    <React.Fragment>
      <h3> Summer strawberry fields</h3>
      <h3>$1,000,000,000,000 per scoop</h3>
      <h3> {flavor} and {flavor2}</h3>
      <p><emp>All VEGAN, all the time ;)</emp></p>
    </React.Fragment>
  );
}

export default Inventory;