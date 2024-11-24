import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvasRef.current.height);
    gradient.addColorStop(0, 'rgba(0, 217, 255)'); // Start color
    gradient.addColorStop(1, 'rgba(236, 110, 173, 1)'); // End color


    // Anpassad plugin för text i mitten


    // Skapa diagrammet
    chartRef.current = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: data,
          backgroundColor: [gradient, '#ffffff00'],
          borderWidth: 0.1, // Ingen kant
          borderColor: 'rgba(0, 217, 255)',
        }],
      },
      options: {
        cutout: '80%', // Hålighet i mitten
        
        elements: {
          arc: {
            borderRadius: [20, 0], // Ingen rundad kant på slutet
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]); // Lyssna på centerText också

  return <canvas ref={canvasRef} width="100%" height="100%"></canvas>; // Justera storlek på canvas
};

export default DoughnutChart;
