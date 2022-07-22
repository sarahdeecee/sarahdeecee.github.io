import { LinkedIn, GitHub, Instagram, Email,  ToggleOff, ToggleOn, ChevronLeft, Menu } from '@mui/icons-material';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, styled, CssBaseline, IconButton, Divider, useScrollTrigger } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@emotion/react';
import Navigation from './Navigation';

const drawerWidth = 240;

function LinksMobile(props) {
  const theme = useTheme();
  const {themeToggle, particleToggle, linksList, openLinks, setOpenLinks, DrawerHeader} = props;

  const handleDrawerOpen = () => {
    setOpenLinks(true);
  };
  const handleDrawerClose = () => {
    setOpenLinks(false);
  };

  return (<>
      <CssBaseline />
      {/* <HideOnScroll> */}
        <AppBar position="fixed" open={openLinks} id="appbar-mobile">
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
        </AppBar>
      {/* </HideOnScroll> */}
      <Drawer 
        open={openLinks} id="links-drawer-mobile"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <DrawerHeader sx={{
          ...(!openLinks && { opacity: 0 }),
        }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{
          ...(!openLinks && { opacity: 0 }),
        }}/>
        <List>
          {linksList}
          {themeToggle}
          {particleToggle}
        </List>
      </Drawer>
    </>
  );
}

export default LinksMobile;