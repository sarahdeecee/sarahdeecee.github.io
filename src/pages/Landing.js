import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Landing() {
  return (
    <section id="landing">
      <article id="bio">
        <Grid container direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
          <Grid item>
            <Box>
              <Typography variant="h4" component="p">Hello! My name is</Typography>
              <Typography variant="h1" component="p" id="name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
              <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
            </Box>
          </Grid>
          <Grid item>
            <img
              src="/Pink Sakura Flowers Logo copy.png"
              srcSet="/Pink Sakura Flowers Logo copy.png"
              alt="Sakura S Logo"
              loading="lazy"
            />
          </Grid>
        </Grid>
      </article>
    </section>
  );
}

export default Landing;

