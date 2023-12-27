import { color } from '@mui/system';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";
import { useNavigate } from 'react-router-dom';

const MainDashGoal = () => {

  const navigate = useNavigate();

  const handleInfoButtonClick = () => {
    // Redirect to the "tabs" component when the button is clicked
    navigate('./Tabs/Line'); // Replace '/tabs' with the actual path of your "tabs" component
  };

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
      toolbar: {
        show: false,
      },
    },
    colors: [
      function({ value, seriesIndex, w }) {
        if (value < 85) {
          return '#FF0000'
        } else {
          return '#008000'
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: { 
      title: {
      text: 'lines',
      style: {
        fontWeight: 'normal', // Set font weight to normal
      },
    },
      categories: ['Line 1', 'Line 2', 'Line 3' , 'Line 4' , 'Line 5'],
    },
    yaxis: {
      title: {
        text: '%', style: {
          fontWeight: 'normal', // Set font weight to normal
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 85,
          borderColor: '#FF4560',
          label: {
            borderColor: '#FF4560',
            style: {
              color: '#fff',
              background: '#FF4560',
             
            },
            text: 'Target (85%)',
          },
         
        },
        
      ],
    },
  };

  const chartSeries = [
    {
      name: 'Values',
      data: [45, 94, 55 , 110 , 155],
      
    },
  ];

  const chartWidth = '100%'; // Set the width based on your design
  const chartHeight = '95%'; // Set the height based on your design

  const cardStyle = {
    position: 'relative',
    height: '250px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex', // Add this line to use flexbox
    flexDirection: 'column', // Stack child elements vertically
    justifyContent: 'space-between', // Space elements evenly
    //overflow: 'hidden', // Add this line to clip overflow content
  };

  const infoButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    backgroundColor: '#000',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  const headingStyle = {
    color: 'black',
    //marginBottom: '10px', // Add margin to the bottom of the heading
    borderBottom: '1px solid #ccc', // Add a grey line below the heading
    paddingBottom: '5px', // Add padding to separate the line from the text
  };
 

  return (
    <div className="card-component" style={cardStyle}>
      <span style={infoButtonStyle} onClick={handleInfoButtonClick}>i</span>
      
      <h4 style={headingStyle}>OEE By Line</h4>
      <Chart
        width={chartWidth}
        height={chartHeight}
        options={chartOptions}
        series={chartSeries}
        type="bar"
      />
    </div>
  );
};

export default MainDashGoal;















