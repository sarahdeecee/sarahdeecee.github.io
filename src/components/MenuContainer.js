import { ToggleOff, ToggleOn } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Slide, styled, CssBaseline, useScrollTrigger } from '@mui/material';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import LinksMobile from './LinksMobile';
import LinksBar from './LinksBar';
import { linksArr } from '../data/Links';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const linkTextStyle = {fontSize: '16px', fontWeight: 500};

function MenuContainer(props) {
  // const theme = useTheme();
  const {particles, setParticles} = props;
  const [openLinks, setOpenLinks] = useState(false);

  return (<>
      <CssBaseline />
      <LinksBar linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} particles={particles} setParticles={setParticles} />
      {/* <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} /> */}
    </>
  );
}

export default MenuContainer;