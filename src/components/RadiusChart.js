import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const RadiusChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry, index) => `Data ${index + 1}`),
        datasets: [
            {
                label: 'Radius of each recording',
                data: data.map(entry => entry.radius),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: '#AB47BC',
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
                text: 'User Radius Sizes',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default RadiusChart;