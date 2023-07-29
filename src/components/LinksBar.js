import { List } from "@mui/material";
import { ParticleToggle } from "./ParticleToggle";

function LinksBar(props) {
  const {themeToggle, linksList, openLinks, particles, setParticles} = props;

  return (
    <List>
      {linksList}
      {themeToggle}
      <ParticleToggle openLinks={openLinks} particles={particles} setParticles={setParticles} linkTextStyle/>
    </List>
  );
}

export default LinksBar;