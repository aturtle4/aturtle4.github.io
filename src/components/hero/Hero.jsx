import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const roleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 + 0.6, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  const roles = ["Developer", "Designer", "Researcher"];

  return (
    <section className="hero">
      {/* Circle is now static */}
      <div className="hero-circle" />
      
      <div className="hero-text">
        {/* Greeting */}
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hey, I'm
        </motion.p>

        {/* Name (static, bold) */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Armaan
        </motion.h1>

        {/* Roles (staggered fade from left) */}
        <div className="hero-roles">
          {roles.map((role, i) => (
            <motion.p
              key={role}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={roleVariants}
            >
              {role}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
