import React, { useState } from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

const Nav = () => {
  const [active, setActive] = useState("");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => handleClick("#")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => handleClick("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => handleClick("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => handleClick("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => handleClick("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <TiContacts />
      </a>
    </nav>
  );
};

export default Nav;
