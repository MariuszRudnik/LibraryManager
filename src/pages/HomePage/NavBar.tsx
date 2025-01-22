// import React from 'react';

// const NavBar: React.FC = () => {
//     return (
//         <ul>
//             <li>Home</li>
//             <li>Login</li>
//             <li>Rejestracja</li>
//             <li>Panel admina</li>
//             <li>Panel klienta</li>
//         </ul>
//     );
// };

// export default NavBar;

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material';

const StyledButton = styled(Button)(() => ({
  color: '#FFD700',
  fontWeight: 500,
  textTransform: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#32CD32',
    borderBottom: '2px solid white',
  },
  '&.active': {
    color: '#32CD32',
    borderBottom: '2px solid white',
  },
}));

const NavBar: React.FC = () => {
  const menuItems = [
    'Home',
    'Login',
    'Rejestracja',
    'Panel admina',
    'Panel klienta',
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      {' '}
      {/* Czarny kolor tła */}
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: '#FFD700',
            fontWeight: 'bold',
          }}
        >
          MyApp
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {menuItems.map((item, index) => (
            <StyledButton key={index}>{item}</StyledButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
