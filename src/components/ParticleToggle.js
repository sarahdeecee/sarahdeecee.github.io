import { Divider, ListItem, Stack, Switch, Typography } from "@mui/material";

export function ParticleToggle(props) {
  const {particles, setParticles, style} = props;

  const handleParticles = () => {
    (particles === true) ? setParticles(false) : setParticles(true);
  }

  return (
    <>
      <ListItem direction="column" spacing={1} alignItems="center">
        <Typography color="primary" sx={style}>Effects</Typography>
      </ListItem>
        <Divider />
      <ListItem>
        <Stack direction="row" sx={{alignItems: 'center', ml: 2}}>
          <Typography color="primary">Off</Typography>
          <Switch
            checked={particles}
            defaultChecked
            onChange={handleParticles}
            inputProps={{ 'aria-label': 'particles-switch' }}
          />
          <Typography color="primary">On</Typography>
        </Stack>
      </ListItem>
    </>
  )
};