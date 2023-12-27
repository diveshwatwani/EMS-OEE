// Tabs.js

import React, { useState } from 'react';
import './Tabs.css';
import OeeByItem from '../pages/OeeByItem';
import OeeByShift from '../pages/OeeByShift';
import OeeByLine from '../pages/OeeByLine';
import OeeByBatch from '../pages/OeeByBatch';


function Tabs(value) {
  const [toggleState, setToggleState] = useState(value.value);
  console.log(value);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          OEE BY SHIFT
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          OEE BY LINE
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          OEE BY ITEM
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          OEE BY BATCH
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : ""}
        >  
         {toggleState === 1 && <OeeByShift />}
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : ""}
        >
            {toggleState === 2 && <OeeByLine />}
         
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : ""}
        >
          {/* Render OeeByItem component when the 3rd tab is selected */}
          {toggleState === 3 && <OeeByItem />}
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : ""}
         
        >
           {toggleState === 4 && <OeeByBatch />}
         
       
         
        </div>
      </div>
    </div>
  );
}

export default Tabs ;



