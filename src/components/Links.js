import { LinkedIn, GitHub, Instagram, Email, LightMode, DarkMode, ToggleOff, ToggleOn } from '@mui/icons-material';
import { Button, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide } from '@mui/material';
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

const linkTextStyle = {fontSize: '16px', fontWeight: 500, color: '#788C99'};

function Links(props) {
  const {theme, setTheme, particles, setParticles} = props;
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

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
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
      <Slide direction="right" in={openLinks} mountOnEnter unmountOnExit>
        <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{(theme === 'light') ? "Dark Mode" : "Light Mode"}</Typography>} />
      </Slide>
    </ListItemButton>
  </ListItem>;

  const particleToggle = <ListItem key={`listitem-particle`} disablePadding sx={{ display: 'block' }}>
    <ListItemButton key={`listbutton-particle`}
      sx={{
        minHeight: 48,
        justifyContent: openLinks ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={handleParticles}
    >
      <ListItemIcon key={`listicon-particle`}
        sx={{
          minWidth: 0,
          mr: openLinks ? 3 : 'auto',
          justifyContent: 'center',
          width: "1em"
        }}
      >
        {particles ? <ToggleOn /> : <ToggleOff />}
      </ListItemIcon>
      <Slide direction="right" in={openLinks} mountOnEnter unmountOnExit>
        <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{particles ? "Effects Off" : "Effects On"}</Typography>} />
      </Slide>
    </ListItemButton>
  </ListItem>;

  const linksList = links.map(link => (
    <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
      <ListItemButton key={`listbutton-${link.text}`}
        sx={{
          minHeight: 48,
          justifyContent: openLinks ? 'initial' : 'center',
          px: 2.5,
          backgroundColor: "inherit"
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
        <Slide direction="right" in={openLinks} mountOnEnter unmountOnExit>
          <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{link.text}</Typography>} />
        </Slide>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <section className="page" id="links">
      <SwipeableDrawer variant="permanent"
        open={openLinks} 
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        sx={{'& .MuiDrawer-paper': {borderWidth: 0, justifyContent: 'flex-end'}}}
      >
        <List>
          {linksList}
          {themeToggle}
          {particleToggle}
        </List>
      </SwipeableDrawer>
    </section>
  );
}

export default Links;