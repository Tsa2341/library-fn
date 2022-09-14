import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import App from './views/App';
import NotFound from './views/NotFound';
import { Navigate } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="about" />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
