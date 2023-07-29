import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import LinksBar from './LinksBar';
import { Navigation } from 'swiper';
import { Menu } from '@mui/icons-material';

const linkTextStyle = {fontSize: '16px', fontWeight: 500};

function MenuContainer(props) {
  const {particles, setParticles} = props;
  const [openLinks, setOpenLinks] = useState(false);

  const handleDrawerOpen = () => {
    setOpenLinks(true);
  };
  // const handleDrawerClose = () => {
  //   setOpenLinks(false);
  // };

  return (<>
      <CssBaseline />
      {/* <AppBar open={true} id="appbar" color="primary" > */}
        {/* <Toolbar> */}
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(openLinks && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton> */}
          {/* <Navigation /> */}
        {/* </Toolbar> */}
      {/* </AppBar> */}
      {/* </HideOnScroll> */}
      <LinksBar linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} particles={particles} setParticles={setParticles} />
      {/* <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} /> */}
    </>
  );
}

export default MenuContainer;