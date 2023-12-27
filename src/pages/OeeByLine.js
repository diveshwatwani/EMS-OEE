import React from 'react';
import CardComponent from '../components/CardComponent';
import Title1 from '../components/Title1';


import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import './OeeByItem.css';


import HeatmapComponent from '../components/HeatMap';
import Line_Pie from '../components/Line_Pie';
import Line_Stacked from '../components/Line_Stacked';

import Line_L from '../components/Line_L';
import QualityLine from '../components/QualityLine';






const OeeByLine = () => {
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

     

      
      <div>
        <Title1 title="Availability Analysis" />

        <div className="oee-by-item">
          {/* Unplanned Downtime Card */}
          <Line_Pie />
          {/* Breakdown for Unplanned Downtime Card */}
          <Line_Stacked />
          {/* Production Speed Card */}
          <div className="performance-analysis">
            <p className="p">Performance Analysis</p>
          </div>
          {/* Add other components or content specific to this card */}
          <Line_L />
          <div className="quality-analysis">
            <p className="p">Quality Analysis</p>
          </div>
          <QualityLine/>
        </div>
      </div>
      
    </LocalizationProvider>
  );
};

export default OeeByLine;