import React , {useState , useEffect }from "react";
import Chart from "react-apexcharts";

function Shift_Pie() {

  const [studentSubject , setStudentsubject] = useState([]);
  const[studentMarks , setStudentmarks]= useState([]);


  useEffect(()=> {
      const sSubject=[];
      const sMarks =[];

      const getStudentdata = async()=>{
          const reqData = await fetch("https://dummyjson.com/products");
          const resData = await reqData.json();
          console.log(resData.products);

          for(let i= 0 ; i<resData.products.length ; i++)
          {
              sSubject.push(resData.products[i].title);
              sMarks.push(parseInt(resData.products[i].discountPercentage));

          }
          setStudentsubject(sSubject);
          setStudentmarks(sMarks);

          

      }
      getStudentdata();

  } , []);
  const chartOptions = {
    labels: studentSubject ,
    dataLabels: {
      enabled: false,
    },

    noData :{text:"Empty Data"},
 
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

  const chartSeries = studentMarks;

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
    //marginBottom: '10px', // Add margin to the bottom of the heading
    borderBottom: '1px solid #ccc', // Add a grey line below the heading
    paddingBottom: '5px', // Add padding to separate the line from the text
  };

  return (


    <div className="shift-pie-container card-component" style={cardStyle}>
       <h5 style={headingStyle}>Unplanned DownTime</h5>
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

export default Shift_Pie;