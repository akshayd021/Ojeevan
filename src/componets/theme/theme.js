// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#272262',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Ekatra, Arial, sans-serif',
  },
});

export default theme;
