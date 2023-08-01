import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuContainer from "../components/MenuContainer";
import SettingsButton from "../components/SettingsButton";
// import SakuraLogo from '../data/Pink Sakura Flowers Logo Dark.svg';

function Landing(props) {
  const {particles, setParticles} = props;

  return (
    <section id="landing" className="page">
      <MenuContainer />
      <Grid container id="landing-container" component="article" sx={{justifyContent: "space-around", alignItems: "center", width: '100%'}}>
        <Box className="logo logo-spin" sx={{ width: '25%', maxWidth: '500px', position: 'absolute', translate: '-4em 0em', right: 0, zIndex: 1 }}>
          <img
            // src={SakuraLogo}
            src='./logo-flower.png'
            alt="Sakura Logo"
            loading="lazy"
            id="flower-logo"
            width="100%"
            />
        </Box>
        <Box className="logo" sx={{ width: '25%', maxWidth: '500px', position: 'absolute', translate: '-4em 0em', right: 0, zIndex: 2 }}>
          <img
            src='./logo-s.png'
            alt="S Logo"
            loading="lazy"
            id="s-logo"
            width="100%"
          />
        </Box>
        <Grid container item id="landing-grid" xs={10} sx={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <Grid item xs={12} sx={{zIndex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Typography variant="h4" component="p">Hello! My name is</Typography>
            <Typography variant="h1" component="p" id="landing-name" sx={{fontWeight: "400"}}>Sarah Dela Cruz.</Typography>
            <Typography variant="h4" id="landing-subtitle" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{height: '22em', zIndex: 5, position: 'absolute', right: 0}}>
        <SettingsButton particles={particles} setParticles={setParticles} />
      </Box>
    </section>
  );
}

export default Landing;

