import { Tab, Tabs } from '@mui/material';
import React from 'react';

function Navigation(props) {
  const {page, setPage} = props;

  const handlePage = e => {
    setPage(e.target.value)
  }
  return (
    <menu id="menu">
      <Tabs value={page} selectionFollowsFocus>
        <Tab onClick={handlePage} value="about" label="About" />
        <Tab onClick={handlePage} value="projects" label="Projects" />
        <Tab onClick={handlePage} value="stack" label="Stack" />
        <Tab onClick={handlePage} value="contact" label="Contact" />
      </Tabs>
    </menu>
  );
}

export default Navigation;