import { useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedLines from "./components/AnimatedLines";
import HeroV3 from "./components/HeroV3.jsx";

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
      <Header />
      <HeroV3 />
      <About />
      <Skills />
      <Activities />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
