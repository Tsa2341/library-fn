import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import store from './redux/store';

const theme = createTheme({
  palette: {
    color: {
      grey: '#797979',
      faintBlack: '#8C8C8C',
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
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </ThemeProvider>,
);
