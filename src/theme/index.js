// eslint-disable-next-line camelcase
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const DMSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const DMSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#007E7A',
      contrastText: '#fff',
      500: '#007E7A',
      400: '#00918C',
      300: '#00CFC8',
      200: '#2BD7D1',
      100: '#6BE3DF',
      75: '#96EBE8',
      50: '#E6FAFA',
    },
    grey: {
      main: '#202020',
      500: '#202020',
      400: '#242424',
      300: '#343434',
      200: '#575757',
      100: '#898989',
      75: '#ACACAC',
      50: '#EBEBEB',
      60: '#D2D2D2',
      35: '#F8F8F8',
    },
    grey60: {
      main: '#D2D2D2',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
    },
    success: {
      main: '#00894A',
      contrastText: '#fff',
      100: '#00894A',
      5: '#E6F3ED',
    },
    info: {
      main: '#0075F2',
      contrastText: '#fff',
      100: '#0075F2',
      5: '#E6F1FE',
    },
    warning: {
      main: '#FFB000',
      contrastText: '#fff',
      100: '#FFB000',
      5: '#FFF7E6',
    },
    danger: {
      main: '#EB214E',
      contrastText: '#fff',
      100: '#EB214E',
      5: '#F7A4B6',
    },
  },
  typography: {
    fontFamily: DMSans.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0',
          height: '0',
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '20px',
          backgroundColor: '#575757',
          opacity: 0.25,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '0.5rem',
          minHeight: '2.5rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
        },
      },
    },
  },
})

export default theme
