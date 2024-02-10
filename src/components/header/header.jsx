import React from "react";
import "./header.css";
import CallToAction from "./CallToAction";
import Me from "../../assets/me.png";
import Socials from "./Socials";

const header = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello, I am </h5>
        <h1>Prem Kumar</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CallToAction />
        <Socials />
        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#contant" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
