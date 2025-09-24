import React from "react";

const Table = ({ headers = [], data = [] }) => {
  return (
    <div className="custom-table-container overflow-auto">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="custom-table-header">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`custom-table-row ${
                rowIndex < data.length - 1 ? "custom-table-row-border" : ""
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`custom-table-cell ${
                    cellIndex === 1 ? "custom-table-cell-ltr" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;