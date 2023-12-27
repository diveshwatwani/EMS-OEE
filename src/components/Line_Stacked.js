import React from "react";
import Chart from 'react-apexcharts';

function Line_Stacked() {
  const chartOptions = {
  
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
    plotOptions: {
      bar: {
        horizontal: true ,
        columnWidth:'100%',
      },
    },
    stroke:{
        //width:10,
    },
    xaxis: {
      title: {
        text: "%",
        style: {
          fontWeight: 'normal', // Set font weight to normal
        },
      },
      categories: ['Line 1' , 'Line 2' , 'Line 3' , 'Line 4']
    },
    yaxis: {
      title: {
        text: "Lines",
        style: {
          fontWeight: 'normal',
        }
      }
    },
    legend:{
        position:'top'
    } ,
    dataLabels:{
        enabled:true,
    },
    grid:{
        show:true,
        xaxis:{
            lines:{
                show:false
            }
        },
        yaxis:{
            lines:{
                show:false
            }
        }
    }
  };

  const chartSeries = [
    {
      name: "Equipment Failure:",
      data: [34, 57, 89, 53],
      //color:'#f90000'
    },
    {
      name: "Material Shortages",
      data: [12, 17, 3, 8],
      //color:'#000000'
    },
    {
      name: "Human Error",
      data: [5, 45, 21, 57],
      //color:'#000000'
    },
    {
      name: "Emergency Shutdowns",
      data: [19, 31, 12, 57],
      //color:'#000000'
    }
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
      <h4 style={headingStyle}>Breakdown Reasons For Unplanned Downtime</h4>
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

export default Line_Stacked;
