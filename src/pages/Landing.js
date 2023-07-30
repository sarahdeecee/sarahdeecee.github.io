import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SakuraLogo from '../data/Pink Sakura Flowers Logo Dark.svg';
import MenuContainer from "../components/MenuContainer";

function Landing(props) {
  const {particles, setParticles} = props;

  return (
    <section id="landing" className="page">
      <MenuContainer particles={particles} setParticles={setParticles} />
      {/* <article id="bio" width="100%""> */}
      <Grid container id="landing-container" component="article" direction="row" sx={{justifyContent: "space-between", alignItems: "center", width: '100%'}}>
        <Grid item container xs={12} sx={{justifyContent: 'space-evenly'}}>
          <Box sx={{zIndex: 1, display: 'flex', maxWidth: 'max-content', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Typography variant="h4" component="p">Hello! My name is</Typography>
            <Typography variant="h1" component="p" id="landing-name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
            <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
          </Box>
          <Grid item xs={12} sm={4} md={3} sx={{justifyContent: 'center'}} id="landing-logo-container">
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
      </Grid>
      {/* </article> */}
    </section>
  );
}

export default Landing;

