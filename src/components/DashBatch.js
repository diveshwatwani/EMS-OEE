import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

const DashBatch = () => {
  const navigate = useNavigate();

  const handleInfoButtonClick = () => {
    // Redirect to the "tabs" component when the button is clicked
    navigate('./Tabs/Batch'); // Replace '/tabs' with the actual path of your "tabs" component
  };

  const chartOptions = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
      zoom: {
        enabled: true,
      },
      tooltip: {
        theme: {
          tooltip: {
            // Set the color of the tooltip text when hovered
            style: {
              color: '#000', // Change this to your desired color (black)
            },
          },
        },
      },
    },
    grid: {
      padding: {
        left: 30, // or whatever value that works
        right: 30, // or whatever value that works
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        barWidth: '200',
        dataLabels: {
          show: false, // Set dataLabels to false to disable them
          style: {
            colors: ['#333'],
           
          },
        },
      }, // Close the dataLabels property here
    },
    colors: [
      function ({ value, seriesIndex, w }) {
        return value < 85 ? '#FF0000' : '#008000';
      },
    ],
    xaxis: {
      categories: [
        'Batch 001',
        'Batch 002',
        'Batch 003',
        'Batch 004',
        'Batch 005',
        'Batch 006',
        'Batch 007',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 001',
        'Batch 002',
        'Batch 003',
        'Batch 004',
        'Batch 005',
        'Batch 006',
        'Batch 007',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 001',
        'Batch 002',
        'Batch 003',
        'Batch 004',
        'Batch 005',
        'Batch 006',
        'Batch 007',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 001',
        'Batch 002',
        'Batch 003',
        'Batch 004',
        'Batch 005',
        'Batch 006',
        'Batch 007',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 001',
        'Batch 002',
        'Batch 003',
        'Batch 004',
        'Batch 005',
        'Batch 006',
        'Batch 007',
        'Batch 008',
        'Batch 008',
        'Batch 008',
        'Batch 008',
      ],
      tickPlacement: 'on',
    },
    yaxis: {
      title: {
        text: 'Values',
        style: {
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
            text: 'Target ( 85 %)',
          },
        },
      ],
    },
  };

  const chartSeries = [
    {
      name: 'Values',
      data: [
        87.09,
        80.62,
        86.52,
        85.37,
        85.93,
        75.17,
        83.76,
        73.34,
        73.34,
        73.34,
        73.34,
        87.09,
        80.62,
        86.52,
        85.37,
        85.93,
        75.17,
        83.76,
        73.34,
        73.34,
        73.34,
        73.34,
        87.09,
        80.62,
        86.52,
        85.37,
        85.93,
        75.17,
        83.76,
        73.34,
        73.34,
        73.34,
        73.34,
        87.09,
        80.62,
        86.52,
        85.37,
        85.93,
        75.17,
        83.76,
        73.34,
        73.34,
        73.34,
        73.34,
      ],
    },
  ];

  const chartWidth = '100%'; // Set the width based on your design
  const chartHeight = '95%'; // Set the height based on your design

  const cardStyle = {
    position: 'relative', // Add relative positioning to the card container
    height: '250px', // Set the desired height
    border: '1px solid #ddd', // Add any other styling properties as needed
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    //overflowX: 'auto', // Add overflow-x property for horizontal scrollbar
    display: 'flex', // Add this line to use flexbox
    flexDirection: 'column', // Stack child elements vertically
    justifyContent: 'space-between', // Space elements evenly
  };

  const infoButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    backgroundColor: '#000', // Black background color
    borderRadius: '50%', // Make it round
    width: '20px', // Set the width to create a perfect circle
    height: '20px', // Set the height to create a perfect circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // White text color
  };

  const headingStyle = {
    color: 'black',
    //marginBottom: '10px', // Add margin to the bottom of the heading
    borderBottom: '1px solid #ccc', // Add a grey line below the heading
    paddingBottom: '5px', // Add padding to separate the line from the text
  };

  return (
    <div className="card-component" style={cardStyle}>
      <span style={infoButtonStyle} onClick={handleInfoButtonClick}>
        i
      </span>
      <h4 style={headingStyle}>OEE By Batch</h4>
      <Chart
        width={chartWidth}
        height={chartHeight}
        options={chartOptions}
        series={chartSeries}
        type="bar"
        style={{ overflowX: 'auto' }} // Set overflowX for horizontal scrollbar
      />
    </div>
  );
};

export default DashBatch;

 
 
 
 

 
 
 
 





