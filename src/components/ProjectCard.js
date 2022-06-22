import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";

function ProjectCard(props) {
  const {title, description, image, deployLink, githubLink} = props;

  const handleProjectCard = e => {
    console.log(e.target.value);
  }

  return (
    <Card variant="outlined" sx={{ height: "100%"}} className="project-card">
      <CardActionArea onClick={handleProjectCard}>
        <Box className="project-card-image-area">
          <CardMedia
          component="img"
          className="project-img"
          image={image}
          alt={`Screenshot of ${title}`}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: "space-evenly"}}>
        <Button variant="contained" href={deployLink} target="_blank" disabled={!deployLink}>Link</Button>
        <Button variant="contained" href={githubLink} target="_blank" disabled={!githubLink}>GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;