import React from 'react';
import AttacksTableRow from './AttacksTableRow';
import calculateAttackDamage from '../../utils/calculateAttackDamage';

const AttackTable = ({characterStats, weaponStats, attacks}) => {

  const rowData = calculateAttackDamage(characterStats, weaponStats, attacks)
  
  const rows = rowData.map((data, index) => 
    <AttacksTableRow 
      key={ index } 
      data={ data } 
    />)
  
  return (
    <table>
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
    </table>
  )
}

export default AttackTable;
