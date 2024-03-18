'use client';
import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

const basisGrotesquePro = localFont({
  src: [
    {
      path: '../assets/fonts/BasisGrotesquePro-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/BasisGrotesquePro-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/BasisGrotesquePro-Light.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/BasisGrotesquePro-Regular.ttf',
      weight: '300',
      style: 'normal'
    }
  ]
});

const theme = createTheme({
  palette: {
    primary: {
      light: '#316FEA',
      dark: '#316FEA',
      main: '#316FEA'
    },
    secondary: {
      light: '#D3D8DC',
      dark: '#D3D8DC',
      main: '#D3D8DC'
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: 14,
          textDecoration: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          height: '48px',
          fontSize: 16,
          fontWeight: 500,
          textTransform: 'initial',
          ...(ownerState.color === 'secondary' && {
            borderColor: "#D3D8DC",
            color: '#060E1E',
            fontSize: 14,
          })
        })
      }
    }
  },
  typography: {
    fontFamily: basisGrotesquePro.style.fontFamily,
    body2: {
      fontWeight: 500,
      color: '#BEC5CC',
      fontSize: 12
    },
    body1: {
      fontWeight: 400,
      color: '#383838',
      fontSize: 14
    },
    h3: {
      fontWeight: 700,
      fontSize: 30
    }
  }
});

export default theme;
