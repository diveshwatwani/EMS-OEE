import React from 'react';
import './HeatMap.css';

// Example 2D array representing quality levels
const qualityData = [
  [0, 1, 2],
  [2, 0, 1],
  [1, 2, 0],
  [0, 1, 1],
  [2, 0, 2],
];

const qualityLabels = ['Poor', 'Average', 'Good'];
const rowLabels = ['Shift 1', 'Shift 2', 'Shift 3']; // Add more labels as needed

const Heatmap = () => {
  return (
    <div className="heatmap-container">
      <table className="heatmap-table">
        <thead>
          <tr>
            <th></th> {/* Empty cell in the top-left corner */}
            {qualityLabels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {qualityData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowLabels[rowIndex]}</td>
              {rowData.map((value, colIndex) => (
                <td key={colIndex} className={`quality-cell quality-${value}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Heatmap;







