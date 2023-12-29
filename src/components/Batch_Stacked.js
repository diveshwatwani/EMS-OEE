import React from "react";
import Chart from 'react-apexcharts';

function Batch_Stacked() {
  const chartOptions = {
    dataLabels: {
      enabled: false,
    },


 
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: true,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '12px',
        
      },
      onDatasetHover: {
          highlightDataSeries: true,
          },

          y: {
            formatter: function (value, opts) {
              let percent = opts.w.globals.seriesPercent[opts.seriesIndex][opts.dataPointIndex];
              let quantity = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
              return (
                percent.toFixed(0) + '%' +
                ' (' + quantity + ' '  + ')'
              );
            },
          },
        
        },
        
    chart: {
      type: 'bar',
      stacked: true ,
      stackType: '100%' ,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '100%',
      },
    },
    stroke: {},
    xaxis: {
      title: {
        text: "%",
        style: {
          fontWeight: 'normal', // Set font weight to normal
        },
      },
      categories: ['Batch 01' , 'Batch 02' , 'Batch 03' , 'Batch 04']
    },
    yaxis: {
      title: {
        text: "Batches",
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
          show: false ,
        }
      }
    }
  };

  const chartSeries = [
    {
      name: "Equipment Failure:",
      data: [345, 578, 898, 532, 465],
    },
    {
      name: "Material Shortages",
      data: [125, 178, 38, 87, 76],
    },
    {
      name: "Human Error",
      data: [55, 458, 218, 587, 29],
    },
    {
      name: "Emergency Shutdowns",
      data: [190, 321, 112, 537, 333],
    }
    
  ];

  const chartWidth = '100%'; // Set the width based on your design
  const chartHeight = '95%'; // Set the height based on your design

  const cardStyle = {
    height: '250px', // Set the desired height
    border: '1px solid #ddd', // Add any other styling properties as needed
    borderRadius: '10px',
    paddingBottom: '35px',
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
      <h5 style={headingStyle}>Breakdown Reasons For Unplanned Downtime</h5>
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

export default Batch_Stacked;