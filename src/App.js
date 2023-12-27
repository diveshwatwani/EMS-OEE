// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OeeByItem from './pages/OeeByItem';
import OeeByShift from './pages/OeeByShift';
import Tabs from './components/Tabs';
import PieChart from './components/PieChart';
import HeatMap from './components/HeatMap';
import MainDashboard from './pages/MainDashboard';
import MainDashGoal from './components/MainDashGoal';
import Header from './components/Header';
import FusionChart from './components/FusionChart';
import FilterComponent from './components/FilterComponent';

const App = () => {
  return (
   <wrapper>
      <div>
        <Header />
        {/* <Tabs /> */}
        {/* <FilterComponent /> */}
      </div>

      <Routes>
        <Route path="/oee-by-shift" element={<OeeByShift />} />
        <Route path="/pages/OeeByItem" element={<OeeByItem />} />
        <Route path="/pie" element={<PieChart />} />
        <Route path="/fusion" element={<FusionChart />} />

    

        <Route path="/heat" element={<HeatMap />} />
        <Route path="/dash" element={<MainDashboard />} />
        <Route path="/goal" element={<MainDashGoal />} />

        <Route path="/dash/Tabs" element={<Tabs />} />

        <Route path="/dash/Tabs/Batch" element={< Tabs value={4}/>} />
        <Route path="/dash/Tabs/Shift" element={< Tabs value={1}/>} />
        <Route path="/dash/Tabs/Line" element={< Tabs value={2}/>} />
        <Route path="/dash/Tabs/Item" element={< Tabs value={3}/>} />

      </Routes>
    </wrapper>
  );
};

export default App;










