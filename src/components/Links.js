import { LinkedIn, GitHub, Instagram, Email, LightMode, DarkMode } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';

const links = [
  {
    link: "https://www.linkedin.com/in/sarah-delacruz",
    icon: <LinkedIn />,
    text: "LinkedIn"
  },
  {
    link: "https://github.com/sarahdeecee",
    icon: <GitHub />,
    text: "GitHub"
  },
  {
    link: "https://www.freecodecamp.org/sdc",
    icon: <FontAwesomeIcon icon={faFreeCodeCamp} size="xl"/>,
    text: "freeCodeCamp"
  },
  {
    link: "https://codepen.io/s_dc",
    icon: <FontAwesomeIcon icon={faCodepen} size="xl"/>,
    text: "CodePen"
  },
  {
    link: "https://www.instagram.com/inakasarah",
    icon: <Instagram />,
    text: "Instagram"
  },
  {
    link: "https://www.flickr.com/photos/186883449@N08/",
    icon: <FontAwesomeIcon icon={faFlickr} size="xl"/>,
    text: "Flickr"
  },
  {
    link: "mailto:sarah.delacruz@gmail.com",
    icon: <Email />,
    text: "Email"
  }
];

function Links(props) {
  const {theme, setTheme} = props;
  const [openLinks, setOpenLinks] = useState(false);
  const handleDrawerOpen = () => {
    setOpenLinks(true);
  };
  
  const handleDrawerClose = () => {
    setOpenLinks(false);
  };
  const handleTheme = () => {
    (theme === 'light') ? setTheme('dark') : setTheme('light');
  }

  const themeToggle = <ListItem key={`listitem-theme`} disablePadding sx={{ display: 'block' }}>
    <ListItemButton key={`listbutton-theme`}
      sx={{
        minHeight: 48,
        justifyContent: openLinks ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={handleTheme}
    >
      <ListItemIcon key={`listicon-theme`}
        sx={{
          minWidth: 0,
          mr: openLinks ? 3 : 'auto',
          justifyContent: 'center',
          width: "1em"
        }}
      >
        {(theme === 'light') ? <DarkMode /> : <LightMode />}
      </ListItemIcon>
      {openLinks && <ListItemText primary={(theme === 'light') ? "Dark Mode" : "Light Mode"} />}
    </ListItemButton>
  </ListItem>;

  const linksDrawer = <Drawer variant="permanent" open={openLinks} sx={{'& .MuiDrawer-paper': {borderWidth: 0, justifyContent: 'flex-end'}}}>
    <List>
      {links.map(link => (
        <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
          <ListItemButton key={`listbutton-${link.text}`}
            sx={{
              minHeight: 48,
              justifyContent: openLinks ? 'initial' : 'center',
              px: 2.5,
            }}
            href={link.link}
            target="_blank"
          >
            <ListItemIcon key={`listicon-${link.text}`}
              sx={{
                minWidth: 0,
                mr: openLinks ? 3 : 'auto',
                justifyContent: 'center',
                width: "1em"
              }}
            >
              {link.icon}
            </ListItemIcon>
            {openLinks && <ListItemText primary={link.text} />}
          </ListItemButton>
        </ListItem>
      ))}
      {themeToggle}
    </List>
  </Drawer>

  return (
    <section className="page" id="links"
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}>
      {linksDrawer}
    </section>
  );
}

export default Links;