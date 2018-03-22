import React from 'react';
import styled from 'styled-components';
import CharacterLevel from './CharacterLevel';
import xena from '../assets/xena.png';

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  text-align: center;
  background-color: antiquewhite;
  border-radius: 3%;
  padding: 1rem;
`;

const Image = styled.img`
  height: 175px;
  width: 225;
`;

const Character = ({ name, type, level, strength, vitality, primary, handleLevelUp }) => (
  <FlexDiv>
    <Content>
      <h3>{ name }</h3>
      <h4>{`Xerox ${ type } princess`}</h4>
      <Image src={ xena } alt="warrior princess" />
    </Content>
    <Content>
      <h3>Character Stats</h3>
      <h4>{ `level: ${ level }` }</h4> 
      <h4>{`vitality: ${ vitality }`}</h4> 
      <h4>{ `strength: ${ strength }` }</h4>
      <h4>{`primary stat: ${ primary }`}</h4>
      <CharacterLevel handleLevelUp={ handleLevelUp }/>
    </Content>
  </FlexDiv>
);

export default Character;