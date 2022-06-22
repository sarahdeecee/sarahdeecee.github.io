import About from '../pages/About';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Stack from '../pages/Stack';
import ContentFooter from './Footer';

function Content(props) {
  const {page} = props;
  return (
    <main id="content">
      <Landing />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <ContentFooter />
    </main>
  );
}

export default Content;