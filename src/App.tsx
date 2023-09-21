import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Landing from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Dashboard/Home'));
const Accounts = lazy(() => import('./pages/Dashboard/Accounts'));
const Calculator = lazy(() => import('./pages/Dashboard/Calculator'));

export default function App() {
	return (
		<main>
			<Routes>
				<Route
					path="/"
					element={<Landing />}
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
					path="/dashboard"
					element={<Dashboard />} //? Layout
				>
					<Route
						path="home"
						element={
							<Suspense fallback={<h1>Loading...</h1>}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="account"
						element={
							<Suspense fallback={<h1>Loading...</h1>}>
								<Accounts />
							</Suspense>
						}
					/>
					<Route
						path="calculator"
						element={
							<Suspense fallback={<h1>Loading...</h1>}>
								<Calculator />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path="*"
					element={<h1>404 Not Found</h1>}
				/>
			</Routes>
		</main>
	);
}
