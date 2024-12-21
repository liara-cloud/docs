import React from "react";

const Table = ({ headers = [], data = [] }) => {
  return (
    <div
      className="table-container overflow-auto"
      style={{
        background: "#ffffff08",
        margin: "20px 0px",
      }}
    >
      <table style={{ width: "100%", textAlign: "center" }}>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={cellIndex === 1 ? { direction: "ltr" } : {}}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
