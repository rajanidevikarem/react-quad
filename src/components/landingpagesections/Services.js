import React from 'react';

import edit from '../../images/edit.png';

import { Container, Row, Col,Card, Button, CardFooter, CardTitle, CardText, CardDeck,
   CardBody } from 'reactstrap';
   import Pulse from 'react-reveal/Pulse';
   import { Link } from 'react-router-dom'
function Services() {
  // const [isShown, setIsShown] = useState(0);
  return (
    <div>
    <Container fluid>
      <div id="service-section">
    <div className="pb-20">
    <Row>
    <Col> 
    <h5 className="section-head-small text-center"> Explore Our Services</h5>
    <h1 className="section-head-1 text-center"> 
Business solutions</h1></Col>
    
    </Row>
    <Container>
      <Row className="mt-10">
       <Col>
       <Pulse>
       <CardDeck>
      <Card>
        
        <CardBody className="text-center"> 
        <div className="icon center-align"><img src={require("../../images/bi.png")} className="service-icon" alt="edit" /></div>
          <CardTitle className="text-center">Business Intelligence</CardTitle>
         
          <CardText>At quadratic we are passionate about making Business Intelligence easy. We have built a successful BI Practice by helping our clients align key performance</CardText>
         
         
        
        </CardBody>
        <CardFooter> <Link to="/bi"> <Button outline color="primary">Read More</Button></Link></CardFooter>
      </Card>
      <Card>
        
        <CardBody className="text-center"> 
        <div className="icon center-align"><img src={require("../../images/riskanalytics.png")} className="service-icon" alt="edit" /></div>
          <CardTitle className="text-center">Risk Analytics</CardTitle>
         
          <CardText>Risk intelligence (RQ) uses forward-looking risk concepts and tools to make better decisions, alleviate threats, capitalize on opportunities and create lasting value</CardText>
      
        </CardBody>
        <CardFooter>  <Link to="/riskanalytics"><Button outline color="primary">Read More</Button></Link></CardFooter>
      </Card>
      <Card>
    
        <CardBody className="text-center">
        <div className="icon center-align"><img src={require("../../images/bigdata.png")} className="service-icon" alt="edit" /></div>
          <CardTitle>Big Data</CardTitle>
         
          <CardText>As the amount of data continues to skyrocket, organizations using traditional technology platforms are not able to easily process it.The key to our success is to determine</CardText>
         
        </CardBody>
        <CardFooter> <Link to="/bigdata"> <Button outline color="primary">Read More</Button></Link></CardFooter>
      </Card>
      </CardDeck>
      <CardDeck className="mt-10">
     
      <Card>
     
        <CardBody className="text-center">
        <div className="icon center-align"><img src={edit} className="service-icon" alt="edit" /></div>
          <CardTitle className="text-center">Data Management</CardTitle>
          
          <CardText>
          Enterprise data management depends on an integrated data architecture that facilitates the retrieval, 
        analysis and manipulation of data across all functions
          </CardText>
          
        </CardBody>
        <CardFooter><Link to="/datamangement"> <Button outline color="primary">Read More</Button></Link></CardFooter>
      </Card>
      <Card>
     
     <CardBody className="text-center">
     <div className="icon center-align"><img src={require("../../images/data-visualization.png")} className="service-icon" alt="edit" /></div>
       <CardTitle className="text-center">Data Visualization</CardTitle>
       
       <CardText>
       Quality data is one of an organization’s most valuable assets, when used correctly. For an organization to gain the full benefits of data, they must
       </CardText>
     
     </CardBody>
     <CardFooter>  <Link to="/datavisualization"> <Button outline color="primary">Read More</Button></Link></CardFooter>
   </Card>
   <Card className="hidien">
     
     <CardBody className="text-center">
     <div className="icon center-align"><img src={require("../../images/mobile-app.png")} className="service-icon" alt="edit" /></div>
       <CardTitle className="text-center">Mobile Application</CardTitle>
       
       <CardText>
       Mobility application development can not stand alone in the enterprise anymore. 
       All of our mobile applications are backed with a complete ecosystem of mobility
       </CardText>
       <Button outline color="primary">Read More</Button>
     </CardBody>
     <CardFooter>Footer</CardFooter>
   </Card>
    </CardDeck>
      </Pulse>
       </Col>
      </Row>
    {/* <Row className="mt-10"> 
    <Col xs="6">
      
    
    <div className="container diamond-shape">
    <div className="item-count" onMouseEnter={() => setIsShown(1)}
        onMouseLeave={() => setIsShown(0)}>
        <div className="icon"><img src={edit} className="service-icon" alt="edit" /></div>
        <span className="title"> Data Management</span>

        {isShown===1 && (
        <div className="hover-text1 ">
          <p className="hover-text">
        Enterprise data management depends on an integrated data architecture that facilitates the retrieval, 
        analysis and manipulation of data across all functions
        </p>
        </div>
      )}
            </div>
            </div>
      
      </Col>
    <Col xs="6"> 
    <div className="container diamond-shape">
    <div className="item-count" onMouseEnter={() => setIsShown(2)}
        onMouseLeave={() => setIsShown(0)}>
          <div className="icon">  <img src={require("../../images/data-visualization.png")}  className="service-icon" alt="data visalization"/></div>
        <span className="title"> Data visalization</span>

        {isShown===2 && (
        <div className="hover-text2">
      <p className="hover-text">
      Quality data is one of an organization’s most valuable assets, when used correctly. 
      For an organization to gain the full benefits of data, they must
        </p>
        </div>
      )}
            </div>
  </div></Col>
  <Col xs="6" className="mt-60"> 
   
    <div className="container diamond-shape">
    <div className="item-count" onMouseEnter={() => setIsShown(3)}
        onMouseLeave={() => setIsShown(0)}>
        <div className="icon">  <img src={require("../../images/bi.png")}  className="service-icon" alt="BI"/></div>
        <span className="title"> Business Intelligence</span>

        {isShown===3 && (
        <div className="hover-text3">
     <p className="hover-text">
     As the amount of data continues to skyrocket, organizations using traditional technology platforms
      are not able to easily process it.The key to our success is to determine
        </p>
        </div>
      )}
            </div>
       </div>
       
  </Col>
  <Col xs="6" className="mt-60"> 

    <div className="container diamond-shape">
    <div className="item-count" onMouseEnter={() => setIsShown(4)}
        onMouseLeave={() => setIsShown(0)}>
         <div className="icon">  <img src={require("../../images/bigdata.png")}  className="service-icon" alt="Big Data"/></div>
        <span className="title"> Data Management</span>

        {isShown===4 && (
        <div className="hover-text4">
        <p className="hover-text">
        Enterprise data management depends on an integrated data architecture that facilitates the retrieval, 
        analysis and manipulation of data across all functions
        </p>
        </div>
      )}
            </div>
       </div>
  
  </Col>
    </Row>
   */}
    </Container>
  
   </div>
   </div>
  
    </Container>

       
<Container fluid> 

<Row>
  
<img alt="data " src={require("../../images/infographic-qts-1.png")} className="img-fluid"/>

</Row>
</Container>
<Row>
  <Col>
  <h2 className="text-center section-top-head"> Let Your Data Speaks</h2>
  </Col>
</Row>
    <Container fluid className="bg-blue border-blue">

<Row>
  <Col md="6"> 
  <div className="pl-20">
  
  <p> Your data has a lot to say about your business. Dynamic dashboards and reports are the lenses that help leaders consume and 
    explore their data from many perspectives and with better clarity.</p>
    <ul class="check-list style1">
      <li>Intelligent Dashboards</li>
      <li>Managed Reporting Services</li>
      <li>Big Data Visualization</li><
        li>Mobile BI</li><li>BI Platform Expertise</li></ul>
        </div>
  </Col>
  <Col md="6" > 
  <div className="bg-white">
  <img alt="data " src={require("../../images/datavisulaization-500x500.png")} className="img-fluid mb-r"/>
  </div>
  
  </Col>

</Row>
<div className="clearfix"></div>
</Container>

<Container fluid className="">

<Row>
  <Col md="12"> 
  <div className="connect-section">
  <h2 className="text-center section-top-head"> Connect with us</h2>

  <h4 className="section-main-para text-center"> We look forward to engage with you about our services, product accelerators, or about join our growing team.</h4>
  <div className="text-center"> 
  <Link to="/contact"> <Button outline color="primary">Contact Now</Button></Link>
  </div>
        </div>
  </Col>
  

</Row>
<div className="clearfix"></div>
</Container>
 </div>

       
  );
}

export default Services;
