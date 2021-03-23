import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';
function Footer() {
  return (
   
    <Container fluid>
    <div className="footer-section">
  
    <Container>
      <Row>
        <Col md="4">
        <h3 className="footer-sec-head"> About Us </h3>
        <img alt="logofooter" src={require("../images/logofooter.png")} className="img-fluid pad footer-logo"/>

        <p className="footer-sec-para">
        Quadratic Technology Solutions is a value added company that provides key IT consulting services, 
        specializing in providing business intelligence solutions to our clients.
        </p>
        </Col>
        <Col md="4">
        <h3 className="footer-sec-head"> Quick Links</h3>
        <ul className="quick-link">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/capabilites/">Capabilities</a></li>
         
          <li><a href="/globalworkforce">Global Workforce</a></li>
          <li><a href="/products/">Products</a></li>
        
          <li><a href="/contact/">Contact</a></li>
        </ul>
        </Col>
        <Col md="4">
        <h3 className="footer-sec-head"> Locations</h3>
        <Row>
          <Col md="7"> <div className="footer-address">
        <h4 className="address"> USA</h4>
         <p>1100 E. Woodfield Rd Ste 109</p>
         <p> Schaumburg, IL 60173.</p>
         <p> Ph: 1-847-440-2283 </p>
         </div></Col>
          <Col md="5" className="no-padding">      <div className="footer-address">
    <h4 className="address"> India</h4>
   <p>5A1 Melange Towers</p> 
   <p>Madhapur, Hyderabad</p>
   <p>Ph: 91-800-815-5200</p>
   </div></Col>
        </Row>
       
       
    
        </Col>
        <div className="clearfix"></div>
      </Row>
      
      <Row className=""> 
  <Col>
  <p className="text-center mt-5"> Copyrights &copy; 2021 Quadratic Systems</p>
</Col>
    </Row>
    </Container>
  
    </div>
    </Container>

  );
}

export default Footer;
