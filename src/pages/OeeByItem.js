import React from 'react';
import CardComponent from '../components/CardComponent';
import Title1 from '../components/Title1';
import PieChart from '../components/PieChart';
import StackedBarchart from '../components/StackedBarchart';

import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import './OeeByItem.css';
import LineChart from '../components/LineChart';

import HeatmapComponent from '../components/HeatMap';
import QualityItem from '../components/QualityItem';






const OeeByItem = () => {
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

     

      
      <div>
        <Title1 title="Availability Analysis" />

        <div className="oee-by-item">
          {/* Unplanned Downtime Card */}
          <PieChart />
          {/* Breakdown for Unplanned Downtime Card */}
          <StackedBarchart />
          {/* Production Speed Card */}
          <div className="performance-analysis">
            <p className="p">Performance Analysis</p>
          </div>
          {/* Add other components or content specific to this card */}
          <LineChart />
          {/* Quality Insights Card */}
          <div className="quality-analysis">
            <p className="p">Quality Analysis</p>
          </div>
          <QualityItem/>
        </div>
      </div>
      
    </LocalizationProvider>
  );
};

export default OeeByItem;





