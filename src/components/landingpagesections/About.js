import React from 'react';
// import aboutbg from '../../images/aboutbg.svg';
import { Container, Row, Col } from 'reactstrap';
import Mainmenu from '../Mainmenu';

import Aboutheader from '../landingpagesections/Aboutheader';
import Footer from '../Footer';
import Slide from 'react-reveal/Slide';


function About() {
  return (
    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
  <Aboutheader/>
  
 
    <Container fluid>
      <div id="about-section" className="about">
        
        <Row className="about-content">
        <Slide left duration={3000}> 
          <Col md={{ size: 10, offset: 1 }}> <Slide left duration={3000}><div> <p className="para">Quadratic Systems Inc. founded in 1998 is an Advanced Analytics and digital
          transformation software and services firm based in Chicago, Illinois.
          We are primarily focused on helping our customers adopt and implement a plethora of digital
        transformation opportunities including but not limiting to:</p></div></Slide></Col>
        </Slide>
        </Row>

        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Row>
              <Col md="10">
              <Slide right duration={3000}> 
                <ul className="aboutList">
                  <li>Cloud Adoption</li>
                  <li>Dev Ops</li>
                  <li>Mobile First</li>
                  <li>Pure-play Analytics including </li>
                  <li>Machine Learning and AI</li>
                </ul>
                </Slide>
              </Col>
            
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
    <Row className="contact">
    <Footer/>
  </Row>
</div>
  );
}

export default About;
