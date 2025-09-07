import React from "react";
import { motion } from "framer-motion";
import "./ContactMe.css";

const contacts = [
  {
    title: "Email",
    link: "mailto:armaansingh040@gmail.com",
    display: "armaansingh040@gmail.com",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/armaan-singh23/",
    display: "linkedin.com/in/armaan-singh23",
  },
  {
    title: "GitHub",
    link: "https://github.com/aturtle4",
    display: "github.com/aturtle4",
  },
  {
    title: "Phone",
    link: "tel:+917488617230",
    display: "+91 7488617230",
  },
];

const rowVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2 + 0.5, duration: 0.6, ease: "easeOut" },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const ContactMe = () => {
  return (
    <section id="contactme" className="contact-split">
      {/* Left side */}
      <motion.div
        className="contact-split-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1>
          <span className="line1">Get in</span>
          <span className="line2">Touch</span>
        </h1>
      </motion.div>

      {/* Right side */}
      <div className="contact-split-right">
        {contacts.map((item, index) => (
          <motion.div
            className="contact-row"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={rowVariants}
          >
            <span className="contact-title">{item.title}</span>
            <a
              className="contact-link"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.display}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
