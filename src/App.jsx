import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Services from "./components/Services/services";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
};
export default App;
