import React from "react";

function App(){
  const flavor = "Strawberry";
  const flavor2 = "Basil";
  return (
    <React.Fragment>
      <h1>Yummy yummy strawberry</h1>
      <h2>One billion  per scoop</h2>
      <h3>{flavor} and {flavor2} ice creamy goodness</h3>
      <p><em>All vegan, all the time ;) </em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;