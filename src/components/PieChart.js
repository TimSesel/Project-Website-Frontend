import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const PieChart = ({ data }) => {
    const decibelRanges = [0, 50, 70, 90, 110, 130];
    const decibelCounts = new Array(decibelRanges.length).fill(0);

    data.forEach(entry => {
        for (let i = 0; i < decibelRanges.length; i++) {
            if (entry.decibels <= decibelRanges[i]) {
                decibelCounts[i]++;
                break;
            }
        }
    });

    const chartData = {
        labels: decibelRanges.map((range, index) => `<= ${range} dB`),
        datasets: [{
            label: 'Decibel Distribution',
            data: decibelCounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }]
    };

    return <Pie data={chartData} />;
};

export default PieChart;
