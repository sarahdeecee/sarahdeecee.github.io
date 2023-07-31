import { ToggleOff, ToggleOn } from "@mui/icons-material";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function ParticleToggle(props) {
  const {openLinks, particles, setParticles, linkTextStyle} = props;

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }

  return (
    <Stack direction="column" spacing={1} alignItems="center">
      <Typography type="body1" sx={linkTextStyle}>Effects</Typography>
      <Divider />
      <Stack direction="row">
        <Typography>Off</Typography>
        <Switch
          checked={particles}
          defaultChecked
          onChange={handleParticles}
          inputProps={{ 'aria-label': 'particles-switch' }}
        />
        <Typography>On</Typography>
      </Stack>
    </Stack>
  )
};