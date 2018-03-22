import React, {Component} from 'react';
import {ControlLabel, FormControl, Button, Jumbotron} from 'react-bootstrap';
import styled from 'styled-components';

const FlexDiv = styled.div `
  display: flex;
  justify-content: center;
`;

const Div = styled.div `
  padding: 1rem 4rem !important;
`;

const Title = styled.p `
  text-align: center;
  font-size: 2.5rem !important;
`;

const SubTitle = styled.p`
  text-align: center;
  margin: 1rem 0 !important;
  font-size: 1.25rem !important;
`;

export default class AddWeapon extends Component {

  resetForm = () => {
    this.nameInput.value = "";
    this.typeInput.value = "";
    this.minInput.value = "";
    this.maxInput.value = "";
    this.strModInput.value = "";
    this.elementTypeInput.value = "";
    this.elementModInput.value = "";
  }

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

    if (elementType) {
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
    this
      .props
      .postNewWeapon(newWeapon)
    this.resetForm();
  };
  render() {
    //this should be a controlled form with some validation.. proof of concept for now
    return (
      <Jumbotron>
        <Title>Forge a new weapon for testing</Title>
        <SubTitle>*Beta Feature. Form uncontrolled - mind your inputs</SubTitle>
        <FlexDiv>
          <Div>
            <ControlLabel>weapon name</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.nameInput = ref;
            }}
              type="text"
              placeholder="go wild.."/>
            <ControlLabel>Weapon Type</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.typeInput = ref;
            }}
              componentClass="select"
              placeholder="type">
              <option value="mace">mace</option>
              <option value="axe">axe</option>
              <option value="sword">sword</option>
            </FormControl>
            <ControlLabel>min damage</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.minInput = ref;
            }}
              type="number"/>
            <ControlLabel>max damage</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.maxInput = ref;
            }}
              type="number"/>
          </Div>
          <Div>
            <ControlLabel>strength mod</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.strModInput = ref;
            }}
              type="number"/>
            <ControlLabel>element type</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.elementTypeInput = ref;
            }}
              componentClass="select"
              placeholder="element type">
              <option></option>
              <option value="physical">physical</option>
              <option value="fire">fire</option>
              <option value="cold">cold</option>
            </FormControl>
            <ControlLabel>element dmg mod (%)</ControlLabel>
            <FormControl
              inputRef={ref => {
              this.elementModInput = ref;
            }}
              type="number"
              min="0"
              max="100"/>
            <Button
              style={{
              width: '100%',
              marginTop: '2.55rem'
            }}
              type='submit'
              onClick={this.handleFormSubmit}>Submit</Button>
          </Div>
        </FlexDiv>
      </Jumbotron>
    );
  };
}