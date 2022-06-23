import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const stack = [
  { title: "HTML-5",
    src: "./logos/html-5.svg",
    type: "Framework"
  },
  { title: "CSS-3",
    src: "./logos/css-3.svg",
    type: "Framework"
  },
  { title: "JavaScript",
    src: "./logos/javascript.svg",
    type: "Language"
  },
  { title: "Ruby",
    src: "./logos/ruby.svg",
    type: "Language"
  },
  {title: "Node JS",
    src: "./logos/nodejs-icon.svg",
    type: "Franework"
  },
  {title: "React",
    src: "./logos/react.svg",
    type: "Franework"
  },
  {title: "Rails",
    src: "./logos/rails.svg",
    type: "Franework"
  },
  {title: "Postgres",
    src: "./logos/postgresql.svg",
    type: "Database"
  },
  {title: "Git",
    src: "./logos/git-icon.svg",
    type: "Other"
  },
  {title: "Sass",
    src: "./logos/sass.svg",
    type: ""
  },
  {title: "Bootstrap",
    src: "./logos/bootstrap.svg",
    type: "Design"
  },
  {title: "Material UI",
    src: "./logos/material-ui.svg",
    type: "Design"
  },
  {title: "Cypress",
    src: "./logos/cypress.svg",
    type: "Testing"
  },
  {title: "Jest",
    src: "./logos/jest.svg",
    type: "Testing"
  },
  {title: "Storybook",
    src: "./logos/storybook-icon.svg",
    type: "Testing"
  }
];

function Skills() {
  const parsedStack = stack.map(stack => <Card 
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
          {parsedStack}
        </div>
      </article>
    </section>
  );
}

export default Skills;
