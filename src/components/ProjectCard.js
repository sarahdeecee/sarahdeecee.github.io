import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "./ProjectCarousel";
import StackChip from "./StackChip";

function ProjectCard(props) {
  const {title, description, images, stack, deployLink, githubLink, setCurrentProject} = props;

  const stackChips = stack.map(chip => <StackChip stack={chip} />);
  
  return (
    <Card variant="outlined" sx={{ height: "100%"}} className="project-card">
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
      </CardContent>
      <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
        <SwipeableTextMobileStepper images={images} projectTitle={title} setCurrentProject={setCurrentProject} />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">{description}</Typography>
          <Typography gutterBottom variant="h5" component="h4">Stack</Typography>
          {stackChips}
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