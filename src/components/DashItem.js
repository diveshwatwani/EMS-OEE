import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";
import Tabs from './Tabs';

 
 
const DashItem = () => {
  const navigate = useNavigate();
 
  const handleInfoButtonClick = () => {
    // Redirect to the "tabs" component when the button is clicked
    navigate('./Tabs/Item'); // Replace '/tabs' with the actual path of your "tabs" component
  };



 

 
  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
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
    xaxis: { 
      title: {
      text: '%',
      style: {
        fontWeight: 'normal', // Set font weight to normal
      },
    },
      categories: ['Mandarin Orange', 'Chicken-Charred', 'Cherries' , 'Char Pork Rib BBQ' , 'Candy' ,
   
                    'Buns-chicken' , 'Beef Primal' , '24oz Hearty White'],
    },
    yaxis: {
      title: {
        text: 'Items',style: {
          fontWeight: 'normal', // Set font weight to normal
        },
      },
    },
    annotations: {
      xaxis: [
        {
          x: 85,
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
      // name: '%',
      data: [87.09, 80.62, 86.52 , 85.37 , 85.93 , 75.17 , 83.76 , 73.34 ],
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
      <span style={infoButtonStyle} onClick={handleInfoButtonClick}>i</span>
      <h4 style={headingStyle}>OEE By Item</h4>
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
 
export default DashItem;
 
 
 






