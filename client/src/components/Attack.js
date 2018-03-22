import React from 'react';
import styled from 'styled-components';
import { Label } from 'react-bootstrap';

const Div = styled.div`
  text-align: center;
`;

const Stat = styled.p`
  margin: .5rem !important;
  font-size: 2rem !important;
`;

const Name = styled.p`
  margin: 1rem 0 !important;
  font-size: 3rem !important;
`;

 
const Attack = (props) => {
    const { name, attackType, APSMod, dmgMod } = props
    return (    
      <Div>
        <div>
          <Name>
            <Label bsStyle="primary">{ name }</Label>
          </Name>
          <div>
            <Stat>
              APS: %{ APSMod * 100}
            </Stat>
            <Stat>
              Type: { attackType }
            </Stat>
            <Stat>
              Damage: %{ dmgMod * 100 }
            </Stat>
          </div>
        </div>
      </Div>
    );
  }

export default Attack;