import { LinkedIn, GitHub, Instagram, Email,  ToggleOff, ToggleOn } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, styled, CssBaseline, useScrollTrigger } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@emotion/react';
import Links from './Links';
import LinksMobile from './LinksMobile';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const links = [
  {
    link: "https://www.linkedin.com/in/sarah-delacruz",
    icon: <LinkedIn color="primary" />,
    text: "LinkedIn"
  },
  {
    link: "https://github.com/sarahdeecee",
    icon: <GitHub color="primary" />,
    text: "GitHub"
  },
  {
    link: "https://www.freecodecamp.org/sdc",
    icon: <FontAwesomeIcon icon={faFreeCodeCamp} size="xl" className="fa-list-icon" />,
    text: "freeCodeCamp"
  },
  {
    link: "https://codepen.io/s_dc",
    icon: <FontAwesomeIcon icon={faCodepen} size="xl" className="fa-list-icon" />,
    text: "CodePen"
  },
  {
    link: "https://www.instagram.com/inakasarah",
    icon: <Instagram color="primary" />,
    text: "Instagram"
  },
  {
    link: "https://www.flickr.com/photos/186883449@N08/",
    icon: <FontAwesomeIcon icon={faFlickr} size="xl" className="fa-list-icon" />,
    text: "Flickr"
  },
  {
    link: "mailto:sarah.delacruz@gmail.com",
    icon: <Email color="primary" />,
    text: "Email"
  }
];

const linkTextStyle = {fontSize: '16px', fontWeight: 500};

function MenuContainer(props) {
  // const theme = useTheme();
  const {particles, setParticles} = props;
  const [openLinks, setOpenLinks] = useState(false);

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }

  const themeToggle = <ThemeToggle key='switch-button' openLinks={openLinks} linkTextStyle={linkTextStyle} />;

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
        }}
      >
        {particles ? <ToggleOn color="primary" /> : <ToggleOff color="primary" />}
      </ListItemIcon>
      <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle} >{particles ? "Effects Off" : "Effects On"}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} />
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
          }}
        >
          {link.icon}
        </ListItemIcon>
        <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{link.text}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  ));

  // function HideOnScroll(props) {
  //   const { children } = props;
  //   const trigger = useScrollTrigger();
  
  //   return (
  //     <Slide appear={false} direction="down" in={!trigger}>
  //       {children}
  //     </Slide>
  //   );
  // }

  return (<>
      <CssBaseline />
      <Links linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
      <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
    </>
  );
}

export default MenuContainer;