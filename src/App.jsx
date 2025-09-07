import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CustomCursor from "./components/customcursor/CustomCursor";
import AboutMe from "./components/aboutus/AboutUs";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workexp/WorkExp";
import ContactMe from "./components/contactme/ContactMe";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Animation controls for AboutUs
  const aboutControls = useAnimation();
  const aboutRef = React.useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Animation duration
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAboutInView) {
      aboutControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
    } else {
      aboutControls.start({ opacity: 0, y: 50 });
    }
  }, [isAboutInView, aboutControls]);

  return (
    <div className="app">
      <CustomCursor />
      {isLoading && (
        <div className="loader">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`rectangle rectangle-${index + 1}`}
            ></div>
          ))}
        </div>
      )}
      <div className="layout">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}