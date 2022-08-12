import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, DialogContent, DialogTitle, Link, Typography } from "@mui/material";

function ProjectImageDialog(props) {
  const {image, title} = props;
  console.log('src: ', image);

  return (<>
    <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box
          component="img"
          className="project-img"
          src={image}
          alt={`Screenshot of ${title}`}
        />
      </DialogContent>
    </>
  );
}

export default ProjectImageDialog;