import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What is skill i have</h5>
      <h2>My Experiences</h2>

      <div className="container experience_container">
        <div className="experience_fontend">
          <h3>Fontend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon"/>
              <div>
                <h4>Reactjs</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Flash</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Fackend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>PHP</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>Java</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text_light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
