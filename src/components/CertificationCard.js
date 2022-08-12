import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

function CertificationCard(props) {
  const {title, link, img, company, companyLink} = props;
  return (
    <Card variant="outlined" sx={{height: '100%'}}>
      <CardContent>
        <Link href={link ? link : null} underline="none" color="inherit" target="_blank">
          <Typography href={link ? link : null} variant="h6" component="div">{title}</Typography>
          <CardMedia
            component="img"
            image={img}
            alt={title}
            />
        </Link>
        <Link href={companyLink} underline="none" color="inherit" target="_blank">
          <Typography href={companyLink} variant="body1" component="p">Given by <strong>{company}</strong></Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;