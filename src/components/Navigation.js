import { Tab, Tabs } from '@mui/material';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import { pages } from '../data/pages';

function Navigation(props) {
  const {page, handlePage} = props;
  const parsedTabs = pages.map(({ label, text }, index) => (
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