import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "CSS3", level: 85 },
        { name: "HTML5", level: 90 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "REST APIs", level: 85 },
        { name: "Postman", level: 80 },
        
      ],
    },
  ];

  return (
    <div id="skills" className="skills">
        <div>
      <h1>My Skills</h1>
      <hr />
        </div>
      <div className="skills-container">
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} className="skill-group">
            <h2>{skillGroup.category}</h2>
            <div className="skills-list">
              {skillGroup.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;