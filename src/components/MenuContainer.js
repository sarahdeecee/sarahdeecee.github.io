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

  const linksList = linksArr.map(link => (
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
      <LinksBar linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
      <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} themeToggle={themeToggle} particleToggle={particleToggle} linksList={linksList} drawerWidth={drawerWidth} DrawerHeader={DrawerHeader} />
    </>
  );
}

export default MenuContainer;