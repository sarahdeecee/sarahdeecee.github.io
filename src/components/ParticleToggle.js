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
      sx={{
        minHeight: 48,
        justifyContent: openLinks ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={handleParticles}
    >
      <ListItemIcon
        key={`listicon-particle`}
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
  </ListItem>
  )
};