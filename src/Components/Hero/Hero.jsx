import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import cv from "../../assets/IANKALA CV.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        I'm <span>Ian Kala</span>, a passionate Full-Stack Developer based in
        Nairobi, Kenya.
      </h1>{" "}
      <p>
        Specializing in building modern, scalable web applications using the
        MERN stack — MongoDB, Express.js, React, and Node.js. I craft seamless
        user experiences on the frontend while architecting robust, efficient
        systems on the backend. I am currently open to work and eager to bring
        ideas to life through clean code and thoughtful design. Let's build
        something great together.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">
          <a href={cv} target="_blank" rel="noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
