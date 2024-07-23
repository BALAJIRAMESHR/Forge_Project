import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import SensorDetail from './Components/SensorPage';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sensor/:sensorId" element={<SensorDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
