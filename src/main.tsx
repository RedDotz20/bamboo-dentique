import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ErrorBoundery from './ErrorBoundery.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/fontFamily.css';
import './styles/index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#caa67d',
			dark: '#d5d5d5',
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundery fallback={<h1>Something Went Wrong</h1>}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</ErrorBoundery>
	</React.StrictMode>
);
