import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap';
import Mainmenu from '../Mainmenu';
import Footer from '../../components/Footer';
function Contact() {
  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <Container fluid className="no-padding"> 
      
        <div className="page-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Contact</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    
    <div id="contact-section">
  
    
    <Container>
    <Row className="mt-10 mb-5"> 

    <Col md="3">
    <img alt="data " src={require("../../images/chicago.jpg")} className="img-fluid rounded-img"/>
    </Col>
    <Col md="3">
    <h3 className="address"> USA</h3>
         <p>1100 E. Woodfield Rd Ste 109</p>
         <p> Schaumburg, IL 60173.</p>
         <p> Ph: 1-847-440-2283 </p>
          <hr/>
          <p>222 W Merchandise Mart Plaza</p>
         <p> #1212, Chicago, IL 60654</p>
    </Col>
    <Col md="3">
    <img alt="data " src={require("../../images/hyderabad.jpg")} className="img-fluid rounded-img"/>
    </Col>
    <Col md="3">
    <h3 className="address"> India</h3>
   <p>5A1 Melange Towers</p> 
   <p>Madhapur, Hyderabad</p>
   <p>Ph: 91-800-815-5200</p>
      </Col>
  
    </Row>
   
    </Container>
    <Row>
    <Footer/>
  </Row>
    </div>
    </Container>
</div>
  );
}

export default Contact;
