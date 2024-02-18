import React from "react";
import "./about.css";
import image from "../../assets/tab-thumb.jpg";
import { FaAward } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUserCheck className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FaRegFileCode className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            Versatile web developer proficient in HTML5, CSS3, JavaScript,
            ECMAScript, Tailwind CSS, and React18. Expertise lies in crafting
            accessible and standards-compliant websites, optimizing online
            visibility, and driving user engagement.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
