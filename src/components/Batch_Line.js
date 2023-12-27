import React,{useState} from 'react';
import Chart from 'react-apexcharts';
//install : npm install react-apexcharts apexcharts//
function Batch_Line()
{
    const[product, setProduct]= useState(
        [
            {
                name:"Batch 001",
                data:[234,45,67,987,345,456,87,321,45,569,76,890]
            },
            {
              name:"Batch 002",
              data:[562,145,267,97,45,156,87,321,845,969,706,20]
            },
            {
              name:"Batch 003",
              data:[1012,345,117,697,845,56,287,1321,1845,469,306,120]
            },
            {
                name:"Batch 004",
                data:[101,247,137,797,843,56,1187,1821,845,1469,806,120]
              }
        ]
    );

    const[option, setOption]= useState(
        {

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
              show: false //Disable toolbar
            } ,
            zoom: {
              enabled: false,
            }
          },
          
            xaxis:{
                title:{text:"Months" , style: {
                  fontWeight: 'normal', // Set font weight to normal
                },},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Production Speed" , style: {
                  fontWeight: 'normal', // Set font weight to normal
                },
              }                 
            },
            legend: {
              position: 'top'
            },
            stroke: {
              width: 1 ,
            }
          

        }
    );

    const chartWidth = '100%'; // Set the width based on your design
    const chartHeight = '95%'; 

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

    return(
    <React.Fragment>
         <div className="card-component" style={cardStyle}>
         <h4 style={headingStyle}>Production Speed</h4>         
          <Chart 
          type='line'
          width={chartWidth}
          height={chartHeight}
          series={product}
          options={option }
          />
         

        </div>
    </React.Fragment>);
}

export default Batch_Line;