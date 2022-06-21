import { Tab, Tabs } from '@mui/material';

function Navigation() {
  return (
    <menu id="menu">
      <Tabs selectionFollowsFocus>
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Stack" />
        <Tab label="Contact" />
      </Tabs>
    </menu>
  );
}

export default Navigation;