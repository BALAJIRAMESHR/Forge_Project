import React, { useState } from 'react';
import './Home.css';
import CarImage from './car.png';
import ChartVisualization from './ExampleComponent';
const BatteryStatus = ({ number = 0, percentage = 0 }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="battery-status">
      <svg className="battery-circle" width="100" height="100">
        <circle
          className="battery-circle-bg"
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="5"
        />
        <circle
          className="battery-circle-fg"
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#0074d9"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="50" y="55" textAnchor="middle" fontSize="14" fill="#000">
          {number}
        </text>
      </svg>
      <p className="battery-percentage">{percentage}%</p>
    </div>
  );
};

const Home = () => {
  const [date, setDate] = useState('');
  const [sensor, setSensor] = useState('');
  const [darkMode] = useState(false);
 

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSensorChange = (event) => {
    setSensor(event.target.value);
  };

  

  const batteries = [
    { number: 1, percentage: 89 },
    { number: 2, percentage: 67 },
    { number: 3, percentage: 90 },
    { number: 4, percentage: 65 },
  ];

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <h1>DashBoard</h1>
        <div className="form-controls">
          <select className="date-select" value={date} onChange={handleDateChange}>
            <option value="">Select Date</option>
            <option value="10">Date 1</option>
            <option value="20">Date 2</option>
            <option value="30">Date 3</option>
          </select>
          <select className="sensor-select" value={sensor} onChange={handleSensorChange}>
            <option value="">Select Sensor</option>
            <option value="10">Sensor 1</option>
            <option value="20">Sensor 2</option>
            <option value="30">Sensor 3</option>
          </select>
        </div>
      </div>
      <div className="grid-container">
        <div className="stats-paper">
          <h2>STATS</h2>  
          <div className="stats-container">
            <div className="stats-left">
              <div className="stat-item">
                <p>Total Production</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '40%' }}>
                    <span className="progress-value">80</span>
                  </div>
                  <span className="total-value">200</span>
                </div>
              </div>
              <div className="stat-item">
                <p>Active Sensors</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}>
                    <span className="progress-value">150</span>
                  </div>
                  <span className="total-value">200</span>
                </div>
              </div>
            </div>
            <div className="stats-right">
              <div className="stat-item delay">
                <p>
                  Overall Delay <span className="delay-time">15 mins</span>
                </p>
                <div className="line-chart">
                  <svg width="100%" height="100%">
                    <polyline
                      fill="none"
                      stroke="#0074d9"
                      strokeWidth="2"
                      points="0,40 20,30 40,20 60,10 80,5 100,0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="battery-container">
          <h2>BATTERY</h2>
          <div className="battery-statuses">
            {batteries.map((battery) => (
              <BatteryStatus
                key={battery.number}
                number={battery.number}
                percentage={battery.percentage}
              />
            ))}
          </div>
        </div>
        <div className="car-info">
          <div className="car-image">
            <img src={CarImage} alt="car" />
          </div>
          <div className="car-details">
            <h2 className="car-title">CAR 1</h2>
            <div className="detail">
              <span className="label">STATION</span>
              <span className="value">Body Shop</span>
            </div>
            <div className="detail">
              <span className="label">BATTERY</span>
              <span className="value">88%</span>
            </div>
            <div className="detail">
              <span className="label">DELAY</span>
              <span className="value">2 mins</span>
            </div>
            <div className="detail">
              <span className="label">EXPECTED FINISH TIME</span>
              <span className="value">2:30</span>
            </div>
          </div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="chart-containers">
          <h2>Overall Location</h2>
          <div>
            <ChartVisualization />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
