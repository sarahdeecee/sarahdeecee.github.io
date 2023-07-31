import { Divider, ListItem, Stack, Switch, Typography } from "@mui/material";

export function ParticleToggle(props) {
  const {particles, setParticles, style} = props;

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }

  return (
    <>
      <ListItem direction="column" spacing={1} alignItems="center">
        <Typography sx={style}>Effects</Typography>
      </ListItem>
        <Divider />
      <ListItem>
        <Stack direction="row" sx={{alignItems: 'center'}}>
          <Typography>Off</Typography>
          <Switch
            checked={particles}
            defaultChecked
            onChange={handleParticles}
            inputProps={{ 'aria-label': 'particles-switch' }}
          />
          <Typography>On</Typography>
        </Stack>
      </ListItem>
    </>
  )
};