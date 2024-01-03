import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3s89s0d', 'template_wq9hw5m', form.current, '0ZZyMHacXUxiHfOVc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="contact" id="contact">
    <Container>
      <Row className="align-items-center">
      <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
            }
          </TrackVisibility>
      </Col>
      <Col size={12} md={6}>
      <h2>Get In Touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required/>
        <label>Email</label>
        <input type="email" name="from_email" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <button type="submit"><span>Send message</span></button>
      </form>

      </Col>
      </Row>
    </Container>
    </section>
  );
};