import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SakuraLogo from '../data/Pink Sakura Flowers Logo Dark.svg';
import MenuContainer from "../components/MenuContainer";
import SettingsButton from "../components/SettingsButton";

function Landing(props) {
  const {particles, setParticles} = props;

  return (
    <section id="landing" className="page">
      <MenuContainer particles={particles} setParticles={setParticles} />
      <Grid container id="landing-container" component="article" direction="row" sx={{justifyContent: "space-between", alignItems: "center", width: '100%'}}>
        <Grid item container xs={12} sx={{justifyContent: 'space-evenly'}}>
          <Box sx={{zIndex: 1, display: 'flex', maxWidth: 'max-content', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Typography variant="h4" component="p">Hello! My name is</Typography>
            <Typography variant="h1" component="p" id="landing-name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
            <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
          </Box>
          <Grid item xs={12} sm={4} md={3} id="landing-logo-container">
            <Box sx={{position: 'absolute', right: '4em', top: '37vh', width: '25vh', maxWidth: '500px'}}>
              <img
                // src={SakuraLogo}
                src='./logo-flower.png'
                alt="Sakura Logo"
                loading="lazy"
                id="landing-logo"
                width='100%'
                max-width='500'
                zIndex='0'
              />
            </Box>
            <Box sx={{position: 'absolute', right: '4em', top: '37vh', width: '25vh', maxWidth: '500px'}}>
              <img
                src='./logo-s.png'
                alt="S Logo"
                loading="lazy"
                width='100%'
                max-width='500'
                zIndex='2'
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{height: '22em'}}>
        <SettingsButton particles={particles} setParticles={setParticles} />
      </Box>
    </section>
  );
}

export default Landing;

