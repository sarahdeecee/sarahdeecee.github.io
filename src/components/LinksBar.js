import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ParticleToggle } from "./ParticleToggle";
import { linksArr } from "../data/Links";
import ThemeToggle from "./ThemeToggle";

function LinksBar(props) {
  const {particles, setParticles} = props;

  const linkTextStyle = {fontSize: '16px', fontWeight: 500};

  const themeToggle = <ThemeToggle key='switch-button' linkTextStyle={linkTextStyle} />;

  const linksList = linksArr.map(link => (
    <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
      <ListItemButton key={`listbutton-${link.text}`}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 2.5,
          backgroundColor: "inherit"
        }}
        href={link.link}
        target="_blank"
      >
        <ListItemIcon key={`listicon-${link.text}`}
          sx={{
            minWidth: 0,
            mr: 'auto',
            justifyContent: 'center',
          }}
        >
          {link.icon}
        </ListItemIcon>
        {/* <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{link.text}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} /> */}
      </ListItemButton>
    </ListItem>
  ));

  return (
    <List id="links-bar" className="button-bar">
      {linksList}
      {/* {themeToggle} */}
      {/* <ParticleToggle openLinks={openLinks} particles={particles} setParticles={setParticles} linkTextStyle/> */}
    </List>
  );
}

export default LinksBar;