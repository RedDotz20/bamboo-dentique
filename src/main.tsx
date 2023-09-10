import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundery from './ErrorBoundery.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fontFamily.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundery fallback={<h1>Something Went Wrong</h1>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundery>
	</React.StrictMode>
);
