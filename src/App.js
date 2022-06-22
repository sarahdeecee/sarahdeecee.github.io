import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import './styles/theme.scss';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('landing');

  return (
    <div className={`App ${theme}`}>
      <Grid container>
        <Grid item xs>
          <Links />
        </Grid>
        <Grid container item xs={11}>
          <Grid item>
            <Navigation page={page} setPage={setPage} />
          </Grid>
          <Grid item>
            <Content page={page} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
