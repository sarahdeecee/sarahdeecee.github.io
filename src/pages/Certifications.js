import { Grid, Typography } from "@mui/material";
import CertificationCard from "../components/CertificationCard";

const certifications = [
  { title: "Diploma of Web Development",
    company: "Lighthouse Labs",
    img: "./certifications/lighthouse.png",
    link: "",
    companyLink: "https://www.lighthouselabs.ca/"
  },
  { title: "Responsive Web Design Certification",
    company: "freeCodeCamp",
    img: "./certifications/fcc-responsive.png",
    link: "https://www.freecodecamp.org/certification/sdc/responsive-web-design",
    companyLink: "https://www.freecodecamp.org/"
  },
  { title: "JavaScript Algorithms and Data Structures Certification",
    company: "freeCodeCamp",
    img: "./certifications/fcc-algorithms.png",
    link: "https://www.freecodecamp.org/certification/sdc/javascript-algorithms-and-data-structures",
    companyLink: "https://www.freecodecamp.org/"
  },
  { title: "Front End Development Libraries",
    company: "freeCodeCamp",
    img: "./certifications/fcc-front-end-development-libraries.png",
    link: "https://www.freecodecamp.org/certification/sdc/front-end-development-libraries",
    companyLink: "https://www.freecodecamp.org/",
  },
];

function Certifications(props) {
  const {currentProject, setCurrentProject} = props;

  const parsedCertifications = certifications.map(certification => <Grid item xs={12} md={6} lg={4} key={`grid-${certification.title}`}>
      <CertificationCard {...certification} key={certification.title} currentProject={currentProject} setCurrentProject={setCurrentProject} />
    </Grid>);

  return (
    <section className="page" id="certifications">
      <article>
        <Typography variant="h2" className="header">Certifications</Typography>
        <Grid container spacing={3}>
          {parsedCertifications}
        </Grid>
      </article>
    </section>
  );
}

export default Certifications;
