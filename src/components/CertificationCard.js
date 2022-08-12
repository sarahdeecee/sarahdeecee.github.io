import { Box, Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material";

function CertificationCard(props) {
  const {title, link, img, company, companyLink, currentProject, setCurrentProject} = props;

  const handleDialogImage = e => {
    setCurrentProject({title: company, label: title, src: img, open: true});
  };

  return (
    <Card variant="outlined" sx={{height: '100%'}}>
      <CardContent sx={{height: '100%'}}>
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Link href={link ? link : null} underline="none" color="inherit" target="_blank">
            <Typography href={link ? link : null} variant="h6" component="div">{title}</Typography>
          </Link>
          <Box>
            <CardActionArea>
              <CardMedia
                component="img"
                image={img}
                alt={title}
                onClick={handleDialogImage}
                />
            </CardActionArea>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Typography variant="body1" component="p">
                Given by&nbsp;
                <Link href={companyLink} underline="none" color="inherit" target="_blank">
                  <strong>{company}</strong>
                </Link>
              </Typography>
              {link && <Link href={link} underline="none" color="inherit" target="_blank">
                <Typography sx={{fontWeight: 'bold'}}>Go to link</Typography>
              </Link>}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;