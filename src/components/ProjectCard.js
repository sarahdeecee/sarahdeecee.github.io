import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "./ProjectCarousel";

function ProjectCard(props) {
  const {title, description, images, deployLink, githubLink, setCurrentProject} = props;

  return (
    <Card variant="outlined" sx={{ height: "100%"}} className="project-card">
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
      </CardContent>
      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
        <SwipeableTextMobileStepper images={images} projectTitle={title} setCurrentProject={setCurrentProject} />
        <CardContent>
          <Typography variant="body2" component="p">{description}</Typography>
        </CardContent>
      </Box>
      <CardActions sx={{justifyContent: "space-evenly"}}>
        <Button variant="outlined" href={deployLink} target="_blank" disabled={!deployLink}>Link</Button>
        <Button variant="outlined" href={githubLink} target="_blank" disabled={!githubLink}>GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;