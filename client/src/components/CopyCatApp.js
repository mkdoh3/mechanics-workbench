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
      }
    )
  }

  fetchGameData = async () => {
    const res = await fetch('/api/game-data')
    const body = await res.json()
    return body;
  }

  postNewWeapon = async (weapon) => {
    const res = await fetch('./api/add-weapon', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(weapon)
    })
    const body = await res.json();
    this.setState(() => ({
      availableWeapons: body.weapons
    }))
  };

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
      return (
        <div>
          <Header title='CopyCat Gaming Inc.' />
          <Character
            { ...this.state.selectedCharacter }
            handleLevelUp={ this.handleLevelUp }
          />
          <div>
            {this.state.availableWeapons.map((weapon, index) => {
              return (
                <Weapon
                  { ...weapon }
                  key={ index } 
                  handleEquipItem={ () => this.handleEquipItem(index) } 
                />
              )
            })}
            <AddWeapon postNewWeapon={ this.postNewWeapon }/>
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