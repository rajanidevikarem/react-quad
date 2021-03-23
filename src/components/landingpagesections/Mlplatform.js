import React from 'react';
import Mainmenu from '../Mainmenu';
import Footer from '../Footer';


import {  Row,Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
function Mlplatform() {
  return (
      <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="datavisual-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">ML Platforms </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="inner-content"> 
    <p>AI algorithms and advanced analytics have an immense potential into software development, offering seamless real-time decisions at scale. AI applications can perform complex and intelligent functions associated with human thinking. By capturing and analysing data from a variety of sources, which include sensors, remote inputs and microchips. Analytics Insight brings the top 5 AI platforms that transform and automate 
    the modern software development</p>
    </div>

  
    <Row className="contact">
    <Footer/>
  </Row>
    </div>
  
  );
}

export default Mlplatform;
