import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        PREM KUMAR
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/prem_kumar156/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/prem-kumar-3ba152274/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Headbreakar">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
