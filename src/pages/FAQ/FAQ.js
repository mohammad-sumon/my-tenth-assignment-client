import React from 'react';
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
        <div className="text-center">
      <h3 style={{ color: "orange" }}>Welcome to FAQ Section</h3>
      <Container className="mt-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Programming Language?</Accordion.Header>
            <Accordion.Body>
            A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is JavaScript?
            </Accordion.Header>
            <Accordion.Body>
            JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is the purpose of React?
            </Accordion.Header>
            <Accordion.Body>
            React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What is the benefits of using Github?
            </Accordion.Header>
            <Accordion.Body>
            GitHub is an online software development platform used for storing, tracking, and collaborating on software projects. It enables developers to upload their own code files and to collaborate with fellow developers on open-source projects
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
    );
};

export default FAQ;