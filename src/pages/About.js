import { Typography } from "@mui/material";

const biography = `My name is Sarah and I'm passionate about user experience, efficient code, and making things make sense.

My interest in design and web development started at age 12 when I started learning HTML and CSS from free resources online. I enjoyed creating small websites for my favourite cartoon characters and making custom themes on MySpace.

After an adventurous 5 years working in Japan, I decided to return to Canada and revisit my childhood hobby of creating websites. Now, I'm focused on pursuing web development as a career.`

function About() {
  return (
    <section className="page" id="about">
      <article>
        <Typography variant="h2" className="header">About Me</Typography>
        <Typography variant="body1" component="p" style={{ whiteSpace: "pre-line", fontSize: '14pt' }}>{biography}</Typography>
        <Typography variant="body2" component="p" sx={{mt: '2em'}}>Fun fact: My older brother gifted me a book titled <strong>How to Do Everything with HTML</strong> in the early 2000's &#8212; I still own it to this day.</Typography>
      </article>
    </section>
  );
}

export default About;
