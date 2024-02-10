import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/prem-kumar-3ba152274/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Headbreakar" target="_blank">
        <FaGithub />
      </a>
      <a href="https://github.com/Headbreakar" target="_blank">
        <FaCode />
      </a>
    </div>
  );
};

export default Socials;
