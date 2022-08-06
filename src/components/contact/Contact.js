import React from "react";
import "./contact.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9bdxhq9', 'template_u1mk7mo', form.current, 'dAlcibZ78BQUWnJwW')
  };
  return (
    <section id="contact">
      <h5>Get in Tounch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>Minh@gmail.com</h5>
            <a href="mailto:minh20194122@sis.hust.edu.vn" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon"/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://www.messenger.com/" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon"/>
            <h4>Whatapps</h4>
            <h5>+0345864328</h5>
            <a href="http://api.whatsapp.com/send/phone+345864328" target="_blank">Call for me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your full name" required/>
          <input type="email" name='email' placeholder="Your email" required/>
          <textarea name="message" rows="7"placeholder="Your messenge" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Messenge</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
