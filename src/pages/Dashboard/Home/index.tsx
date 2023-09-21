import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyIcon from '@mui/icons-material/Money';
import InventoryIcon from '@mui/icons-material/Inventory';

import Chart from './Chart';

interface CardProps {
	title: string;
	icon?: any;
	value: number;
}
function Card({ title, icon, value }: CardProps) {
	return (
		<div className="bg-[#caa67d] h-[150px] w-[240px] rounded-lg p-4 pb-8 flex flex-col">
			<h1 className="font-bold text-2xl">{title}</h1>
			<div className="h-full w-full flex items-end">
				<div className="text-4xl">{value}</div>
				<div className="ml-auto">{icon}</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<section className="h-screen">
			<div className="flex gap-2 flex-wrap">
				<Card
					title="Monthly Revenue"
					value={7394}
					icon={<AttachMoneyIcon style={{ fontSize: 50 }} />}
				/>
				<Card
					title="Weekly Revenue"
					value={7394}
					icon={<AttachMoneyIcon style={{ fontSize: 50 }} />}
				/>
				<Card
					title="Total Sales"
					value={7394}
					icon={<MoneyIcon style={{ fontSize: 50 }} />}
				/>
				<Card
					title="Inventory"
					value={7394}
					icon={<InventoryIcon style={{ fontSize: 50 }} />}
				/>
			</div>
			<Chart />
		</section>
	);
}
