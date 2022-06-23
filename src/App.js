import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import './styles/theme.scss';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Particles from './components/Particles';

function App() {
  const [theme, setTheme] = useState('light');
  const [particles, setParticles] = useState(true);
  const [page, setPage] = useState('landing');

  return (
    <div className={`App ${theme}`}>
      {particles && <Particles className="particles" />}
      <Grid container>
        <Grid item xs>
          <Links theme={theme} setTheme={setTheme} particles={particles} setParticles={setParticles} />
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
    </div>
  );
}

export default App;
