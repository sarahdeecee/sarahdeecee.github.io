import {LinkedIn, GitHub, Instagram, Email} from '@mui/icons-material';

function Links() {
  return (
    <section class="page" id="links">
      <div id="links-container">
        <span class="link">
          <a href="https://www.linkedin.com/in/sarah-delacruz/">
            <LinkedIn />
          </a>
        </span>
        {/* <span class="link">
          <a href="https://www.freecodecamp.org/sdc" id="profile-link">
            <i class="fa-brands fa-free-code-camp"></i> 
            freeCodeCamp
          </a>
        </span> */}
        <span class="link">
          <a href="https://github.com/sarahdeecee">
            <GitHub />
          </a>
        </span>
        <span class="link">
          <a href="http://instagram.com/inakasarah">
            <Instagram />
          </a>
        </span>
        {/* <span class="link">
          <a href="https://www.flickr.com/photos/186883449@N08/">
            <i class="fa-brands fa-flickr"></i> 
            Flickr
          </a>
        </span> */}
        <span class="link">
          <a href="mailto:sarah.delacruz@gmail.com">
            <Email />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Links;