import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SakuraLogo from '../data/Pink Sakura Flowers Logo Dark.svg';

function Landing() {
  return (
    <section id="landing">
      <article id="bio">
        <Grid container id="landing-container" direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
          <Grid item xs={12} sm={8} md={9}>
            <Box sx={{zIndex: 1, maxWidth: 'max-content'}}>
              <Typography variant="h4" component="p">Hello! My name is</Typography>
              <Typography variant="h1" component="p" id="landing-name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
              <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3} sx={{justifyContent: 'center'}}>
            <img
              src={SakuraLogo}
              alt="Sakura S Logo"
              loading="lazy"
              id="landing-logo"
              width='100%'
              max-width='500'
            />
          </Grid>
        </Grid>
      </article>
    </section>
  );
}

export default Landing;

