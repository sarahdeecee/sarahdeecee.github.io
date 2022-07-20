import { createTheme } from "@mui/system";

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#D2608C',
    },
    secondary: {
      main: '#7d4dc1',
      contrastText: '#182c5b',
    },
    text: {
      primary: '#1c3f56',
      secondary: '#872349',
    },
    background: {
      default: '#fafafa',
      paper: '#f7e0f3',
    },
  }
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#d2608c',
    },
    secondary: {
      main: '#f9f9f9',
      contrastText: '#182c5b',
    },
    text: {
      primary: '#f7e0f3',
      secondary: '#872349',
    },
    background: {
      default: '#0a0d12',
      paper: '#0a161f',
    },
  },
};