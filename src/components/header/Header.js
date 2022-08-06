import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../asset/anh1.jpg";
import HeaderSocial from "./headerSocial";

const Header = () => {
  return (
    <header>
      <div class="container header_container">
        <h5>Hello I'm</h5>
        <h1>MR Minh</h1>
        <h5 class="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
