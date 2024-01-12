import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";

class InventoryControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null
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
    if (this.state.selectedTicket !=null){
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
  }
  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory =>inventory.id === id)[0];
    this.setState({selectedInventory});
  }

render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedDetail != null){
      currentlyVisibleState = <InventoryDetail inventory = {this.state.selectedInventory}/>
      buttonText= 'Return to Ice Cream list :)';
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
      buttonText= "Return to Ice Cream List!";
    }else {
      currentlyVisibleState = <InventoryList InventoryList={this.state.mainInventoryList} onNewInventorySelection = {this.handleChangingSelectedInventory} />;
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