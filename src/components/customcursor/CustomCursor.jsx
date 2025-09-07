import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("#1F1F1F");
  const [cursorScale, setCursorScale] = useState(1);

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    const checkHover = (e) => {
      const target = e.target;

      if (target.closest(".hero-circle")) {
        setCursorColor("#1f1f1f"); // Slate Gray over circle
        setCursorScale(2);
      } else if (
        target.closest(".hero-text") ||
        target.closest("a")
      ) {
        setCursorColor("#FBFBFB"); // White over text/links
        setCursorScale(2);
      } else {
        setCursorColor("#1F1F1F"); // Default dark
        setCursorScale(1);
      }
    };
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePos.x - 10,
        y: mousePos.y - 10,
        scale: cursorScale,
        backgroundColor: cursorColor,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
