import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/layout/NavBar";
import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { TerminalConsole } from "./components/sections/TerminalConsole";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", minHeight: "100vh" }}>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <TerminalConsole />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
