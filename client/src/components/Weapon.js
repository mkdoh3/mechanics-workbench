import React, { Component } from 'react';
import { Col, Grid, Label, Badge } from 'react-bootstrap';

import axe from '../assets/axe.png';
import mace from '../assets/mace.png';
import sword from '../assets/sword.png';

const images = {
  "axe": axe,
  "sword": sword,
  "mace": mace
}

export default class Weapon extends Component {
  state = {
    equipt: false
  }
  
  handleOnClick = () => {
    this.props.handleEquipItem()
    this.setState(() => ({equipt: true}))
  }

  render() {
    const { name, type, APS, STRMod, minDmg, maxDmg, elemental } = this.props
    return (    
      <div style={{textAlign: 'center', border: this.state.equipt && '5px solid yellow'}} onClick={this.handleOnClick}>
        <p><Label>{ name }</Label></p>
        <img style={{height: '50px', width: '50px', margin:'2rem auto'}} src={ images[type] } alt={ type } />
        <p style={{fontSize:'1.5rem'}}><Badge>Damage: { minDmg }-{ maxDmg } </Badge></p>
        <p style={{fontSize:'1.5rem'}}><Badge>Str: { `+${STRMod}` }</Badge></p>
        <p style={{fontSize:'1.5rem'}}><Badge>APS: { APS }</Badge></p>
        { elemental && <p style={{fontSize:'1.5rem'}}><Badge>{ elemental.type }: +%{parseFloat(elemental.dmgMod) * 100}</Badge></p>}
      </div>
    )
  }
}