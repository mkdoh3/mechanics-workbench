import React from 'react';
import CharacterLevel from './CharacterLevel';
import { Grid, Col, Row } from 'react-bootstrap';
import xena from '../assets/xena.png'

const Character = ({ name, type, level, strength, vitality, primary, handleLevelUp }) => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <div style={{textAlign: 'center'}}>
      <h2>{ name }</h2>
      <h4>{`Xerox ${ type } princess`}</h4>
      <img style={{height: '200px', width: '250px'}}src={ xena } alt="warrior princess" />
    </div>
    <div>
      <h4>Character Stats:</h4>
      <p>{`primary stat: ${ primary }`}</p>
      <p>{ `level: ${ level }` }</p> 
      <p>{`vitality: ${ vitality }`}</p> 
      <p>{ `strength: ${ strength }` }</p>
      <CharacterLevel handleLevelUp={ handleLevelUp }/>
    </div>
  </div>
)



export default Character;