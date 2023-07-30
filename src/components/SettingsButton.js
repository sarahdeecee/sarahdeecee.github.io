import { Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, Paper } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";

export default function SettingsButton(props) {
  const {particles, setParticles} = props;

  const linkTextStyle = {fontSize: '16px', fontWeight: 500};

  // const linksList = linksArr.map(link => (
  //   <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
  //     <ListItemButton key={`listbutton-${link.text}`}
  //       sx={{
  //         minHeight: 48,
  //         justifyContent: 'center',
  //         px: 2.5,
  //         backgroundColor: "inherit"
  //       }}
  //       href={link.link}
  //       target="_blank"
  //     >
  //       <ListItemIcon key={`listicon-${link.text}`}
  //         sx={{
  //           minWidth: 0,
  //           mr: openLinks ? 3 : 'auto',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         {link.icon}
  //       </ListItemIcon>
  //       {/* <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{link.text}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} /> */}
  //     </ListItemButton>
  //   </ListItem>
  // ));

  return (
    <List id="settings" className="button-bar">
      {/* <ListItemButton>
        <ListItemIcon>
          <ThemeToggle key='switch-button' linkTextStyle={linkTextStyle} />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <ParticleToggle particles={particles} setParticles={setParticles} />
        </ListItemIcon>
      </ListItemButton> */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{minWidth: 0, justifyContent: 'center', width: '2em'}}>
            <Settings color="primary" fontSize="large" />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};