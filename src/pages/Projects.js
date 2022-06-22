import { Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData"

function Projects() {
  const parsedProjects = projects.map(project => <Grid item xs={12} sm={6} lg={4} key={`grid-${project.title}`}><ProjectCard key={project.title} {...project} /></Grid>);

  return (
    <section className="page" id="projects">
      <article>
        <Typography variant="h2">Projects</Typography>
        <Grid container spacing={3}>
          {parsedProjects}
        </Grid>      
      </article>
    </section>
  );
}

export default Projects;
