import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Services from "./components/Services/services";
import Testimonials from "./components/testimonials/testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
        inventore.
      </p>
    </>
  );
};

export default App;
