import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Task Tracking Application",
    github: "https://github.com/Headbreakar/task_Management",
    demo: "https://taskmanagementcodsoft.netlify.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Merciado Park",
    github: "https://github.com/Headbreakerr/Merciado-Park",
    demo: "https://merciadopark.netlify.app",
  },
  {
    id: 3,
    image: img3,
    title: "Codsoft Product Catalog",
    github: "https://github.com",
    demo: "https://merciadopark.netlify.app",
  },
  {
    id: 4,
    image: img4,
    title: "Catch the bubble Fish Game",
    github: "https://github.com/Headbreakar",
    demo: "https://bubblefish.netlify.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Soundwalker Electronic Music Space",
    github: "https://github.com/Headbreakar",
    demo: "https://soundwalker-landing-page.vercel.app/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, github, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
