import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;