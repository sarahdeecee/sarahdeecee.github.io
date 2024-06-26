import { ChevronLeft, Menu } from '@mui/icons-material';
import { Drawer, AppBar, Toolbar, List, CssBaseline, IconButton, Divider } from '@mui/material';
import Navigation from './Navigation';
// import { useTheme } from '@emotion/react';

const drawerWidth = 240;

function LinksMobile(props) {
  // const theme = useTheme();
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
        <AppBar position="fixed" open={openLinks} color="primary" id="appbar-mobile" enableColorOnDark>
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
            <ChevronLeft color="primary" />
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