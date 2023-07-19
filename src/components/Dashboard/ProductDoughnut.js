import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import { faker } from '@faker-js/faker';



export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,

    },
  },
};

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
export const data = {
    labels,
  datasets: [
    {
      label: 'Num of Stock',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      hoverOffset: 4

    },
  ],
};

const ProductPie = () => {
  return (
    <Pie options={options} height={400} className='' data={data} />
  )
}

export default ProductPie