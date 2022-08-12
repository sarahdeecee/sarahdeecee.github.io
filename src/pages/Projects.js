import { Card, Dialog, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SwipeableTextMobileStepper from "../components/ProjectCarousel";
import ProjectImageDialog from "../components/ProjectImageDialog";
import projects from "../data/projectsData"

function Projects(props) {
  const {currentProject, setCurrentProject} = props;

  const handleProjectDialogClose = e => {
    setCurrentProject({...currentProject, open: false})
  }
  
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
  const parsedProjects = projects ? reverseProjects.map(project => 
    <Grid item xs={12} sm={6} lg={4} key={`grid-${project.title}`}>
      <ProjectCard key={project.title} {...project} setCurrentProject={setCurrentProject} />
    </Grid>) 
    : loadingProjects;
  
  return (
    <section className="page" id="projects">
      <article>
        <Typography variant="h2" className="header">Projects</Typography>
        <Grid container spacing={3}>
          {parsedProjects}
        </Grid>
      <Dialog maxWidth="lg" scroll="paper" open={currentProject.open} onClose={handleProjectDialogClose}>
        <ProjectImageDialog image={currentProject.src} label={currentProject.label} title={currentProject.title} />
      </Dialog>
      </article>
    </section>
  );
}

export default Projects;
