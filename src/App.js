import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Content from './components/Content';
import Links from './components/Links';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item>
            <Links />
          </Grid>
          <Grid item>
            <Content />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
