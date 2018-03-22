import React, { Component } from 'react';
import { Grid, PageHeader, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

import AddWeapon from './AddWeapon';
import AttacksTable from './AttacksTable';
import Character from './Character';
import Weapon from './Weapon';

const Heading = styled.p`
  text-align: center;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

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
      availableWeapons: body[0].weapons
    }))
  };

  handleEquipItem = (index) => {
    this.setState(() => ({ equippedWeapon: this.state.availableWeapons[index] }));
  };
 
  handleLevelUp = (level) => {
    this.setState(() => ({
      selectedCharacter: {
        ...this.state.selectedCharacter,
        level,
        strength: level * 10,
        vitality: level * 5
      }
    }));
  };
  
  render() {
    if(!this.state.selectedCharacter) {
      return (
        <h1>fetching game data... </h1>
      )
    } else {
      return (
        <Grid>
          <PageHeader>
            CopyCat Gaming Inc. <small> Never first, but never the worst..</small>
          </PageHeader>
          <Jumbotron>
          <Character
            { ...this.state.selectedCharacter }
            handleLevelUp={ this.handleLevelUp }
          />
          </Jumbotron>
          <Jumbotron >
          <Heading> Equipped a weapon to get started!</Heading>
          <FlexDiv>
            {this.state.availableWeapons.map((weapon, index) => {
              return (
                <Weapon
                  { ...weapon }
                  key={ index }
                  isEquipped={this.state.equippedWeapon === this.state.availableWeapons[index] ? true : false} 
                  handleEquipItem={ () => this.handleEquipItem(index) } 
                />
              )
            })}
          </FlexDiv>
          </Jumbotron>
          {this.state.equippedWeapon && 
          <AttacksTable 
            characterStats={ this.state.selectedCharacter }
             weaponStats={ this.state.equippedWeapon }
            attacks={ this.state.availableAttacks }
          />}
            <AddWeapon postNewWeapon={ this.postNewWeapon }/>
        </Grid>    
      )
    }
  }
}