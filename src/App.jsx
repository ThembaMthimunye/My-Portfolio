import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ContactPage from "./Components/ContactPage/ContactPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <Hero />
                  </section>
                  <section id="about">
                    <About />
                  </section>

                  <section id="skills">
                    <Skills />
                  </section>

                  <section id="projects">
                    <Project />
                  </section>

                  <section>
                    <Contact/>
                  </section>
                  <footer>
                    <Footer />
                  </footer>
                </>
              }
            />

            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
