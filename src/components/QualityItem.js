import React from "react";
import Chart from 'react-apexcharts';

function QualityItem() {
  const chartOptions = {

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

    chart: {
      type: 'bar',
      stacked: true ,
      stackType: '100%',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      }

    },
    responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    stroke: {},
    xaxis: {
      title: {
        text: "Items",
        style: {
          fontWeight: 'normal', // Set font weight to normal
        },
      },
      categories: ['Item A', 'Item B', 'Item C' , 'Item D']
    },
    yaxis: {
      title: {
        text: "Quality",
        style: {
          fontWeight: 'normal',
        }
      }
    },
    legend: {
      position: 'top'
    },
   
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    colors: ['#008000',  '#FF0000'], // Dark Green, Yellow, Dark Red
  };

  const chartSeries = [
    {
      name: "Good",
      data: [345, 578, 898 , 654],
    },
    {
      name: "Rejected",
      data: [125, 178, 38 , 345],
    },
    
    
  ];

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
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px',
  };

  return (
    <React.Fragment>
      <div className="card-component" style={cardStyle}>
      <h4 style={headingStyle}>Quality Analysis</h4>
        <Chart
          type="bar"
          width={chartWidth}
          height={chartHeight}
          series={chartSeries}
          options={chartOptions}
        />
      </div>
    </React.Fragment>
  );
}

export default QualityItem;