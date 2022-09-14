import { Box, Stack, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoText = styled(Typography)(({ theme }) => ({
  // fontSize: '0.5rem',
  lineHeight: '1rem',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));
const LinkText = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        isActive
          ? { textDecoration: 'underline', fontWeight: 'bold' }
          : undefined;
      }}
    >
      <Typography color="primary">{children}</Typography>
    </NavLink>
  );
};

function NavBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: 'max-content',
        bgcolor: 'white',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 40px',
        border: `1px solid ${theme.palette.color.grey}`,
      }}
    >
      <Stack direction="column">
        <LogoText>Kazakh</LogoText>
        <LogoText>National</LogoText>
        <LogoText>Library</LogoText>
      </Stack>
      <Stack direction="row" spacing="15px">
        <LinkText to="/about">About</LinkText>
        <LinkText to="/account">Account</LinkText>
        <LinkText to="/catalog">Catalog</LinkText>
        <LinkText to="/signIn">Sign In</LinkText>
        <LinkText to="/registration">Registration</LinkText>
        <LinkText to="/librarianSignIn">Librarian Sign in</LinkText>
      </Stack>
    </Box>
  );
}

export default NavBar;
