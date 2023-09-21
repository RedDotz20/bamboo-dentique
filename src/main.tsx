import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App.tsx';
import ErrorBoundery from './ErrorBoundery.tsx';

import './styles/fontFamily.css';
import './styles/index.css';

const theme = createTheme({
	typography: {
		fontFamily: 'Quicksand',
	},
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
