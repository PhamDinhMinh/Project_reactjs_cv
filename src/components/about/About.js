import React from "react";
import "./about.css";
import ME from "../../asset/me_about.png";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about_card">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5>Client</h5>
              <small>100+ Client</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>50 completed</small>
            </article>
          </div>
          <p>
            Chào bạn, mình là minh. Mình đến từ thành phố chicago của thủ đô nước nào đó
            Rất vui khi được làm quen và gặp gỡ bạn. Chúng ta từng quen nhau chăng. Đây la một
            vài thông tin của tôi và từ tôi.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
