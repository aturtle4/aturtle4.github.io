import React from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "C++", "SQL", "HTML", "CSS", "JS", "C#", "Kotlin"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Selenium", "Maven", "React", "FastAPI", "Flask", "OpenGL", "Jetpack Compose"],
  },
  {
    category: "Tools & Platforms",
    items: ["Figma", "Miro", "Android Studio", "Linux", "VS Code", "Unity", "Fusion360", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-columns">
        {skillsData.map((skill, index) => (
          <div className="skills-column" key={index}>
            <h2 className="skills-category">{skill.category}</h2>
            <ul className="skills-items">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
