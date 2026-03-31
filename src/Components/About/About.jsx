import React from "react";
import "./About.css";

import profile_img from "../../assets/mine.png";

const About = () => {
  return (
    <div id='about' className="About">
      <div className="about-title">
        <h1>About me</h1>
        <hr />
        
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Sofware Developer with a strong foundation in the MERN
              stack, passionate about building web applications that are both
              functional and visually compelling. From designing intuitive user
              interfaces to developing scalable server-side architectures, I
              enjoy working across the entire development stack to deliver
              complete, polished products.
            </p>
            <p>
              Based in Nairobi, Kenya, I am currently open to new opportunities
              where I can contribute, grow, and continue pushing the boundaries
              of what I can build. I am a self-driven learner who thrives on
              challenges and believes that great software is not just written —
              it is crafted with intention and care.
            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
           <div className="about-achievement">
            <h1>5</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
           <div className="about-achievement">
            <h1>10+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
