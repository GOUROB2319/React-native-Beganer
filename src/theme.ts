import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#db4444',
      light: '#ff6b6b',
      dark: '#b73e3e',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#000000',
      secondary: '#7d8184'
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Inter',
      fontSize: '36px',
      fontWeight: 600,
      letterSpacing: '1.44px'
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '24px',
      fontWeight: 700,
      letterSpacing: '0.72px',
      lineHeight: '24px'
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '32px',
      fontWeight: 700,
      letterSpacing: '1.28px',
      lineHeight: '30px'
    },
    body1: {
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 400
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: 400
    },
    button: {
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 500,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 4
  }
});

export default theme;