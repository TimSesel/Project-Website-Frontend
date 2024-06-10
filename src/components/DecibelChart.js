import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const DecibelChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry, index) => `Data ${index + 1}`),
        datasets: [
            {
                label: 'Decibel Levels',
                data: data.map(entry => entry.decibels),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: '#7B1FA2',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Decibel Levels',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default DecibelChart;