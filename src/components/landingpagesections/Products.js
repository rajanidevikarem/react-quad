import React from 'react';

import Qpproduct from '../../images/qpproduct-new.png';
import Mainmenu from '../Mainmenu';

import Productheader from '../landingpagesections/Productheader';

import Footer from '../Footer';
import { Container, Row, Col,Card, CardTitle, CardText,  CardDeck,
  CardBody} from 'reactstrap';
// import { Link } from 'react-router-dom';
function Products() {
  return (
    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
  <Productheader/>
  
 
    <Container fluid>
      <div id="product-section">
        <div>
        {/* <Row>
          <Col> <h1 className="product-head text-center"> Products</h1></Col>
        </Row> */}
        <Row>
          <Col> <div> <h4 className="para text-center mb-5 mt-10">Platforml is a feature rich Analytics platform enabling:</h4></div></Col>
        </Row>
        <Container>
          <Row className="mt-10">
            <Col md="6" className="text-center">
              <img src={Qpproduct} className="img-fluid platforml-img" alt="QPlatform" />
            </Col>
            <Col md="6">
              <ul className="aboutList">
                <li>Access to big data assets including various Hadoop distributions,
                processing engines such as Apache Spark and traditional data sources including RDBMS,
        file servers and Amazon S3 etc.</li>
                <li>Ingestion of data to and from Big Data Repositories</li>
                <li>Perform analytics with custom applications on Hadoop and Spark</li>
                <li>Notebook Integration with private data sources for explorative analytics</li>
                <li>Model Deployment</li>
              </ul>
            </Col>
          </Row>
          </Container>
          <Container fluid className="no-padding">

          <Row className="heightlighted-text padding-10">
  <Col>
  <h2 className="text-center"> 
For Product demo please contact us at
</h2>
<h2 className="text-center"> 
<a href="mailto:platforml@quadratics.com" className="no-border product-link">platforml@quadratics.com</a>
  </h2>
  </Col>
</Row>
</Container>
         
<Container>
         
      
    <Row className="mt-10">
 <h4 className="text-center mt-10 mb-5"> The following modules are available in the platforml:</h4>
    <CardDeck>
      <Card>
    
        <CardBody>
          <CardTitle tag="h5">Connectors</CardTitle>
         
          <CardText>Various traditional and big data connectors are available to define in this module which would later 
            be utilized during model development to access directly into jupyter notebooks.</CardText>
         
        </CardBody>
      </Card>
      <Card>
       
        <CardBody>
          <CardTitle tag="h5">Ingestion Framework</CardTitle>
        
          <CardText>An ingestion module is available to move data to and fro from the data sources defined in the connectors module.</CardText>
     
        </CardBody>
      </Card>
    
    </CardDeck>

    <br/>
    <CardDeck>
      <Card>
      
        <CardBody>
          <CardTitle tag="h5">Workbench</CardTitle>
         
          <CardText>
          The workbench is where the data scientists and model developers will write programs and conduct exploratory work on model development. Each user on the platform will be able to create project workspaces to define the assets for the models including data files, images, documents, and program code.The workbench also includes a fully functional jupyter notebook integration into the platform to write programs and seamlessly integrate internal 
          data (defined in the connectors) to be available in the notebook.
          </CardText>
          
        </CardBody>
      </Card>
      <Card>
       
        <CardBody>
          <CardTitle tag="h5">Deployment</CardTitle>
     
          <CardText>
          This module allows the model developer to deploy the trained model to a production-like environment to test real-time scenarios with production data. 
          The model will be automatically exposed as a Restful API for other consumer applications.
          </CardText>
       
        </CardBody>
      </Card>
    
    </CardDeck>
    </Row>
        </Container>
        </div>        
      </div>
  
    </Container>
    <Row className="mt-10">
    <Footer/>
  </Row>
</div>
  );
}

export default Products;
