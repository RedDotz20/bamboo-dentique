import { Line } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = () => {
	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Profit Margin',
				data: [8, 14, 12, 7, 18, 14, 21, 5, 9, 16, 3, 11], //profit margin data (sample)
				borderColor: 'rgba(202, 166, 125)',
				backgroundColor: 'rgba(202, 166, 125)',
				borderWidth: 6,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: 'Profit Margin (%)',
				},
			},
		},
	};

	return (
		<div className="min-w-[500px] max-w-[985px] my-8 border-[#caa67d] border-4 rounded-lg p-4 pl-6">
			<h2 className="text-center mb-4">Profit Margin Line Chart</h2>
			<Line
				data={data}
				options={options}
			/>
		</div>
	);
};

export default LineChart;
