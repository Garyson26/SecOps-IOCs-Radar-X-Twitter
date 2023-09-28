import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import { faker } from '@faker-js/faker';



const PieChart = (props) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,

      },
    },
  };

  const labels = props.label
  const data = {
    labels,
    datasets: [
      {
        label: 'Num of Stock',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: '#1f77b4',
        hoverOffset: 4

      },
    ],
  };
  return (
    <Pie options={options} height={170} className='' data={data} />
  )
}

export default PieChart