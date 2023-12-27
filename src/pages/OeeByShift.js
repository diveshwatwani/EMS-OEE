import React from 'react';
import CardComponent from '../components/CardComponent';
import Title1 from '../components/Title1';



import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import './OeeByItem.css';
import LineChart from '../components/LineChart';

import HeatmapComponent from '../components/HeatMap';
import Shift_Pie from '../components/Shift_Pie';
import Shift_Stacked from '../components/Shift_Stacked';
import Shift_Line from '../components/Shift_Line';

import QualityShift from '../components/QualityShift';






const OeeByShift = () => {
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

     

      
      <div>
        <Title1 title="Availability Analysis" />

        <div className="oee-by-item">
          {/* Unplanned Downtime Card */}
          <Shift_Pie />
          {/* Breakdown for Unplanned Downtime Card */}
         <Shift_Stacked />
          {/* Production Speed Card */}
          <div className="performance-analysis">
            <p className="p">Performance Analysis</p>
          </div>
          {/* Add other components or content specific to this card */}
          <Shift_Line />
          {/* Quality Insights Card */}
          <div className="quality-analysis">
            <p className="p">Quality Analysis</p>
          </div>
          <QualityShift />
        </div>
      </div>
      
    </LocalizationProvider>
  );
};

export default OeeByShift;






