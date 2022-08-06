import React from "react";
import "./services.css";
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer!</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>UI?UX Design</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="serviceslist_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="services_list_icon" />
              <p>Lorem, ipsum dolar sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
