import { LinkedIn, GitHub, Instagram, Email } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

function Links() {
  return (
    <section className="page" id="links">
      <Button href="https://www.linkedin.com/in/sarah-delacruz" startIcon={<LinkedIn />} />
      
      <Button href="https://github.com/sarahdeecee" startIcon={<GitHub />} />

      <Button href="https://www.freecodecamp.org/sdc" startIcon={<FontAwesomeIcon icon={faFreeCodeCamp} />} />
      
      <Button href="https://www.instagram.com/inakasarah" startIcon={<Instagram />} />
      
      <Button href="https://www.flickr.com/photos/186883449@N08/" startIcon={<FontAwesomeIcon icon={faFlickr} />} />

      <Button href="mailto:sarah.delacruz@gmail.com" startIcon={<Email />} />
    </section>
  );
}

export default Links;