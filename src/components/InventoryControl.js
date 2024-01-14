import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";
import EditInventoryForm from "./EditInventoryForm";
import { v4 } from 'uuid';

class InventoryControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedInventory: null,
      editing: false,
      mainInventoryList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewInventoryToList = (newInventory) => {
    if (!newInventory.flavor || !newInventory.price || !newInventory.flavorDescription) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newInventoryItem = {
      ...newInventory,
      quantity: 0,
      burlap: 0,
      id: v4(),
    };
  
    this.setState((prevState) => ({
      mainInventoryList: [...prevState.mainInventoryList, newInventoryItem],
      formVisibleOnPage: false,
    }));
  };
  
  handleChangingSelectedInventory = (id) => {
    const selectedInventory = 
    this.state.mainInventoryList.filter(Inventory => Inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingInventoryInList = (InventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter((Inventory) => Inventory.id !== this.state.selectedInventory.id)
      .concat(InventoryToEdit);
    this.setState({
        mainInventoryList: editedMainInventoryList,
        editing: false,
        selectedInventory: null
    });
  }

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(Inventory => Inventory.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null
    });
  }

  handleSellingInventory = () => {
    const { selectedInventory, mainInventoryList } = this.state;
    if (selectedInventory.available > 0) {
      const updatedInventory = {
        ...selectedInventory,
        available: selectedInventory.available - 1,
      };
  
      const updatedMainInventoryList = mainInventoryList.map((Inventory) =>
        Inventory.id === selectedInventory.id ? updatedInventory : Inventory
      );
  
      this.setState({
        selectedInventory: updatedInventory,
        mainInventoryList: updatedMainInventoryList,
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditInventoryForm 
      inventory={this.state.selectedInventory}
      onEditInventory={this.handleEditingInventoryInList} />;
      buttonText = "Return to Ice Cream List";
    } else if (this.state.selectedInventory !== null) {
      currentlyVisibleState = <InventoryDetail
      inventory={this.state.selectedInventory}
      onClickingDelete={this.handleDeletingInventory}
      onClickingEdit={this.handleEditClick}
      onClickingSell={this.handleSellingInventory}/>
      buttonText = 'Return to Ice Cream list :)';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm 
      onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Ice Cream List!";
    } else {
      currentlyVisibleState = 
        <InventoryList InventoryList={this.state.mainInventoryList} 
        onInventorySelection={this.handleChangingSelectedInventory} />
      buttonText = "Add Ice Cream :)";
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