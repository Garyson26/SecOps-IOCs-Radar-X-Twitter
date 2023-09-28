
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

const labels = ['Women Cloth', 'Man Cloth', 'Kids', 'Sport', 'Jewelry', 'Beatuy', 'Home Improvement' , 'Home decoration'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Num of Stock',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 1,

    },
  ],
};

const ProducatSaleChart = () => {
  return (
    <Bar options={options} height={400} className='' data={data} />
  )
}

export default ProducatSaleChart