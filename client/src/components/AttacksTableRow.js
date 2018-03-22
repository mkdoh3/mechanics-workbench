import React from 'react';

const AttackTableRow = ({ data }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.min.toFixed(3)}</td>
      <td>{data.max.toFixed(3)}</td>
      <td>{data.DPS.toFixed(3)}</td>
    </tr>
  );
}

export default AttackTableRow;