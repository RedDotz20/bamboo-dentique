import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));

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
					element={
						<Suspense fallback={<h1>loading...</h1>}>
							<LoginPage />
						</Suspense>
					}
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
				background-color: #caa67d;
				color: white;
				font-weight: 700;
				font-size: 1.25rem;
				border-radius: 12px;
			}

			// .btn-browseProduct:hover {
			//   background-color: black;
			// }

		`}
		</style>
	);
}
