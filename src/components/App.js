import React from "react";
import Header from "./Header";
import InventoryList from "./InventoryList";

function App(){
  const flavor = "Strawberry";
  const flavor2 = "Basil";
  return (
    <React.Fragment>
      <Header />
      <InventoryList />
    </React.Fragment>
  );
}

export default App;