import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SakuraLogo from '../data/Pink Sakura Flowers Logo Dark.svg';

function Landing() {
  return (
    <section id="landing">
      <article id="bio">
        <Grid container direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
          <Grid item>
            <Box sx={{zIndex: 1, maxWidth: 'max-content'}}>
              <Typography variant="h4" component="p">Hello! My name is</Typography>
              <Typography variant="h1" component="p" id="name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
              <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
            </Box>
          </Grid>
          <Grid item>
            <img
              src={SakuraLogo}
              alt="Sakura S Logo"
              loading="lazy"
              id="landing-logo"
            />
          </Grid>
        </Grid>
      </article>
    </section>
  );
}

export default Landing;

