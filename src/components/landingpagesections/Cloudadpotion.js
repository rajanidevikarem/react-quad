import React from 'react';
import Mainmenu from '../Mainmenu';
import Footer from '../Footer';


import {  Row,Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
function Cloudadpotion() {
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
              <h2 className="">Cloud Adoption</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="inner-content"> 
   <p> Cloud Adoption is a strategic move by organizations of reducing cost, mitigating risk and achieving scalability of data base capabilities. Cloud adoption may be up to various degrees in an organization, depending on the depth of adoption. In fact the depth of adoption yields insight into the maturity 
   of best practices, enterprise-ready cloud services availability.</p>
<p>
Organizations that go ahead with the strategic decision of adopting 
cloud based technologies have to identify potential security thefts and controls, required to keep the data and applications in the cloud secured. Hence there is a need for compliance assessment during cloud adoption.
</p>  
  </div>

  
    <Row className="contact">
    <Footer/>
  </Row>
    </div>
  
  );
}

export default Cloudadpotion;