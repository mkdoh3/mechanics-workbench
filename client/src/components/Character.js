import React from 'react';
import CharacterLevel from './CharacterLevel';

const Character = ({ name, type, level, strength, vitality, primary, handleLevelUp }) => (
  <div>
    <h1>{ name }</h1>
    <h3>{`Xerox ${ type } princess`}</h3>
    <p>{`level: ${ level } strength: ${ strength } vitality: ${ vitality } primary stat: ${ primary }`}</p>
    <CharacterLevel handleLevelUp={ handleLevelUp }/>
  </div>
)



export default Character;