import { LinkedIn, GitHub, Instagram, Email } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

function Links() {
  return (
    <section className="page" id="links">
      <IconButton href="https://www.linkedin.com/in/sarah-delacruz">
        <LinkedIn />
      </IconButton>
      
      <IconButton href="https://github.com/sarahdeecee">
        <GitHub />
      </IconButton>

      <IconButton href="https://www.freecodecamp.org/sdc">
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </IconButton>
      
      <IconButton href="https://www.instagram.com/inakasarah">
        <Instagram />
      </IconButton>
      
      <IconButton href="https://www.flickr.com/photos/186883449@N08/">
        <FontAwesomeIcon icon={faFlickr} />
      </IconButton>

      <IconButton href="mailto:sarah.delacruz@gmail.com">
        <Email />
      </IconButton>
    </section>
  );
}

export default Links;