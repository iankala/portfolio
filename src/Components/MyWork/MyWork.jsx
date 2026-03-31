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
                
                <a  target="_blank"
                  rel="noreferrer"
                  href="https://e-commerce-frontend-five-virid.vercel.app/"
                >
                  <img src={work.w_img} alt={work.w_name} />
                </a>
                <h3>{work.w_name}</h3>
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