import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import LinksBar from './LinksBar';

const linkTextStyle = {fontSize: '16px', fontWeight: 500};

function MenuContainer(props) {
  const {particles, setParticles} = props;
  const [openLinks, setOpenLinks] = useState(false);

  return (<>
      <CssBaseline />
      <LinksBar linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} particles={particles} setParticles={setParticles} />
      {/* <LinksMobile linkTextStyle={linkTextStyle} openLinks={openLinks} setOpenLinks={setOpenLinks} /> */}
    </>
  );
}

export default MenuContainer;