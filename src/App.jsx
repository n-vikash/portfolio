import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";


function App() {
  useEffect(() => {
  window.history.scrollRestoration = "manual";

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
  return (
    <>
      <StarBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;