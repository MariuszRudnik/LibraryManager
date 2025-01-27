import { brown } from '@mui/material/colors';
import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  palette: {
    primary: {
      main: brown[900],
    },
    secondary: {
      main: brown[50],
    },
    background: {
      default: brown[50],
    },
  },
});
