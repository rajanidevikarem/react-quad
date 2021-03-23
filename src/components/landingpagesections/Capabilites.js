import React from 'react';

import { Container, Row, Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import Mainmenu from '../Mainmenu';
import Footer from '../../components/Footer';

function Capabilites() {
  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="capability-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Capabilities </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
 
  
 

    <Container fluid>

      <div>
        
        <Row>
          <Col>
          <img alt="data " src={require("../../images/capabilites.svg")} className="img-fluid"/>
         
          </Col>

        </Row>
      </div>

      <Row>
  <Col md="12"> 
  <div className="connect-section">
  <h2 className="text-center section-top-head"> Capability matrix</h2>

  <h4 className="section-main-para">Professional Capabilities are a combination of knowledge, skills, behaviours and
specialist expertise required to perform at a particular level..</h4>
  <div className="text-center"> 
  <Link to="/capabilitymatrix"> <Button outline color="primary" className="capability-matrix-btn">Capability matrix</Button></Link>
  </div>
        </div>
  </Col>
  

</Row>

    </Container>
    <Row className="mt-10">
    <Footer/>
  </Row>
</div>
  );
}

export default Capabilites;
