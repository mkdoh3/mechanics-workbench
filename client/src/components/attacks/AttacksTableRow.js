import React from 'react';

const AttackTableRow = ({ data }) => {
  console.log('row data', data)
  return (
  <tr>
    <td>{data.name}</td>
    <td>{data.min}</td>
    <td>{data.max}</td>
    <td>{data.DPS}</td>
  </tr>
)}

export default AttackTableRow;