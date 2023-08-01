import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsButton from './SettingsButton';
import { Link } from '@mui/material';

export default function MobileNavBar(props) {
  const {particles, setParticles} = props;
  return (
    <Box id="mobile-bar" className="mobile">
      <AppBar position="fixed" sx={{borderRadius: 0}}>
        <Toolbar sx={{paddingLeft: 2, pr: 1}}>
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link href="#landing" sx={{ display: 'flex', alignItems: 'center'}}>
              <img alt="Small Logo" src="./Pink Sakura Flowers Logo.png" width='32' />
            </Link>
            &nbsp;Sarah Dela Cruz
          </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{position: 'fixed', top: 5, right: 5, zIndex: 1200, maxHeight: '56px'}}>
          <SettingsButton particles={particles} setParticles={setParticles} />
        </Box>
    </Box>
  );
}