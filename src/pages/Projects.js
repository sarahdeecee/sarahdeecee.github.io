import { Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Page",
    description: "Personal portfolio page designed in HTML, CSS and Bootstrap.",
    deployLink: "",
    image: "https://github.com/sarahdeecee/fcc-responsive-projects/blob/main/05-personal-portfolio/data/project-portfolio.png?raw=true",
  },
  {
    title: "Technical Documentation Page",
    description: "A responsive page showing a sample of Vue documentation.",
    deployLink: "https://codepen.io/s_dc/details/xxPMgNK",
    image: "https://github.com/sarahdeecee/fcc-responsive-projects/blob/main/05-personal-portfolio/data/project-doc-page.png?raw=true",
  }
]

function Projects() {
  const parsedProjects = projects.map(project => <ProjectCard {...project} />);

  return (
    <section className="page" id="projects">
      <article>
        <Typography variant="h2">Projects</Typography>
        {parsedProjects}      
      </article>
    </section>
  );
}

export default Projects;
