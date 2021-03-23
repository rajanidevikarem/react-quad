import React from 'react';
 import { Row ,Col} from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import Footer from '../Footer'
import { Link } from 'react-router-dom'
function GlobalContent() {
  return (

    <div>
    
    <Container fluid className="bg-white">

<Row>
<Col>
  <div className="">

  <h2 className="top-sub-text">Quadratic is able to scale its services through an Offshore Development Center (ODC) located in Hyderabad, India. The purpose of our ODC setup is to:</h2>
  <ul class="primary-list style2"><li>Provide an elastic resource pool of qualified candidates who can ramp-up and down for projects.</li><li>Our focus is on Full-stack Development, Analytics, BI,&nbsp; and ML/AI platform development</li><li>Act as a research hub&nbsp; for both our customers as well as Quadratic’s competencies</li></ul>
        </div>


 
  
  </Col>

</Row>
<Row className="">
  <Col>
  <h2 className="text-center section-main-heading"> 
Best Practices to consider for successful global delivery</h2>
<img alt="data " src={require("../../images/bestpractices.png")} className="img-fluid best-practice-img"/>
  </Col>

</Row>
<Row>
<Col>
  <div className="pull-right global-readmore">
  <Link to="/globalreadmore"> Read More </Link>

</div>
</Col>
</Row>
<Row className="heightlighted-text padding-10">
  <Col>
  <h2 className="text-center"> 
  Our Offshore Development Center is made up of a dedicated team of programmers and developers hand picked to complement a customer’s skill set and culture. This unique team works exclusively on behalf of the customer in a secure environment.</h2>

  </Col>
</Row>
<Row>
<Col>
<img alt="data " src={require("../../images/odc.png")} className="odc"/>


</Col>

</Row>
<Container>
<Row className="">
  <Col>
  <h2 className="text-center padding-10"> 
What we offer</h2>

  </Col>

   
</Row>
<Row className="">
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  Transparency</h2>

  <p className="text-center data-text">
  Customer can visit Offshore Development Center (ODC) and with Programmers, 
  project Managers to see with whom they are working with

  </p>

  </Col>
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  Value based collaboration</h2>

  <p className="text-center data-text">
  Integrity, trust and respect are some of the values which are important when working together.

  </p>

  </Col>
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  Communication</h2>

  <p className="text-center data-text">
  We speak in same frequency as customer speaks

  </p>

  </Col>
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  24x7 availability</h2>

  <p className="text-center data-text"> 
  Dedicated team for your needs

  </p>

  </Col>
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  Conducive Environment</h2>

  <p className="text-center data-text">
  Dedicated infrastructure, as software and hardware that is aligned with the customer requirements

  </p>

  </Col>
  <Col md="4">
  <h2 className="text-center sub-content-head"> 
  Security</h2>

  <p className="text-center data-text"> 
  Security policy which adheres to Customer standards and requirements

  </p>

  </Col>
   
</Row>
</Container>
<div className="clearfix"></div>


</Container>
<Row className="mt-10">
    <Footer/>
  </Row>
 
 </div>

  );
}

export default GlobalContent;
