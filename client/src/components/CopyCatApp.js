import React, { Component } from 'react';
import { Grid, PageHeader, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

import AddWeapon from './AddWeapon';
import Attack from './Attack';
import AttacksTable from './AttacksTable';
import Character from './Character';
import Weapon from './Weapon';

const Title = styled.p`
  text-align: center;
  font-size: 2.5rem !important;
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
        console.log('game data', res)
        this.setState(() => ({
          selectedCharacter: res.characters[0],
          availableAttacks: res.attacks,
          availableWeapons: res.weapons,
        }));
      }
    );
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

  deleteItem = async (index) => {
    const deleteIndex = { index }
    const res = await fetch('./api/delete-weapon', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteIndex)
    })
    const body = await res.json();
    this.setState(() => ({
      availableWeapons: body[0].weapons,
      equippedWeapon: null
    }));
  }

  handleEquipItem = (index) => {
    this.setState(() => ({ equippedWeapon: this.state.availableWeapons[index] }));
  };
 
  handleLevelUp = (level) => {
    this.setState((prevState) => ({
      selectedCharacter: {
        ...prevState.selectedCharacter,
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
          { this.state.equippedWeapon && 
          <Jumbotron>
            <FlexDiv>
              {this.state.availableAttacks.map((attack, index) => 
                <Attack
                  { ...attack }
                  key={ attack.name }
                />)
              }
            </FlexDiv>
          </Jumbotron>}
          <Jumbotron >
            <Title> Equipped a weapon to get started!</Title>
            {this.state.equippedWeapon && 
            <AttacksTable 
              characterStats={ this.state.selectedCharacter }
              weaponStats={ this.state.equippedWeapon }
              attacks={ this.state.availableAttacks }
            />}
            <FlexDiv>
              {this.state.availableWeapons.map((weapon, index) => 
                <Weapon
                  { ...weapon }
                  key={ index }
                  isEquipped={this.state.equippedWeapon === this.state.availableWeapons[index] ? true : false} 
                  handleEquipItem={ () => this.handleEquipItem(index) }
                  handleDeleteItem={ () => this.deleteItem(index) } 
                />)
              }
            </FlexDiv>
          </Jumbotron>
          <AddWeapon postNewWeapon={ this.postNewWeapon }/>
          
        </Grid>    
      );
    }
  };
}