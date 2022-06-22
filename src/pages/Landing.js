import { Typography } from "@mui/material";

function Landing() {
  return (
    <section className="page" id="welcome">
      <article id="bio">
        <Typography variant="h4" component="p">Hello! My name is</Typography>
        <Typography variant="h1" component="p" id="name">Sarah Dela Cruz.</Typography>
        <Typography variant="h4" component="p">I'm a <strong>web developer</strong> from Ontario, Canada.</Typography>
      </article>
    </section>
  );
}

export default Landing;

