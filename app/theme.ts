'use client';
import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

const basisGrotesquePro = localFont({
  src: [
    {
      path: './shared/assets/fonts/BasisGrotesquePro-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './shared/assets/fonts/BasisGrotesquePro-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './shared/assets/fonts/BasisGrotesquePro-Light.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './shared/assets/fonts/BasisGrotesquePro-Regular.ttf',
      weight: '300',
      style: 'normal'
    }
  ]
});

const primaryColor = '#316FEA';
const secondaryColor = '#D3D8DC';

const theme = createTheme({
  palette: {
    primary: {
      light: primaryColor,
      dark: primaryColor,
      main: primaryColor
    },
    secondary: {
      light: secondaryColor,
      dark: secondaryColor,
      main: secondaryColor
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
            borderColor: secondaryColor,
            color: '#060E1E',
            fontSize: 14
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
