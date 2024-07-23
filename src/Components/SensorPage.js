import React from 'react';
import './SensorPage.css';
import carImage from './car.png'; // Ensure you have the car image in your project

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="car-info-containers">
        <div className="car-image">
          <img src={carImage} alt="Car" />
        </div>
        <div className="car-info">
          <h2>CAR 1</h2>
          <p>Current station: Station 6 (Paint Booth)</p>
        </div>
        <div className="car-status">
          <p>Expected out time: 2:00 pm</p>
          <p>Delay time: 2 min</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
