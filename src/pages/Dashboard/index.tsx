import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './Sidebar';

export default function Dashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/dashboard/home');
	}, []);

	return (
		<Sidebar>
			<Outlet />
		</Sidebar>
	);
}
