import sx from "@mui/system/sx";

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
      default: '#F7E0F3',
      paper: '#fafafa',
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          root: {
            color: '#1c3f56',
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: '#F7E0F3',
          }
        }
      }
    }
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
      primary: '#d2608c',
      secondary: '#F7E0F3',
    },
    background: {
      default: '#0a0d12',
      paper: '#122431',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: sx({
            backgroundColor: '#FF0000',
          }),
        },
      },
      MuiDrawer: {
        styleOverrides: {
          secondary: {
            color: '#f7e0f3',
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          primary: {
            main: {
              color: '#f7e0f3',
            }
          }
        }
      },
    }
  },
};