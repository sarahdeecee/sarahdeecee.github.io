import { ToggleOff, ToggleOn } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

export function ParticleToggle(props) {
  const {openLinks, particles, setParticles, linkTextStyle} = props;

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }

  return (
    <ListItem key={`listitem-particle`} disablePadding sx={{ display: 'block' }}>
    <ListItemButton key={`listbutton-particle`}
      onClick={handleParticles}
    >
      <ListItemIcon
        key={`listicon-particle`}
      >
        {particles ? <ToggleOn color="primary" /> : <ToggleOff color="primary" />}
      </ListItemIcon>
      <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle} >{particles ? "Effects Off" : "Effects On"}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
  )
};