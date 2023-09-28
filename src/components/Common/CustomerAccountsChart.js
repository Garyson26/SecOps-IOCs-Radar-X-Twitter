import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,

        },
    },
    scales: {
        x: {

            ticks: {
                stepSize: 5
            }
        },
        y: {
            // beginAtZero: true,
            max: 2, // Set the maximum value on the Y-axis
            min: 0, // Set the minimum value on the Y-axis
            ticks: {
                stepSize: 0.5, // Set the step size between ticks on the Y-axis
                precision: 1, // Display one decimal place for tick values
            },
        },
    },
};

const labels = Array.from({ length: 31 }, (_, i) => i + 1);

export const data = {
    labels,
    datasets: [
        {
            label: 'Number of customer accounts created',
            data: labels.map(() => faker.number.float({ min: 0, max: 2 })), // Use float to get decimal values
            borderColor: 'rgb(31, 119, 180)',
            backgroundColor: 'rgba(31, 119, 180, 0.5)',
        },
       
    ],
};
const CustomerAccountsChart = () => {
  return (
    <div>
    <Line options={options} height={100} data={data} />
</div>
  )
}

export default CustomerAccountsChart