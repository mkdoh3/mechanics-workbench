import React from 'react';

const Weapon = ({ name, type, APS, strMod, minDmg, maxDmg, elemental, handleEquipItem }) => (
      <div style={{backgroundColor: 'grey', width: '25%'}} onClick={() => handleEquipItem()}>
        <p>Name: { name }</p>
        <p>Type: { type }</p>
        <p>APS: { APS }</p>
        { elemental && <p>{ elemental.type }: +%{parseFloat(elemental.dmgMod) * 100}</p>}
      </div>
    )

export default Weapon;