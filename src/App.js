// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OeeByItem from './pages/OeeByItem';
import OeeByShift from './pages/OeeByShift';
import Tabs from './components/Tabs';
import PieChart from './components/PieChart';
import HeatMap from './components/HeatMap';
import MainDashboard from './pages/MainDashboard';
import MainDashGoal from './components/MainDashGoal';
import Header from './components/Header1';
import FusionChart from './components/FusionChart';
import FilterComponent from './components/FilterComponent';


import Factory from './pages/Factory';
import Shop from './pages/Shop';
import Line from './pages/Line';
import Workstation from './pages/Workstation';
import ProductionForm from './pages/ProductionForm';
import ReasonForm from './pages/ReasonForm';
import Equipment from './pages/Equipment';
import DefectForm from './pages/DefectForm';
import MachineCard from './pages/MachineCard';

import DowntimeCard from './components/DowntimeCard';
import Downtime from './pages/Downtime';



const App = () => {
  return (
    <Router>
      
       
        {/* <Tabs /> */}
        {/* <FilterComponent /> */}
      
        <div>
          <Header />
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


              {/* sakshi pages starts here  */}
            <Route path="/productionform" element={<ProductionForm />} />
            <Route path="/reasonform" element={<ReasonForm />} />
            <Route path="/defectform" element={<DefectForm />} />
            <Route path="/machinecard" element={<MachineCard />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/line" element={<Line/>} />
            <Route path="/workstation" element={<Workstation />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/downtimecard" element={<DowntimeCard/>}/>
            <Route path="/downtime" element={<Downtime/>}/>

       

    
      </Routes>
      </div>
    </Router>
  );
};

export default App;










