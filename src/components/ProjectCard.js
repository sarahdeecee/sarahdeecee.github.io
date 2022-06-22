import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";

function ProjectCard(props) {
  const {title, description, image, deployLink, githubLink} = props;

  const handleProjectCard = e => {
    console.log(e.target.value);
  }

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardActionArea onClick={handleProjectCard}>
        <CardMedia
          component="img"
          class="project-img"
          image={image}
          alt={`Screenshot of ${title}`}
          />
        <CardContent>
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: "space-evenly"}}>
        <Button href={deployLink}>Link</Button>
        <Button href={githubLink}>GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;