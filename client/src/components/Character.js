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
  padding: 2rem 3rem;
`;

const Image = styled.img`
  height: 175px;
  width: 225;
`;

const Title = styled.p`
  margin: 1rem 0 !important;
  font-size: 3rem !important;
`;

const SubTitle = styled.p`
  margin: 1rem 0 2rem 0 !important;
  font-size: 2.25rem !important;
`;

const Stat = styled.p`
  margin: 1rem 0 !important;
  font-size: 1.6rem !important;
`;

const Character = ({ name, type, level, strength, vitality, primary, handleLevelUp }) => (
  <FlexDiv>
    <Content>
      <Title>{ name }</Title>
      <SubTitle>{`Xerox ${ type } princess`}</SubTitle>
      <Image src={ xena } alt="warrior princess" />
    </Content>
    <Content>
      <Title>Character Stats</Title>
      <Stat>{ `level: ${ level }` }</Stat> 
      <Stat>{`vitality: ${ vitality }`}</Stat> 
      <Stat>{ `strength: ${ strength }` }</Stat>
      <Stat>{`primary stat: ${ primary }`}</Stat>
      <CharacterLevel handleLevelUp={ handleLevelUp }/>
    </Content>
  </FlexDiv>
);

export default Character;