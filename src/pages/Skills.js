import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import stack from '../data/stack';

function Skills() {
  const languages = stack.filter(elem => elem.type === 'language');
  const frameworks = stack.filter(elem => elem.type === 'framework');
  const databases = stack.filter(elem => elem.type === 'database');
  const designs = stack.filter(elem => elem.type === 'design');
  const testings = stack.filter(elem => elem.type === 'testing');
  const others = stack.filter(elem => elem.type === 'other');
  
  const parseStack = array => array.map(stack => <Grid item>
    <Card 
      key={stack.title}
      variant="outlined"
      className="logo-box"
      data-toggle="tooltip" data-placement="top"
      title={stack.title}
      p={3}
    >
      <CardActionArea className="logo-box" disableRipple sx={{display: 'flex', width: '100%', height: '100%', padding: '1em', justifyContent: 'space-between'}}>
        <CardMedia
          component="img"
          src={stack.src}
          className="stack-logo"
          alt={stack.title}
          sx={{pb: 1}}/>
        <Typography variant="body1">{stack.title}</Typography>
      </CardActionArea>
    </Card>
  </Grid>);

  return (
    <section className="page" id="skills">
      <article>
        <Typography variant="h2" className="header">Tech Stack</Typography>
        <Grid container id="logo-container" direction="column">
          <Grid container>
            <Grid item>
              <Typography variant="h3">Languages</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(languages)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Frameworks</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(frameworks)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Databases</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(databases)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Design</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(designs)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Testing</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(testings)}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Other</Typography>
            </Grid>
            <Grid container direction="row">
              {parseStack(others)}
            </Grid>
          </Grid>
        </Grid>
      </article>
    </section>
  );
}

export default Skills;
