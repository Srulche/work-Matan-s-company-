import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Ensure the correct font is applied
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0073EA',
          '&:hover': {
            backgroundColor: '#005bb5',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
