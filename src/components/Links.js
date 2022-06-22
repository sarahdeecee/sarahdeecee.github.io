import { LinkedIn, GitHub, Instagram, Email } from '@mui/icons-material';
import { IconButton, Popover, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';

const links = [
  {
    link: "https://www.linkedin.com/in/sarah-delacruz",
    icon: <LinkedIn />,
    text: ""
  },
  {
    link: "https://github.com/sarahdeecee",
    icon: <GitHub />,
    text: ""
  },
  {
    link: "https://www.freecodecamp.org/sdc",
    icon: <FontAwesomeIcon icon={faFreeCodeCamp} />,
    text: ""
  },
  {
    link: "https://www.instagram.com/inakasarah",
    icon: <Instagram />,
    text: ""
  },
  {
    link: "https://www.flickr.com/photos/186883449@N08/",
    icon: <FontAwesomeIcon icon={faFlickr} />,
    text: ""
  },
  {
    link: "mailto:sarah.delacruz@gmail.com",
    icon: <Email />,
    text: ""
  }
];

function Links() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverText, setPopoverText] = useState(null);

  const handlePopoverOpen = (event, text) => {
    console.log(event);
    setPopoverText(text);
    setAnchorEl(event.currentTarget);
  };
  
  const handlePopoverClose = () => {
    setPopoverText(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const parsedLinks = links.map(link => <>
    <IconButton
      href={link.link}
      value={link.text}
      key={link.text}
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {link.icon}
    </IconButton>
  </>)

  return (
    <section className="page" id="links">
      {parsedLinks}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Test</Typography>
      </Popover>
    </section>
  );
}

export default Links;