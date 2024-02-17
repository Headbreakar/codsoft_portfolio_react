import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xuhnro1", "template_4qufxkl", form.current, {
        publicKey: "nIh64cxpSsDHTf-6L-HKt-mz1y",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="iconn" />
            <h4>Email</h4>
            <h5>kumarprem22855@gmail.com</h5>
            <a href="mailto:kumarprem22855@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="iconn" />
            <h4>WhatsApp</h4>
            <h5>+92 335 3652669</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923353652669"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            name="mail"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message to me"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Button
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
