import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './App.css';
import Links from './components/Links';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState('light');
  const [page, setPage] = useState('landing');

  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <Navigation page={page} setPage={setPage}/>
        </Grid>
        <Grid item>
          <Links />
        </Grid>
        <Grid item>
          <Content page={page} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
