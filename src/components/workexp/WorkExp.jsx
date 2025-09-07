import React from "react";
import { motion } from "framer-motion";
import "./WorkExp.css";

const workData = [
    {
    year: "Jan 2025 – Present",
    company: "Creative Interface Lab, IIITD",
    role: "Student Researcher – Shape Shifting Displays",
    description: [
      "Research on novel shape-changing display systems for TUIs.",
      "Prototyped modular pin-based display for dynamic surfaces & HCI/robotics.",
    ],
    image: "https://cilab.iiitd.edu.in/wp-content/uploads/2024/06/logo-1.png",
    link: "https://cilab.iiitd.edu.in/",
  },
  {
    year: "May 2024 – Jul 2024; May 2025 – Aug 2025",
    company: "L&T Technical Solutions",
    role: "Intern",
    description: [
      "Built full-stack SOME/IP injection platform.",
      "Delivered proof-of-concept for BMW infotainment integration (85% success).",
      "Automated performance assessments (Python, DLT traces, ADB).",
      "Streamlined HMI validation (80% reduced manual effort).",
    ],
    image: "data:image/png;base64,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",
    link: "https://www.ltts.com/",
  },
  {
    year: "Apr 2024 – Mar 2025",
    company: "IIIT Delhi",
    role: "Software Developer",
    description: [
      "Automated seat allocation for 200+ M.Tech students.",
      "Built front-end portal improving navigation speed by 30%.",
    ],
    image: "https://iiitd.ac.in/sites/default/files/style3colorsmall.png",
    link: "https://iiitd.ac.in/",
  },
  
];

const WorkExperience = () => {
  return (
    <section id="workexp" className="workexp">
      <motion.h2
        className="workexp-title"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="workexp-list">
        {workData.map((job, i) => (
          <motion.div
            className="workexp-item"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left column (Text) */}
            <div className="workexp-text">
              <span className="workexp-year">{job.year}</span>
              <h3 className="workexp-company">{job.company}</h3>
              <p className="workexp-role">{job.role}</p>
              <ul className="workexp-description">
                {job.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right column (Image/Logo) */}
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="workexp-image-wrapper"
            >
              <img src={job.image} alt={job.company} className="workexp-image" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
