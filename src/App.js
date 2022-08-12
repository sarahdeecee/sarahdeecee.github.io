import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Particles from './components/Particles';
import {lightTheme, darkTheme} from './styles/theme';
import { ColorContext } from './ColorContext';
import MenuContainer from './components/MenuContainer';

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
  const [currentProject, setCurrentProject] = useState({
    label: '',
    src: '',
    open: false
  });

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {particles && <Particles className="particles" />}
        <Box sx={{ display: 'flex', width: '100%', maxWidth: '1500px', mx: 2}}>
          <MenuContainer particles={particles} setParticles={setParticles} />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Content page={page} currentProject={currentProject} setCurrentProject={setCurrentProject} />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
