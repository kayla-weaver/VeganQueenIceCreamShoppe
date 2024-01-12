import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";

class InventoryControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: []
    };
  }

  handleAddingNewInventoryToList = (NewInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(NewInventory);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
      buttonText= "Return to Ice Cream List!"
    }else {
      currentlyVisibleState = <InventoryList InventoryList={this.state.mainInventoryList} />;
      buttonText= "Add Ice Cream :)"
    }
    return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}
}

export default InventoryControl;