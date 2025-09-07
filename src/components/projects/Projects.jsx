import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

import tyleImg from "../../assets/Tylelogo.png";
import leapcodeImg from "../../assets/leapcode_dark_logo.png";
import flashfeedImg from "../../assets/flashfeed_logo.png";

const projectData = [
  {
    title: "Shape Changing Interfaces",
    description:
    "Research project exploring novel shape-shifting displays for Tangible User Interfaces (TUIs), inspired by MIT's TRANSFORM project [Tang2014; https://tangible.media.mit.edu/project/transform/]. Prototyped modular pin-based surfaces enabling adaptive physical interactions in HCI and robotics. (Paper under review, placeholder image used.)",   
    image: "data:image/jpeg;base64,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",
  },
    {
    title: "Tyle Browser",
    description:
    "A Chromium-based browser with a built-in tiling window manager, designed for keyboard-driven navigation and multitasking. Inspired by OS-based tiling managers like i3wm and qtile, it enables users to efficiently organize and manage multiple web pages in a spatial, customizable workspace.",
    link: "https://github.com/aturtle4/TyleBrowser",
    image: tyleImg,
    },
  {
    title: "LeapCode",
    description:
      "Block-based programming platform bridging creative exploration and structured problem-solving. Built features like classrooms, forums, and roadmaps to boost usability and engagement.",
    link: "https://github.com/aturtle4/LeapCode",
    image: leapcodeImg
  },
  {
    title: "Roamify",
    description:
      "Intelligent travel assistant that generates custom itineraries from user preferences. Built in a 5-person team, scraping travel blogs and integrating a Django backend with dynamic UI.",
    link: "https://github.com/Roamify-Research",
    image: "https://avatars.githubusercontent.com/u/169724313?s=200&v=4",
  },    
  {
    title: "Flash Feed",
    description:
      "Android news app featuring a short-form video based feed with MVVM architecture. Integrated text-to-speech, localization, and adaptive content loading.",
    link: "https://github.com/aturtle4/FlashFeed",
    image: flashfeedImg
 },
];


const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-list">
        {projectData.map((project, i) => (
          <motion.div
            className="project-item"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              View Project →
            </a>

            {/* Inline expanding image */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  className="project-preview"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;