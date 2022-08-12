import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, DialogContent, DialogTitle, Link, Typography } from "@mui/material";

function ProjectImageDialog(props) {
  const {image, label, title} = props;

  return (<>
    <DialogTitle>{`${title}: ${label}`}</DialogTitle>
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