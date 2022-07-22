import About from '../pages/About';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import ContentFooter from './Footer';

const tabs = [
  {
    text: "landing",
    component: <Landing key="landing" />
  },
  {
    text: "about",
    component: <About key="about" />
  },
  {
    text: "certifications",
    component: <Certifications key="certifications" />
  },
  {
    text: "projects",
    component: <Projects key="projects" />
  },
  {
    text: "skills",
    component: <Skills key="skills" />
  },
  {
    text: "contact",
    component: <Contact key="contact" />
  }
]

function Content(props) {
  // const {page} = props;

  // const useScrollSpy = ({ items = [], target = window } = {}) => {
  //   useScrollSpy

  const parsedTabs = tabs.map(tab => tab.component);

  return (
    <>
      {parsedTabs}
      <ContentFooter />
    </>
  );
}

export default Content;