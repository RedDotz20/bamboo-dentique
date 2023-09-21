import { useState } from 'react';

export default function Calculator() {
	const [input, setInput] = useState('');
	const [result, setResult] = useState('');

	const handleButtonClick = (value: string) => {
		if (value === '=') {
			try {
				setResult(eval(input));
			} catch (error) {
				setResult('Error');
			}
		} else if (value === 'C') {
			setInput('');
			setResult('');
		} else {
			setInput(input + value);
		}
	};

	const buttonStyle = 'bg-blue-500 text-white p-2 w-12 h-14 text-2xl';

	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
			<div className="bg-gray-200 p-4 rounded-lg shadow-lg border-2 border-blue-700">
				<div className="text-4xl font-semibold mb-2 min-h-[40px] text-right">
					{result !== '' ? result : input}
				</div>
				<div className="grid grid-cols-4 gap-1 ">
					{['7', '8', '9', '/'].map((value) => (
						<button
							key={value}
							className={buttonStyle}
							onClick={() => handleButtonClick(value)}
						>
							{value}
						</button>
					))}
					{['4', '5', '6', '*'].map((value) => (
						<button
							key={value}
							className={buttonStyle}
							onClick={() => handleButtonClick(value)}
						>
							{value}
						</button>
					))}
					{['1', '2', '3', '-'].map((value) => (
						<button
							key={value}
							className={buttonStyle}
							onClick={() => handleButtonClick(value)}
						>
							{value}
						</button>
					))}
					{['0', '.', '=', '+'].map((value) => (
						<button
							key={value}
							className={buttonStyle}
							onClick={() => handleButtonClick(value)}
						>
							{value}
						</button>
					))}
					<button
						className="bg-red-500 text-white p-2 col-span-4 text-2xl"
						onClick={() => handleButtonClick('C')}
					>
						C
					</button>
				</div>
			</div>
		</div>
	);
}
