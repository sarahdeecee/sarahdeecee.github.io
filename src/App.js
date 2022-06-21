import './App.css';
import Links from './components/Links';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Links />
      <Landing />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
