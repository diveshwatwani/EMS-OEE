// src/FilterComponent.js
import React, { useState } from 'react';
import './filter.css';
import DatePicker from 'react-datepicker';
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
    onFilterChange(filter);

    // If 'custom' is selected, toggle the visibility of the date picker
    if (filter === 'custom') {
      setShowCustomPicker(!showCustomPicker);
    } else {
      // If any other filter is selected, hide the date picker
      setShowCustomPicker(false);
    }
  };

  const handleCustomDateChange = () => {
    // Handle custom date range selection
    // You can use startDate and endDate in your logic
    console.log('Selected date range:', startDate, endDate);
  };

  return (
    <>
      {/* <div style={{ position: 'fixed', top: '10px', right: '50px', display: 'flex' }}> */}
      <div style={{ }}>
        {!showCustomPicker && (
          <>
            <button className="btn" onClick={() => handleFilterChange('1Day')}>
              1D
            </button>
            <button className="btn" onClick={() => handleFilterChange('2Days')}>
              2D
            </button>
            <button className="btn" onClick={() => handleFilterChange('1Week')}>
              1W
            </button>
            <button className="btn" onClick={() => handleFilterChange('3Week')}>
              3W
            </button>
            <button className="btn" onClick={() => handleFilterChange('1Month')}>
              1M
            </button>
          </>
        )}

        {/* Custom Date Range */}
        <div style={{}}>
          <button className="btn" onClick={() => handleFilterChange('custom')}>
            C
          </button>
          {showCustomPicker && (
            <div style={{ }}>
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
              <button onClick={handleCustomDateChange}>Apply</button>
            </div>
          )}
          {/* <p style={{ position: 'fixed', top: '60px', right: '55px', display: 'flex' }}>
            Selected Filter: {selectedFilter}
        </p>   */}
        </div>
        
      </div>
    </>
  );
};

export default FilterComponent;