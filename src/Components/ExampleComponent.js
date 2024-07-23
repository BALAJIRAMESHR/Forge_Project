import React, { useEffect, useRef, useState } from 'react';
import { database } from './firebaseConfig'; // Adjust the path as per your file structure
import { ref, onChildAdded, off } from 'firebase/database';
import Chart from 'chart.js/auto';
import './Example.css';

const ExampleComponent = () => {
  const [carPositions, setCarPositions] = useState([]);
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  // Function to initialize or update the chart
  const initializeChart = () => {
    const ctx = chartContainer.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Car Position',
            data: carPositions, // Chart data from state
            backgroundColor: 'blue',
            borderColor: 'blue',
            showLine: false,
            pointRadius: 5,
          },
          {
            label: 'Stations',
            data: [
             { x: 1000, y: 1, label: 'Station 1' },
              { x: 2000, y: 1, label: 'Station 2' },
              { x: 3000, y: 1, label: 'Station 3' },
              { x: 4000, y: 1, label: 'Station 4' },
              { x: 5000, y: 1, label: 'Station 5' },
              { x: 6000, y: 1, label: 'Station 6' },
              { x: 7000, y: 1, label: 'Station 7' },
              { x: 8000, y: 1, label: 'Station 8' },
              { x: 9000, y: 1, label: 'Station 9' },
              { x: 10000, y: 1, label: 'Station 10' },
            ],
            backgroundColor: 'red',
            borderColor: 'red',
            showLine: false,
            pointRadius: 10,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: 10000,
            ticks: {
              stepSize: 1000,
            },
            title: {
              display: true,
              text: 'Distance (cm)',
            },
          },
          y: {
            display: false,
            min: 0,
            max: 2,
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  };

  // Function to handle new car data from Firebase
  const handleNewCarData = (snapshot) => {
    const newData = snapshot.val();
    console.log('Received car data:', newData);

    // Update chart data state
    setCarPositions((prevData) => [...prevData, { x: newData.distanceTraveled, y: 1 }]);
  };

  useEffect(() => {
    const carRef = ref(database, 'sensor');

    // Set up listener for new child added to 'car_positions' node
    const listener = onChildAdded(carRef, handleNewCarData, (error) => {
      console.error('Error fetching car positions:', error);
    });

    // Initialize the chart
    initializeChart();

    // Clean up the listeners when component unmounts
    return () => {
      console.log('Cleaning up Firebase listeners');
      off(carRef, 'child_added', listener);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = carPositions;
      chartInstance.current.update();
    }
  }, [carPositions]);

  return (
    <div style={{ width: '900px', height: '100px' }}>
      <canvas
        ref={chartContainer}
        style={{ width: '20%', height: '80px' }} // Adjust height here
      ></canvas>
    </div>
  );
};

export default ExampleComponent;
