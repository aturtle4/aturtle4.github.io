import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import profileImg from "../../assets/profile_pic.jpg";

const AboutMe = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const paragraph1 = "I am an engineer and researcher passionate about designing and building innovative, tangible interfaces and scalable engineering solutions. My work bridges the gap between technology and human experience, creating systems that are both efficient and intuitive.";
  const paragraph2 = "I focus on turning complex ideas into practical, impactful solutions that enhance the way people interact with technology.";

  // Split into lines (for simplicity, we split by sentences here)
  const lines1 = paragraph1.split(". ").filter(Boolean).map(l => l + ".");
  const lines2 = paragraph2.split(". ").filter(Boolean).map(l => l + ".");

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      {/* Left Column */}
      <motion.div
        className="about-left"
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={profileImg} alt="Profile" className="about-img" />
      </motion.div>

      {/* Right Column */}
      <div
        className="about-right"
        onMouseEnter={() => setIsHoveringText(true)}
        onMouseLeave={() => setIsHoveringText(false)}
      >
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {lines1.map((line, idx) => (
            <motion.p
              key={idx}
              className="about-text-1"
              variants={lineVariants}
              transition={{ duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }} // delayed start
        >
          {lines2.map((line, idx) => (
            <motion.p
              key={idx}
              className="about-text-2"
              variants={lineVariants}
              transition={{ duration: 0.6 }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHoveringText ? "40px" : isHoveringImage ? "50px" : "30px",
          height: isHoveringText ? "40px" : isHoveringImage ? "50px" : "30px",
          background: isHoveringText
            ? "#fbfbfb"
            : isHoveringImage
            ? "rgba(0,0,0,0.4)"
            : "#1f1f1f",
        }}
      />
    </section>
  );
};

export default AboutMe;
