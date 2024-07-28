import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaTwitter className="icons" />
          </a>
          <a href="https://www.gitHub.com" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;