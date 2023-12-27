import React from "react";
import Chart from "react-apexcharts";

function PieChart() {
  const chartOptions = {
    labels: ['Item A', 'Item B', 'Item C', 'Item D'],
    dataLabels: {
      enabled: false,
    },
 
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      // custom: undefined,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
      onDatasetHover: {
          highlightDataSeries: true,
          },
        },
  };

  const chartSeries = [23, 43, 50, 54 ];

  const chartWidth = '100%'; // Set the width based on your design
  const chartHeight = '95%'; // Set the height based on your design

  const cardStyle = {
    height: '250px', // Set the desired height
    border: '1px solid #ddd', // Add any other styling properties as needed
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex', // Add this line to use flexbox
    flexDirection: 'column', // Stack child elements vertically
    justifyContent: 'space-between', // Space elements evenly
  };

  const headingStyle = {
    color: 'black',
    //marginBottom: '10px', // Add margin to the bottom of the heading
    borderBottom: '1px solid #ccc', // Add a grey line below the heading
    paddingBottom: '5px', // Add padding to separate the line from the text

  };

  return (


    
    <div className="shift-pie-container card-component" style={cardStyle}>
    <h4 style={headingStyle}>Unplanned DownTime</h4>
        <Chart
          type="pie"
          width={chartWidth}
          height={chartHeight}
          series={chartSeries}
          options={chartOptions}
        />
      </div>
    
  );
}

export default PieChart;



