import { Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import routes from './routes';

const theme = createTheme({
  palette: {
    color: {
      grey: '#797979',
    },
    common: { black: '#333333', white: '#FFFFFF' },
    primary: {
      main: '#00B123',
      text: '#fff',
    },
    secondary: {
      main: '#169BD5',
      text: '#fff',
    },
    error: {
      main: '#B10007',
      text: '#fff',
    },
    success: {
      main: '#00B123',
      text: '#fff',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    margin: 0,
    allVariants: {
      color: '#333333',
    },
    '@media (max-width:600px)': {
      fontSize: 14,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={routes} />
  </ThemeProvider>,
);
