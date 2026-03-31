import React from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d2577159-a4d7-48cc-a5af-03b1b62e41d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <hr />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            I'm open to collaboration and trying out new ideas. Im only one
            message away
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              {" "}
              <img src={mail_icon} alt="" />
              <p>iankala12814@gmail.com</p>
            </div>
            <div className="contact-detail">
              {" "}
              <img src={call_icon} alt="" />
              <p>+254713657070</p>
            </div>
            <div className="contact-detail">
              {" "}
              <img src={location_icon} alt="" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">your Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit
          </button>
          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
