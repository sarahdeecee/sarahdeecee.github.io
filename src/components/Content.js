import About from '../pages/About';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import ContentFooter from './Footer';

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function Content(props) {
  const {currentProject, setCurrentProject, particles, setParticles} = props;

  const { scrollYProgress } = useScroll();

  // const useScrollSpy = ({ items = [], target = window } = {}) => {
  //   useScrollSpy


  const tabs = [
    {
      text: "landing",
      component: <Landing key="landing" particles={particles} setParticles={setParticles} />
    },
    {
      text: "about",
      component: <About key="about" />
    },
    {
      text: "certifications",
      component: <Certifications key="certifications" currentProject={currentProject} setCurrentProject={setCurrentProject} />
    },
    {
      text: "projects",
      component: <Projects key="projects" currentProject={currentProject} setCurrentProject={setCurrentProject} />
    },
    {
      text: "skills",
      component: <Skills key="skills" />
    },
    {
      text: "contact",
      component: <Contact key="contact" />
    }
  ];
  
  const parsedTabs = tabs.map(tab => tab.component);

  return (<>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {parsedTabs}
      <ContentFooter />
    </>
  );
}

export default Content;