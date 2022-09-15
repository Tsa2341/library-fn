import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import App from './views/App';
import NotFound from './components/NotFound';
import { Navigate } from 'react-router-dom';
import Member from './views/Member';
import RegisterMember from './components/RegisterMember';
import SignInMember from './components/SignInMember';
import Librarian from './views/Librarian';
import SignInLibrarian from './components/SignInLibrarian';

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
      {
        path: 'member',
        element: <Member />,
        children: [
          { path: 'register', element: <RegisterMember /> },
          { path: 'signIn', element: <SignInMember /> },
        ],
      },
      {
        path: 'librarian',
        element: <Librarian />,
        children: [{ path: 'signIn', element: <SignInLibrarian /> }],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
