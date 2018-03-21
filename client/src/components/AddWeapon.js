import React, { Component } from 'react';

export default class AddWeapon extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      this.setState({
        firstName: "",
        lastName: ""
      });
    };
    render() {
      return (
        <div>
          <p> Forge a new weapon for testing</p>
          <form>
            <input
              name="weaponName"
              type="text"
              placeholder="weapon name"
            />
            <select name="weaponTypes" size="3" multiple>
              <option value="mace">mace</option>
              <option value="axe">axe</option>
              <option value="sword">sword</option>
            </select>
            <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </div>
      );
    }
}