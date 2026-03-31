import React, { useState } from "react";
import "./MyWork.css";

import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data
          .sort((a, b) => a.w_no - b.w_no)
          .map((work, index) => {
            return (
              <div key={index} className="mywork-item">
                <div className="mywork-image-wrapper">
                  <img src={work.w_img} alt={work.w_name} />
                  <div className="mywork-overlay">
                    
                    <a  href={work.w_live}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      View Live
                    </a>
                    
                    <a  href={work.w_github}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="mywork-info">
                  <div className="mywork-header">
                    <h3>{work.w_name}</h3>
                    
                   <a   href={work.w_github}
                      target="_blank"
                      rel="noreferrer"
                      className="mywork-github"
                    >
                      <img src={work.w_icon} alt="GitHub" />
                    </a>
                  </div>

                  <div className="mywork-tech">
                    {work.w_tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <p className="mywork-short-desc">{work.w_short_desc}</p>
                  {expandedIndex === index && (
                    <p className="mywork-full-desc">{work.w_desc}</p>
                  )}
                  <button
                    className="read-more-btn"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;