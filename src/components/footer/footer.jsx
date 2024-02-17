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
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://github.com">
          <FaLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
