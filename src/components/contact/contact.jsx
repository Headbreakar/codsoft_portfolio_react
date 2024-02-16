import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail />
            <h4>Email</h4>
            <h5>kumarprem22855@gmail.com</h5>
            <a href="mailto:kumarprem22855@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <TfiEmail />
            <h4>WhatsApp</h4>
            <h5>+92 335 3652669</h5>
            <a href="https://api.whatsapp.com/send/?phone=+923353652669">
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default contact;
