import { Tab, Tabs } from '@mui/material';
import React from 'react';

function Navigation(props) {
  const {page, setPage} = props;

  const handlePage = (e, newValue) => {
    setPage(newValue);
  }
  return (
    <menu id="menu">
      <Tabs value={page} onChange={handlePage} selectionFollowsFocus>
        <Tab value="about" href="#about" label="About" />
        <Tab value="projects" href="#projects" label="Projects" />
        <Tab value="stack" href="#stack" label="Stack" />
        <Tab value="contact" href="#contact" label="Contact" />
      </Tabs>
    </menu>
  );
}

export default Navigation;