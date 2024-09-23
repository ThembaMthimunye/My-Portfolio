import { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ContactPage from "./Components/ContactPage";


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
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Project /></section>
                <section id="contact"><Contact /></section>
                <footer><Footer /></footer>
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />
         
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
