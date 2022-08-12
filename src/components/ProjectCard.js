import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "./ProjectCarousel";

function ProjectCard(props) {
  const {title, description, images, deployLink, githubLink} = props;

  const handleProjectCard = e => {
    // setCurrentProject({data: {title, description, images, deployLink, githubLink}, open: true});
    console.log('handleProjectCard');
  }

  return (
    <Card variant="outlined" sx={{ height: "100%"}} className="project-card">
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
      </CardContent>
        <SwipeableTextMobileStepper images={images} />
        <CardContent>
        <CardActionArea>
          <Typography variant="body2" component="p">{description}</Typography>
        </CardActionArea>
      </CardContent>
      <CardActions sx={{justifyContent: "space-evenly"}}>
        <Button variant="outlined" href={deployLink} target="_blank" disabled={!deployLink}>Link</Button>
        <Button variant="outlined" href={githubLink} target="_blank" disabled={!githubLink}>GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;