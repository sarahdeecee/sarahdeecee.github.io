import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { faCodepen, faFlickr, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

export const linksArr = [
  {
    link: "https://www.linkedin.com/in/sarah-delacruz",
    icon: <LinkedIn color="primary" />,
    text: "LinkedIn"
  },
  {
    link: "https://github.com/sarahdeecee",
    icon: <GitHub color="primary" />,
    text: "GitHub"
  },
  {
    link: "https://www.freecodecamp.org/sdc",
    icon: <FontAwesomeIcon icon={faFreeCodeCamp} size="xl" className="fa-list-icon" />,
    text: "freeCodeCamp"
  },
  {
    link: "https://codepen.io/s_dc",
    icon: <FontAwesomeIcon icon={faCodepen} size="xl" className="fa-list-icon" />,
    text: "CodePen"
  },
  {
    link: "https://www.instagram.com/inakasarah",
    icon: <Instagram color="primary" />,
    text: "Instagram"
  },
  {
    link: "https://www.flickr.com/photos/186883449@N08/",
    icon: <FontAwesomeIcon icon={faFlickr} size="xl" className="fa-list-icon" />,
    text: "Flickr"
  },
  {
    link: "mailto:sarah.delacruz@gmail.com",
    icon: <Email color="primary" />,
    text: "Email"
  }
];