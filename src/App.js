import { useMemo, useState } from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme, Button, ListItemIcon, Box, Typography } from '@mui/material';
import './App.css';
// import './styles/theme.scss';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Particles from './components/Particles';
import {lightTheme, darkTheme} from './styles/theme';
import { ColorContext } from './ColorContext';
import LinksEdit from './components/LinkEdit';

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  const [particles, setParticles] = useState(true);
  const [page, setPage] = useState('landing');

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {particles && <Particles className="particles" />}
        <Box sx={{ display: 'flex' }}>
          <LinksEdit theme={theme} setTheme={setMode} particles={particles} setParticles={setParticles} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <DrawerHeader /> */}
          {/* <Typography paragraph>Test</Typography> */}
          <Content page={page} />
        </Box>
        </Box>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
