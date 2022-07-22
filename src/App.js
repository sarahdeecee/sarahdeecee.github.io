import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import './App.css';
import Links from './components/Links';
import Content from './components/Content';
import Particles from './components/Particles';
import {lightTheme, darkTheme} from './styles/theme';
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
        <Box sx={{ display: 'flex' }}>
          <Links theme={theme} setTheme={setMode} particles={particles} setParticles={setParticles} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Content page={page} />
        </Box>
        </Box>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
