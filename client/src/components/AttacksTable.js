import React from 'react';
import AttacksTableRow from './AttacksTableRow';
import { Table } from 'react-bootstrap';
import calculateAttackDamage from '../utils/calculateAttackDamage';

const AttackTable = ({characterStats, weaponStats, attacks}) => {

  const rowData = calculateAttackDamage(characterStats, weaponStats, attacks)
  
  const rows = rowData.map((data, index) => 
    <AttacksTableRow 
      key={ index } 
      data={ data } 
    />)
  
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <td></td>
          <td>Minumum</td>
          <td>Maximum</td>
          <td>DPS</td>
        </tr>
      </thead>
      <tbody>
        { rows }
      </tbody>
    </Table>
  )
}

export default AttackTable;
