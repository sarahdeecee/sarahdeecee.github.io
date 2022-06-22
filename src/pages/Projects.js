import { Button, Card, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData"

function Projects() {
  const loadingProject = <Grid item xs={12} sm={6} lg={4}>
    <Card variant="outlined" sx={{ height: "100%"}} className="project-card">
      <Skeleton variant="rectangular" height={300} />
      <Box sx={{ pt: 1 }}>
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
      </Box>
    </Card>
  </Grid>;
  const loadingProjects = <>{loadingProject}{loadingProject}{loadingProject}</>;
  const reverseProjects = projects.slice(0).reverse(); //change order from newest to oldest
  const parsedProjects = projects? reverseProjects.map(project => <Grid item xs={12} sm={6} lg={4} key={`grid-${project.title}`}><ProjectCard key={project.title} {...project} /></Grid>) : loadingProjects;
  
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
