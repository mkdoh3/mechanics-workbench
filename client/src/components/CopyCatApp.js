import React, { Component } from 'react';

import AddWeapon from './AddWeapon';
import AttacksTable from './AttacksTable';
import Character from './Character';
import Header from './Header';
import Weapon from './Weapon';

export default class CopyCatApp extends Component {
 state = {
   availableWeapons: null,
   availableAttacks: null,
   selectedCharacter: null,
   equippedWeapon: null
 }

 componentDidMount() {
  this.fetchGameData()
    .then(res => {
      const gameData = res[0];
      this.setState(() => ({
        selectedCharacter: gameData.characters[0],
        availableAttacks: gameData.attacks,
        availableWeapons: gameData.weapons,
      }))
    })
 }

 fetchGameData = async () => {
   const response = await fetch('/api/game-data')
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
    if(!this.state.selectedCharacter) {
      return (
        <h1>fetching game data... </h1>
      )
    } else {
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
                  handleEquipItem={ () => this.handleEquipItem(index) } 
                />
              )
            })}
            <AddWeapon />
          </div>
          {this.state.equippedWeapon ? 
            <AttacksTable 
              characterStats={ this.state.selectedCharacter }
              weaponStats={ this.state.equippedWeapon }
              attacks={ this.state.availableAttacks }
            /> :
            <p>Equip a weapon to get started!</p> 
          }
        </div>    
      )
    }
  }
}