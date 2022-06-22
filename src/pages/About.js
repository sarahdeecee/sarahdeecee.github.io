import { Grid, Typography } from "@mui/material";
import CertificationCard from "../components/CertificationCard";

const biography = `My name is Sarah and I'm passionate about user experience, efficient code, and making things make sense.

My interest in design and web development started at age 12 when I started learning HTML and CSS from free resources online. I enjoyed creating small websites for my favourite cartoon characters and making custom themes on MySpace.

After an adventurous 5 years working in Japan, I decided to return to Canada and revisit my childhood hobby of creating websites. Now, I'm focused on pursuing web development as a career.`

const funFact = `Fun fact: My older brother gifted me a book titled "How to Do Everything with HTML" in the early 2000's &#8212; I still own it to this day.`;

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
  { title: "Front End Development Libraries",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
    companyLink: ""
  },
];

function About() {

  const parsedCertifications = certifications.map(certification => <Grid item xs={4} md={3} key={`grid-${certification.title}`}>
      <CertificationCard {...certification} key={certification.title} />
    </Grid>);

  return (
    <section className="page" id="about">
      <article>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>{biography}</Typography>
        <Typography variant="body2">Fun fact: My older brother gifted me a book titled <strong>How to Do Everything with HTML</strong> in the early 2000's &#8212; I still own it to this day.</Typography>

        <Typography variant="h3">Certifications:</Typography>
        
        <Grid container spacing={3}>
        {parsedCertifications}
        </Grid>
      </article>
    </section>
  );
}

export default About;
