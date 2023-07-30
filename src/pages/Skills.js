import { Avatar, Card, CardActionArea, CardMedia, Chip, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import stack from '../data/stack';
import { Box } from "@mui/system";

function Skills() {
  const categories = ['language', 'framework', 'database', 'design', 'testing', 'other'];

  const languages = stack.filter(elem => elem.type === 'language');
  const frameworks = stack.filter(elem => elem.type === 'framework');
  const databases = stack.filter(elem => elem.type === 'database');
  const designs = stack.filter(elem => elem.type === 'design');
  const testings = stack.filter(elem => elem.type === 'testing');
  const others = stack.filter(elem => elem.type === 'other');

  const toCamelCase = string => {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  const parseStack = array => array.map(stack => 
    <Chip
      variant="filled"
      label={stack.title}
      avatar={<Avatar alt={stack.title} src={stack.src} variant="square" imgProps={{objectFit: 'scale-down'}}/>}
      sx={{p: 1, mb: 1, mr: 1, fontSize: '1em', bgcolor: 'background.paper'}}
    />
  );

  return (
    <section className="page" id="skills">
      <article>
        <Typography variant="h2" className="header">Skill Stack</Typography>
        <Typography variant="h4" gutterBottom component="h3">Languages</Typography>
          {parseStack(languages)}
        <Typography variant="h4" gutterBottom component="h3">Frameworks</Typography>
          {parseStack(frameworks)}
        <Typography variant="h4" gutterBottom component="h3">Databases</Typography>
          {parseStack(databases)}
        <Typography variant="h4" gutterBottom component="h3">Design</Typography>
          {parseStack(designs)}
        <Typography variant="h4" gutterBottom component="h3">Testing</Typography>
          {parseStack(testings)}
        <Typography variant="h4" gutterBottom component="h3">Other</Typography>
          {parseStack(others)}
      </article>
    </section>
  );
}

export default Skills;
