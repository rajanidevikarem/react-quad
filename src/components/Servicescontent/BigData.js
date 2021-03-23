import React from 'react';
import Mainmenu from '../../components/Mainmenu';
import Footer from '../../components/Footer';



import {  Row,Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
function Bigdata() {
  return (
      <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
   
    <div className="career-page-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">BigData</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="inner-content"> 
    <p>As the amount of data continues to skyrocket, organizations using traditional technology platforms are not able to easily process it. The key to our success is to determine how big data fits into your overall business plan. With an effective method for capturing, 
        storing and managing underlying data, big data offers a number of benefits to organizations:</p>
        <ul class="check-list">
        <li>Integration of structured and unstructured data </li>
      <li>Creates and stores more transactional data in digital form than ever</li>
      <li> Strategic product and service development</li>
      <li>Real-time website insights.</li>
      <li>Leads organizations towards a data-driven model.</li>
      <li>Contextual awareness of data in real time</li>
      <li>Creates customer value through big data warehousing and reporting applications.</li>
      <li>Addresses speed and scalability, mobility and security, flexibility and stability</li>
      </ul>
      <p>We are ahead of the curve with big data and can assist organizations with their big data initiatives. Our approach has evolved to develop the industry’s best practices and techniques. Our overall strategy guides organizations through an interdisciplinary approach 
          complemented by our advanced analytic solutions that maximize ROI.</p>
    </div>

    <Row className="contact">
    <Footer/>
  </Row>
    </div>
  
  );
}

export default Bigdata;
