import { Typography } from "@mui/material";

const stack = [
  { title: "HTML-5",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/html-5.svg",
  },
  { title: "CSS-3",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/css-3.svg",
  },
  { title: "JavaScript",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/javascript.svg",
  },
  { title: "Ruby",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/ruby.svg",
  },
  {title: "Node JS",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/nodejs-icon.svg",
  },
  {title: "React",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/react.svg",
  },
  {title: "Rails",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/rails.svg",
  },
  {title: "Postgres",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/postgresql.svg",
  },
  {title: "Git",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/git-icon.svg",
  },
  {title: "Sass",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/sass.svg",
  },
  {title: "Bootstrap",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/bootstrap.svg",
  },
  {title: "Material UI",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/material-ui.svg",
  },
  {title: "Cypress",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/cypress.svg",
  },
  {title: "Jest",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/jest.svg",
  },
  {title: "Storybook",
    src: "https://raw.githubusercontent.com/sarahdeecee/fcc-responsive-projects/0950210dc1a69eca717ca037b3586d202145c75b/05-personal-portfolio/data/storybook-icon.svg",
  }
];

function Stack() {
  const parsedStack = stack.map(stack => <span className="logo-box" data-toggle="tooltip" data-placement="top" title={stack.title}>
  <img src={stack.src} className="stack-logo" alt={stack.title} />
  {stack.title}
  </span>);

  return (
    <section className="page" id="stack">
      <article>
        <Typography variant="h2">Tech Stack</Typography>
        <div id="logo-container">
          {parsedStack}
        </div>
      </article>
    </section>
  );
}

export default Stack;
