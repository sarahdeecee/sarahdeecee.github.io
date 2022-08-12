import { Avatar, Card, CardActionArea, CardMedia, Chip, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import stack from '../data/stack';

function Skills() {
  const categories = ['language', 'framework', 'database', 'design', 'design', 'testing', 'other'];

  const languages = stack.filter(elem => elem.type === 'language');
  const frameworks = stack.filter(elem => elem.type === 'framework');
  const databases = stack.filter(elem => elem.type === 'database');
  const designs = stack.filter(elem => elem.type === 'design');
  const testings = stack.filter(elem => elem.type === 'testing');
  const others = stack.filter(elem => elem.type === 'other');
  
  const parseStack = array => array.map(stack => 
    <Chip
      variant="filled"
      label={stack.title}
      avatar={<Avatar alt={stack.title} src={stack.src} variant="square" imgProps={{objectFit: 'scale-down'}}/>}
      sx={{p: 1}}
    />
  );

  return (
    <section className="page" id="skills">
      <article>
        <Typography variant="h2" className="header">Skill Stack</Typography>
        <Typography variant="h4" gutterBottom component="h3">Languages</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(languages)}
        </Stack>
        <Typography variant="h4" gutterBottom component="h3">Frameworks</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(frameworks)}
        </Stack>
        <Typography variant="h4" gutterBottom component="h3">Databases</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(databases)}
        </Stack>
        <Typography variant="h4" gutterBottom component="h3">Design</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(designs)}
        </Stack>
        <Typography variant="h4" gutterBottom component="h3">Testing</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(testings)}
        </Stack>
        <Typography variant="h4" gutterBottom component="h3">Other</Typography>
        <Stack direction="row" spacing={1} sx={{mb: 2}}>
          {parseStack(others)}
        </Stack>
      </article>
    </section>
  );
}

export default Skills;
