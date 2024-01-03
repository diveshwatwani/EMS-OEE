// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tabs from './components/Tabs';
import MainDashboard from './pages/MainDashboard';
import Header from './components/Header';
import "./styles.css";
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
      
        <div>
          <Header />
      <Routes>   
            <Route path="/dash" element={<MainDashboard />} />
            <Route path="/dash/Tabs/Batch" element={< Tabs value={4}/>} />
            <Route path="/dash/Tabs/Shift" element={< Tabs value={1}/>} />
            <Route path="/dash/Tabs/Line" element={< Tabs value={2}/>} />
            <Route path="/dash/Tabs/Item" element={< Tabs value={3}/>} /> 
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










