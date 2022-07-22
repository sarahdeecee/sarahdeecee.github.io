import { Grid, Typography } from "@mui/material";
import CertificationCard from "../components/CertificationCard";

const certifications = [
  { title: "Diploma of Web Development",
    company: "Lighthouse Labs",
    link: "",
    companyLink: "https://www.lighthouselabs.ca/"
  },
  { title: "Responsive Web Design Certification",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sdc/responsive-web-design",
    companyLink: "https://www.freecodecamp.org/"
  },
  { title: "JavaScript Algorithms and Data Structures Certification",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sdc/javascript-algorithms-and-data-structures",
    companyLink: "https://www.freecodecamp.org/"
  },
  // { title: "Front End Development Libraries",
  //   company: "freeCodeCamp",
  //   link: "https://www.freecodecamp.org/",
  //   companyLink: ""
  // },
];

function Certifications() {

  const parsedCertifications = certifications.map(certification => <Grid item xs={12} sm={6} md={4} lg={3} key={`grid-${certification.title}`}>
      <CertificationCard {...certification} key={certification.title} />
    </Grid>);

  return (
    <section className="page" id="certifications">
      <article>
        <Typography variant="h2" className="header">Certifications:</Typography>
        <Grid container spacing={3}>
          {parsedCertifications}
        </Grid>
      </article>
    </section>
  );
}

export default Certifications;
