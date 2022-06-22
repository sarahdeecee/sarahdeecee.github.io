import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('stack');

  return (
    <div className="App">
      <Grid container xs={12}>
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
