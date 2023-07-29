import { Tab, Tabs } from '@mui/material';
import { _findIndex } from 'lodash';
import useScrollSpy from '../hooks/useScrollSpy';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import { useSpring } from "framer-motion"

function Navigation(props) {
  // const {page, setPage} = props;
  
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

  // MUI Scrollspy
  const active = useScrollSpy({ tabs });
  // const activeIndex = active ? _findIndex(tabs, ["text", active]) : false;

  // const handlePage = (e, newValue) => {
  //   setPage(newValue);
  // }

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
        // scrollButtons="auto"
        centered>
        {parsedTabs}
      </Tabs>
    </menu>
  );
}

export default Navigation;