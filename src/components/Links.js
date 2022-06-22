import { LinkedIn, GitHub, Instagram, Email, Facebook } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import { Box } from '@mui/system';

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

function Links() {
  const [openLinks, setOpenLinks] = useState(false);
  const handleDrawerOpen = () => {
    console.log('open', openLinks);
    setOpenLinks(true);
  };
  
  const handleDrawerClose = () => {
    console.log('close', openLinks);
    setOpenLinks(false);
  };

  const linkDrawer = <Drawer variant="permanent" open={openLinks} sx={{'& .MuiDrawer-paper': {borderWidth: 0, justifyContent: 'flex-end'}}}>
    <List>
      {links.map((link, index) => (
        <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
          <ListItemButton key={`listbutton-${link.text}`}
            sx={{
              minHeight: 48,
              justifyContent: openLinks ? 'initial' : 'center',
              px: 2.5,
            }}
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
    </List>
  </Drawer>

  return (
    <section className="page" id="links"
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}>
      {linkDrawer}
    </section>
  );
}

export default Links;