import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

export default function App() {
	return (
		<main>
			<BootstrapCustomTheme />
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

function BootstrapCustomTheme() {
	return (
		<style type="text/css">
			{`
			.btn-browseProduct {
				font-family: "QuickSand-Bold";
				background-color: #caa67d !important;
				color: white;
				font-weight: 700;
				font-size: 1.25rem;
				border-radius: 12px;
			}

			.btn-browseProduct:hover {
				color: white;
				background-color: #b5956a;
			}

			.btn-browseProduct:active {
				color: white;
				background-color: #b5956a;
			}

			.btn-browseProduct:focus {
				color: white;
				background-color: #b5956a;
			}
		`}
		</style>
	);
}
