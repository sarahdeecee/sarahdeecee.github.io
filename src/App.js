import { useMemo, useState } from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme, Button, ListItemIcon } from '@mui/material';
import './App.css';
// import './styles/theme.scss';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Particles from './components/Particles';
import {lightTheme, darkTheme} from './styles/theme';
import SwitchModeButton from './components/SwitchModeButton';
import { ColorContext } from './ColorContext';

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
        <Grid container>
          <Grid item xs>
            <Links theme={theme} setTheme={setMode} particles={particles} setParticles={setParticles} />
          </Grid>
          <Grid container item xs={11} sx={{justifyContent: 'center'}}>
            <Grid item>
              <Navigation page={page} setPage={setPage} />
            </Grid>
            <Grid item sx={{width: '100%', maxWidth: '1500px'}}>
              <Content page={page} />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
