import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import stack from '../data/stack';

function Skills() {
  const languages = stack.filter(elem => elem.type === 'language');
  const frameworks = stack.filter(elem => elem.type === 'framework');
  const databases = stack.filter(elem => elem.type === 'database');
  const designs = stack.filter(elem => elem.type === 'design');
  const others = stack.filter(elem => elem.type === 'other');
  
  const parseStack = array => array.map(stack => <Card 
    key={stack.title}
    variant="outlined"
    className="logo-box"
    data-toggle="tooltip" data-placement="top"
    title={stack.title}
    p={3}
  >
    <CardActionArea className="logo-box" sx={{display: 'flex', width: '100%', padding: '1em', alignContent: 'center', justifyContent: 'center'}}>
      <CardMedia
        component="img"
        src={stack.src}
        className="stack-logo"
        alt={stack.title}
        sx={{pb: 1}}/>
      <Typography variant="body1">{stack.title}</Typography>
    </CardActionArea>
  </Card>);

  return (
    <section className="page" id="skills">
      <article>
        <Typography variant="h2" className="header">Tech Stack</Typography>
        <div id="logo-container">
          {parseStack(languages)}
          {parseStack(frameworks)}
          {parseStack(databases)}
          {parseStack(designs)}
          {parseStack(others)}
        </div>
      </article>
    </section>
  );
}

export default Skills;
