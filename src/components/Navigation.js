import { Tab, Tabs } from '@mui/material';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';

function Navigation(props) {
  const tabs = [
    {
      text: "about",
      label: "About",
      component: <About />
    },
    {
      text: "projects",
      label: "Projects",
      component: <Projects />
    },
    {
      text: "skills",
      label: "Skills",
      component: <Skills />
    },
    {
      text: "contact",
      label: "Contact",
      component: <Contact />
    }
  ];

  const parsedTabs = tabs.map(({ label, text }, index) => (
    <Tab
      key={index}
      label={label}
      value={text}
      href={`#${text}`}
      sx={{textTransform: 'none', fontSize: '16px'}}
    />
  ));

  return (
    <menu id="menu">
      <Tabs value={page} onChange={handlePage} textColor="inherit" selectionFollowsFocus allowScrollButtonsMobile 
        variant="scrollable"
        centered>
        {parsedTabs}
      </Tabs>
    </menu>
  );
}

export default Navigation;