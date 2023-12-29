// MainDashboard.js
import React, { useState } from 'react';

import '../components/Card.css';
import CardComponent from '../components/CardComponent';
import MainDashLineBarChart from '../components/MainDashLineBarChart';
import MainDashGoal from '../components/MainDashGoal';
import DashItem from '../components/DashItem';
import DashBatch from '../components/DashBatch';
import FilterComponent from '../components/FilterComponent';

const MainDashboard = () => {

  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    // Do something with the selected filter, e.g., update the data
    setSelectedFilter(filter);
  };

  return (
    <div className='big-container' style={{ paddingTop: '10px' }}>

        {/* Location Dropdown */}
      <div style={{ paddingLeft:"10px", paddingRight:"30px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
        <label htmlFor='locationDropdown'>Choose Location</label>
        <select
          id='locationDropdown'
          style={{
            marginLeft: '10px',
            padding: '5px',
            //fontSize: '16px',
          }}
        >   
          <option value='' disabled selected>
            Select Location
          </option>
          <option value='location1'>Location 1</option>
          <option value='location2'>Location 2</option>
          {/* Add more options as needed */}
        </select>
        </div>
        <FilterComponent onFilterChange={handleFilterChange}/>
      </div>


      <div className='main-cards'>
        {/* ... Your existing cards ... */}
          {/* Overall OEE Card */}
      <div className="card1">
        <div className="header">
          <h2>Overall OEE </h2>  
           <h2> 84.15% </h2>
        </div>
        <div className="content">
          <div className="metric">
            <p>Availability</p>
            <p>91.93%</p>
          </div>
          <div className="metric">
            <p>Performance</p>
            <p>96.36%</p>
          </div>
          <div className="metric">
            <p>Quality</p>
            <p>95%</p>
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="card1">
        <div className="header_a">
          <h2>Availability </h2>
          <h2>  91.93%</h2>
        </div>
        <div className="content">
          <div className="metric">
            <p>Planned Runtime</p>
            <p>3840 mins</p>
          </div>

          <div className="metric">
            <p>Actual Runtime</p>
            <p>3530 mins</p>
          </div>

          <div className="metric">
            <p>Unplanned-Downtime</p>
            <p>310 mins</p>
          </div>
        </div>
      </div>

       {/* Performance Card */}
       <div className="card1">
        <div className="header_p">
          <h2>Performance </h2> 
            <h2>96.36%</h2>
        </div>
        <div className="content">
          <div className="metric">
            <p>Planned Quantity</p>
            <p>81,000</p>
          </div>

          <div className="metric">
            <p>Actual Quantity</p>
            <p>78,050</p>
          </div>

         
        </div>
      </div>

       {/* Quality Card */}
       <div className="card1">
        <div className="header_q">
          <h2>Quality </h2>
           <h2> 95%</h2>
        </div>
        <div className="content">
          <div className="metric">
            <p>Actual Quantity</p>
            <p>78,050</p>
          </div>

          <div className="metric">
            <p>Rejected Quantity</p>
            <p>3,900</p>
          </div>

          
        </div>
      </div>
      
      


      </div>

    

      {/* GRAPH PART STARTS HERE  */}
      <div className='oee-by-item'>
 
        <MainDashLineBarChart />
        
       
        <MainDashGoal />
        
        <DashItem />
        <DashBatch />
      </div>
    </div>
  );
};

export default MainDashboard;


