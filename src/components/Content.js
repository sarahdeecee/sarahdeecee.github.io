import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Projects from '../pages/Projects';
import Stack from '../pages/Stack';

class Content extends App {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <main id="content">
        <Landing />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    );
  }
}

export default Content;