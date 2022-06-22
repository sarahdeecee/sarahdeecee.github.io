import { Card, CardContent, Link, Typography } from "@mui/material";

function CertificationCard(props) {
  const {title, link, company, companyLink} = props;
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Link href={link}>
          <Typography variant="h5" component="div">{title}</Typography>
        </Link>
        <Link href={companyLink}>
          <Typography variant="body1" component="div">{company}</Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;