import { Tab, Tabs } from '@mui/material';

function Navigation() {
  return (
    <section id="menu">
      <Tabs selectionFollowsFocus>
        <Tab label="About" />
        <Tab label="Projects" />
        <Tab label="Stack" />
        <Tab label="Contact" />
      </Tabs>
    </section>
  );
}

export default Navigation;