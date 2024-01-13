import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";
import EditInventoryForm from "./EditInventoryForm";
import { v4 } from 'uuid';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedInventory: null,
      editing: false,
      mainInventoryList: [
        {
          flavor: "rocky road",
          price: 7,
          flavorDescription: "chunks off asphalt that break your teeth",
          id: v4()
        }
      ],
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewInventoryToList = (newInventory) => {
    if (!newInventory.flavor || !newInventory.price || !newInventory.flavorDescription) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    this.setState((prevState) => ({
      mainInventoryList: [...prevState.mainInventoryList, newInventory],
      formVisibleOnPage: false,
    }));
  };

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.find((inventory) => inventory.id === id);
    this.setState({ selectedInventory: selectedInventory });
  };

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter((inventory) => inventory.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingInventoryInList = (inventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter((inventory) => inventory.id !== this.state.selectedInventory.id)
      .concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedInventory: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditInventoryForm ticket={this.state.selectedInventory} />;
      buttonText = "Return to Ice Cream List";
    } else if (this.state.selectedInventory !== null) {
      currentlyVisibleState = (
        <InventoryDetail
          inventory={this.state.selectedInventory}
          onClickingDelete={this.handleDeletingInventory}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = 'Return to Ice Cream list :)';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />;
      buttonText = "Return to Ice Cream List!";
    } else {
      currentlyVisibleState = (
        <InventoryList InventoryList={this.state.mainInventoryList} onNewInventorySelection={this.handleChangingSelectedInventory} />
      );
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
