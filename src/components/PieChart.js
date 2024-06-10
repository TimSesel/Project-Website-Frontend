import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);

const PieChart = ({ data }) => {
    const decibelRanges = [50, 80, 200];
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
                'rgba(121, 212, 125, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 99, 132, 0.5)',
            ],
            borderColor: [
                'rgba(121, 212, 125, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Distribution Of Noise Levels',
            },
        },
    };

    return <Pie data={chartData} options={options} />;
};

export default PieChart;
