import { Typography } from "@mui/material";

const biography = `My name is Sarah and I'm passionate about user experience, efficient code, and making things make sense.

My interest in design and web development started at age 12 when I started learning HTML and CSS from free resources online. I enjoyed creating small websites for my favourite cartoon characters and making custom themes on MySpace.

After an adventurous 5 years working in Japan, I decided to return to Canada and revisit my childhood hobby of creating websites. Now, I'm focused on pursuing web development as a career.`

const funFact = `Fun fact: My older brother gifted me a book titled "How to Do Everything with HTML" in the early 2000's &#8212; I still own it to this day.`;

const certifications = [
  { title: "Diploma of Web Development",
    company: "Lighthouse Labs",
    link: "",
    companyLink: ""
  },
  { title: "Responsive Web Design Certification",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sdc/responsive-web-design",
    companyLink: ""
  },
  { title: "JavaScript Algorithms and Data Structures Certification",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sdc/javascript-algorithms-and-data-structures",
    companyLink: ""
  },
  { title: "Front End Development Libraries",
    company: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
    companyLink: ""
  },
];

function About() {

  const parsedCertifications = certifications.map(certification => <li><strong><a href={certification.link}>{certification.title}</a></strong> from <a href={certification.companyLink}>{certification.company}</a></li>);

  return (
    <section className="page" id="about">
      <article>
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>{biography}</Typography>
        <Typography variant="body2">Fun fact: My older brother gifted me a book titled <strong>How to Do Everything with HTML</strong> in the early 2000's &#8212; I still own it to this day.</Typography>

        <Typography variant="h3">Certifications:</Typography>
        <ul>
          {parsedCertifications}
        </ul>
      </article>
    </section>
  );
}

export default About;
