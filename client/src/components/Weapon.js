import React from 'react';
import styled from 'styled-components';
import { Label, Badge, Button, Glyphicon } from 'react-bootstrap';

import axe from '../assets/axe.png';
import mace from '../assets/mace.png';
import sword from '../assets/sword.png';

const images = {
  "axe": axe,
  "sword": sword,
  "mace": mace
};

const Div = styled.div`
  text-align: center;
`;

const Stat = styled.p`
  margin: .5rem !important;
  font-size: 1.5rem !important;
`;

const Name = styled.p`
  margin: 1rem 0 !important;
  font-size: 1.75rem !important;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: 1.5rem 0;
  box-shadow: ${ ({ isEquipped }) => isEquipped && '0px 0px 50px 5px #ffe20c' }
`;
 
const Weapon = (props) => {
    const { name, type, APS, STRMod, minDmg, maxDmg, elemental, handleEquipItem, handleDeleteItem } = props
    return (    
      <Div>
        <div onClick={ handleEquipItem }>
          <Name>
            <Label bsStyle="primary">{ name }</Label>
          </Name>
          <Image isEquipped={props.isEquipped } src={ images[type] } alt={ type } />
          <div>
            <Stat>
              <Badge>Damage: { minDmg }-{ maxDmg } </Badge>
            </Stat>
            <Stat>
              <Badge>Str: { `+${STRMod}` }</Badge>
            </Stat>
            <Stat>
              <Badge>APS: { APS }</Badge>
            </Stat>
            { elemental && <Stat><Badge>{ elemental.type }: +%{parseFloat(elemental.dmgMod) * 100}</Badge></Stat> }
          </div>
        </div>
        <Button style={{marginTop: '1rem'}} bsSize="small" bsStyle="danger" onClick={ handleDeleteItem }>
          scrape <Glyphicon glyph="trash" />
        </Button> 
      </Div>
    )
  }

export default Weapon;