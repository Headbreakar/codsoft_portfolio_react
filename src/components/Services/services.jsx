import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Craft interfaces prioritizing user needs, enhancing usability,
                and satisfaction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop intuitive navigation systems for seamless user
                interaction and engagement.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ensure a visually cohesive design language across all UI
                elements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create designs optimized for diverse devices and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Rapidly produce interactive prototypes for user testing and
                feedback.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                mplement accessible design practices for an inclusive user
                experience.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build sites that adapt seamlessly to various devices and screen
                sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Ensure consistent performance across different web browsers.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Write clean, optimized code for improved website speed and
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop modular, scalable structures to accommodate future
                growth and changes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Implement robust security protocols to safeguard against
                potential cyber threats.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create intuitive, easy-to-navigate interfaces for enhanced user
                experience.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create smooth and professional transitions between video clips
                for visual continuity.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Enhance video aesthetics by adjusting colors and tones for a
                polished look.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {" "}
                Ensure clear and balanced audio levels, removing background
                noise for better sound.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Edit videos to maintain a compelling and engaging storytelling
                pace.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrate visual effects and enhancements to elevate the video's
                visual appeal.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Tailor videos for specific platforms, optimizing resolution and
                aspect ratios accordingly.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
