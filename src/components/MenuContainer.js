import { LinkedIn, GitHub, Instagram, Email,  ToggleOff, ToggleOn, ChevronLeft, Menu } from '@mui/icons-material';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, styled, CssBaseline, IconButton, Divider, useScrollTrigger } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@emotion/react';
import Navigation from './Navigation';
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

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

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

function MenuContainer(props) {
  const theme = useTheme();
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
        {particles ? <ToggleOn /> : <ToggleOff />}
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

  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (<>
      <CssBaseline />
      <Links linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
      <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
    </>
  );
}

export default MenuContainer;