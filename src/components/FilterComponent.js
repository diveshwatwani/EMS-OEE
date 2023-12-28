// src/FilterComponent.js
import React, { useState } from 'react';
import './filter.css';
import DatePicker from 'react-datepicker';
import { FaEdit } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';

const FilterComponent = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    // If 'custom' is selected, show the custom picker and hide other filters
    if (filter === 'custom') {
      setShowCustomPicker(true);
    } else {
      // If any other filter is selected, hide the custom picker
      setShowCustomPicker(false);
    }

    // Notify the parent component about the selected filter
    onFilterChange(filter);
  };

  const handleCustomDateChange = () => {
    // Handle custom date range selection
    // You can use startDate and endDate in your logic
    console.log('Selected date range:', startDate, endDate);
  };

  const handleToggleCustomPicker = () => {
    setShowCustomPicker(!showCustomPicker);
    // If custom picker is hidden, you may want to set a default filter
    // For example, setting it to '1Week'
    if (!showCustomPicker) {
      setSelectedFilter('1Week');
      onFilterChange('1Week');
    }
  };

  return (
    <>
      <div style={{}}>
        <button
          className={`btn ${selectedFilter === '1Day' ? 'active' : ''}`}
          onClick={() => handleFilterChange('1Day')}
        >
          1D
        </button>
        <button
          className={`btn ${selectedFilter === '2Days' ? 'active' : ''}`}
          onClick={() => handleFilterChange('2Days')}
        >
          2D
        </button>
        <button
          className={`btn ${selectedFilter === '1Week' ? 'active' : ''}`}
          onClick={() => handleFilterChange('1Week')}
        >
          1W
        </button>
        <button
          className={`btn ${selectedFilter === '3Week' ? 'active' : ''}`}
          onClick={() => handleFilterChange('3Week')}
        >
          3W
        </button>
        <button
          className={`btn ${selectedFilter === '1Month' ? 'active' : ''}`}
          onClick={() => handleFilterChange('1Month')}
        >
          1M
        </button>
        <button className={`btn ${selectedFilter === 'custom' ? 'active' : ''}`} onClick={handleToggleCustomPicker}>
          <FaEdit/>
        </button>

        {/* Custom Date Range */}
        <div style={{}}>
          {showCustomPicker && (
            <div style={{}}>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                customInput={<CustomInput />}
                disabledKeyboardNavigation
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                customInput={<CustomInput />}
                disabledKeyboardNavigation
              />
              <button style={{height:28, width:60, margin:6, borderRadius:10, border: "1px solid #FFCD29", backgroundColor:"#fbfbfb" }}  onClick={handleCustomDateChange}>Apply</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterComponent;