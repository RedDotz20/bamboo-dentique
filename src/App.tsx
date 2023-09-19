import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

export default function App() {
	return (
		<main>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/register"
					element={<RegisterPage />}
				/>
				<Route
					path="*"
					element={<h1>404 Not Found</h1>}
				/>
			</Routes>
		</main>
	);
}
