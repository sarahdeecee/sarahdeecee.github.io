import { Tab, Tabs } from '@mui/material';
import React from 'react';

function Navigation(props) {
  const {page} = props;
  return (
    <menu id="menu">
      <Tabs value={page} selectionFollowsFocus>
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Stack" />
        <Tab label="Contact" />
      </Tabs>
    </menu>
  );
}

export default Navigation;