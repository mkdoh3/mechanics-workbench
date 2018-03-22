import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class AddWeapon extends Component {

    //its not pretty but it works for now..
    handleFormSubmit = event => {
      event.preventDefault();
      const name = this.nameInput.value;
      const type = this.typeInput.value;
      const minDmg = this.minInput.value;
      const maxDmg = this.maxInput.value;
      const STRMod = this.strModInput.value;
      const elementType = this.elementTypeInput.value;
      const elementMod = this.elementModInput.value / 100;
      let elemental = null;
      let APS;
      if (type === 'axe') {
        APS = 1.2;
      } else if (type === 'sword') {
        APS = 1.4;
      } else {
        APS = 1;
      }
      if(elementType) {
        elemental = {};
        elemental.type = elementType;
        elemental.dmgMod = elementMod;
      }
      const newWeapon = {
        name,
        type,
        minDmg,
        maxDmg,
        APS,
        STRMod,
        elemental
      }
      this.props.postNewWeapon(newWeapon)
    };

    render() {
      return (
        <div>
          <p> Forge a new weapon for testing</p>
          <form>
            <FormGroup>
              <ControlLabel>weapon name</ControlLabel>
              <FormControl
                inputRef={ref => { this.nameInput = ref; }}
                type="text"
                placeholder="be clever"
              />
              <ControlLabel>Weapon Type</ControlLabel>
              <FormControl 
                inputRef={ref => { this.typeInput = ref; }}
                componentClass="select" 
                placeholder="type">
                <option value="mace">mace</option>
                <option value="axe">axe</option>
                <option value="sword">sword</option>
              </FormControl>
              </FormGroup>
                <FormGroup>
              <h5>weapon stats</h5>
              <ControlLabel>min damage</ControlLabel>
              <FormControl
                inputRef={ref => { this.minInput = ref; }}
                type="number"
              />
              <ControlLabel>max damage</ControlLabel>
              <FormControl
                inputRef={ref => { this.maxInput = ref; }}
                type="number"
              />
              <ControlLabel>strength mod</ControlLabel>
              <FormControl
                inputRef={ref => { this.strModInput = ref; }}
                type="number"
              />
              <ControlLabel>element type</ControlLabel>
              <FormControl 
                inputRef={ref => { this.elementTypeInput = ref; }}
                componentClass="select" 
                placeholder="element type">
                <option></option>
                <option value="physical">physical</option>
                <option value="fire">fire</option>
                <option value="cold">cold</option>
              </FormControl>
              <ControlLabel>element dmg mod (%)</ControlLabel>
              <FormControl
                inputRef={ref => { this.elementModInput = ref; }}
                type="number"
                min="0"
                max="100"
              />
            </FormGroup>
            <Button type='submit' onClick={ this.handleFormSubmit }>Submit</Button>
          </form>
        </div>
      );
    }
}