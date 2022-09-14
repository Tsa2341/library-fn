import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
