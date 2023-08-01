import './App.css';
import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Stack } from '@mui/material';
import {lightTheme, darkTheme} from './styles/theme';
import { ColorContext } from './ColorContext';
import Content from './components/Content';
import Particles from './components/Particles';
import MobileNavBar from './components/MobileNavBar';

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
  // const [page, setPage] = useState('landing');
  const [currentProject, setCurrentProject] = useState({
    title: '',
    label: '',
    src: '',
    open: false
  });

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {particles && <Particles className="particles" />}
        <Stack component="main" className="App light dark" sx={{ display: 'flex', width: '100vw', maxWidth: '1500px', px: 2, flexGrow: 1 }}>
          <Content currentProject={currentProject} setCurrentProject={setCurrentProject} particles={particles} setParticles={setParticles} />
        </Stack>
        <MobileNavBar />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
