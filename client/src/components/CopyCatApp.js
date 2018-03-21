import React, { Component } from 'react';

import AttacksTable from './attacks/AttacksTable';
import Character from './characters/Character';
import Header from './Header';
import Weapon from './weapons/Weapon'

import weaponsList from './weapons/weaponsList';
import attacksList from './attacks/attacksList';
import charactersList from './characters/charactersList';

export default class CopyCatApp extends Component {
 state = {
   availableWeapons: weaponsList,
   availableAttacks: attacksList,
   selectedCharacter: charactersList[0],
   equippedWeapon: undefined
 }

 componentDidMount() {
  this.fetchGameData()
    .then(res => console.log(res))
 }

 fetchGameData = async () => {
   const response = await fetch('/api/test')
   const body = await response.json()
   return body;
 }

 handleEquipItem = (index) => {
  this.setState(() => ({ equippedWeapon: this.state.availableWeapons[index] }));
 }
 
 handleLevelUp = (level) => {
  this.setState(() => ({
    selectedCharacter: {
      ...this.state.selectedCharacter,
      level,
      strength: level * 10,
      vitality: level * 5
    }
  }))
}
  
  render() {
    console.log('selected character', this.state.selectedCharacter)
    console.log('available weapons', this.state.availableWeapons);
    console.log('available attacks', this.state.availableAttacks);
    console.log('equiped item', this.state.equippedWeapon);
    const { name, type, level, strength, vitality, primary } = this.state.selectedCharacter;
    return (
      <div>
        <Header title='CopyCat Gaming Inc.' />
        <Character
          name={ name }
          type={ type }
          level={ level }
          strength={ strength }
          vitality={ vitality }
          primary={ primary }
          handleLevelUp={ this.handleLevelUp }
        />
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
          {this.state.availableWeapons.map((weapon, index) => {
            const  { name, type, minDmg, maxDmg, APS, elemental } = weapon;
              return (
                <Weapon
                  key={ index }
                  name={ name } 
                  type={ type }
                  minDmg={ minDmg }
                  maxDmg={ maxDmg }
                  APS={ APS }
                  elemental={ elemental ? elemental : null } 
                  handleEquipItem={ () => this.handleEquipItem(index) } />
              )}
            )}
          </div>
          { this.state.equippedWeapon ? 
            <AttacksTable 
              characterStats={ this.state.selectedCharacter }
              weaponStats={ this.state.equippedWeapon }
              attacks={ this.state.availableAttacks }
               /> :
            <p>Equip a weapon to get started!</p> }
      </div>    
    )
  }
}



// componentWillMount() {
//   let APS;
//   switch(this.props.type) {
//     case 'mace' : 
//     APS = 1;
//     break;
//     case 'axe' : 
//     APS = 1.2;
//     break;
//     case 'sword' : 
//     APS = 1.4
//     break;
//     default: 
//     APS = 1;
//   }
//   this.setState(() => ({ APS }))
// }

// handleAddOne(attribute) {
//   this.setState(prevState => {
//     return { [attribute] : prevState[attribute] +1 }
//   });
// }

// handleSubtractOne(attribute) {
//   this.setState(prevState => {
//     return { [attribute] : prevState[attribute] -1 }
//   });
// }

// handleReset(attribute){
//   this.setState(() => {
//       return { [attribute] : this.props[attribute] }
//   });
// }