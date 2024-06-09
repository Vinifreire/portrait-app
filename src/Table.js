import React from 'react';
import './styles/Table.css';


function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Maximum</th>
          <th>Minimum</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.item}</td>
            <td>{row.maximum}</td>
            <td>{row.minimum}</td>
            <td>{row.average}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;