import { LinkedIn, GitHub, Instagram, Email,  ToggleOff, ToggleOn, Menu, ChevronLeft } from '@mui/icons-material';
import { SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, AppBar, Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@emotion/react';
import { Box, styled } from '@mui/system';

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

function LinksEdit(props) {
const {particles, setParticles} = props;
  const [openLinks, setOpenLinks] = useState(false);
  const theme = useTheme();

  const drawerWidth = 200;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const handleDrawerOpen = () => {
    setOpenLinks(true);
  };
  const handleDrawerClose = () => {
    setOpenLinks(false);
  };

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }
  console.log('openLinks ', openLinks);

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
          width: "1em"
        }}
      >
        {particles ? <ToggleOn /> : <ToggleOff />}
      </ListItemIcon>
      <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{particles ? "Effects Off" : "Effects On"}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} />
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

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <section className="page" id="links">
      <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed" open={openLinks}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{
              mr: 2,
              ...(openLinks && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent"
        open={openLinks} 
        transitionDuration={500}
        // onMouseEnter={handleDrawerOpen}
        // onMouseLeave={handleDrawerClose}
        sx={{'& .MuiDrawer-paper': {borderWidth: 0}}}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{...(!openLinks && { opacity: 0 })}}/>
        <List>
          {linksList}
          {themeToggle}
          {particleToggle}
        </List>
      </StyledDrawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>Test</Typography>
      </Box>
    </section>
  );
}

export default LinksEdit;