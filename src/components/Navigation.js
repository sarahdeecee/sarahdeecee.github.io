import { Tab, Tabs } from '@mui/material';
import React from 'react';

function Navigation(props) {
  const {page, setPage} = props;
  return (
    <menu id="menu">
      <Tabs value={page} selectionFollowsFocus>
        <Tab value="about" label="About" />
        <Tab value="projects" label="Projects" />
        <Tab value="stack" label="Stack" />
        <Tab value="contact" label="Contact" />
      </Tabs>
    </menu>
  );
}

export default Navigation;