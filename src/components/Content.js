import About from '../pages/About';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Stack from '../pages/Stack';

function Content(props) {
  const {page} = props;
  return (
    <main id="content">
      {(page === 'landing') && 
        <Landing />}
      {(page === 'about') &&
        <About />}
      {(page === 'projects') &&
      <Projects />}
      {(page === 'stack') &&
      <Stack />}
      {(page === 'contact') &&
      <Contact />}
    </main>
  );
}

export default Content;