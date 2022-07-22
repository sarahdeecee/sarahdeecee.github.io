import { LinkedIn, GitHub, Instagram, Email,  ToggleOff, ToggleOn, ChevronLeft, Menu } from '@mui/icons-material';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, styled, CssBaseline, IconButton, Divider, useScrollTrigger } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';
import { useTheme } from '@emotion/react';

const drawerWidth = 240;

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

function Links(props) {
  const theme = useTheme();
  const {themeToggle, particleToggle, linksList, openLinks, setOpenLinks, DrawerHeader} = props;

  const handleDrawerOpen = () => {
    setOpenLinks(true);
  };
  const handleDrawerClose = () => {
    setOpenLinks(false);
  };
  
  return (<>
      <StyledAppBar position="fixed" open={openLinks} id="appbar" color="primary" enableColorOnDark>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(openLinks && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
          <Navigation />
        </Toolbar>
      </StyledAppBar>
      {/* </HideOnScroll> */}
      <StyledDrawer variant="permanent" open={openLinks} onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose} id="links-drawer">
        <DrawerHeader sx={{
          ...(!openLinks && { opacity: 0 }),
        }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft color="primary" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {linksList}
          {themeToggle}
          {particleToggle}
        </List>
      </StyledDrawer>
    </>
  );
}

export default Links;