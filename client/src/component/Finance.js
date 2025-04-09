import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

const Finance = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Profit ($)',
        data: [1200, 1500, 1800, 1100],
        backgroundColor: 'green',
      },
    ],
  };

  return (
    <div>
      <h2>Financial Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default Finance;
