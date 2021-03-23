import React from 'react';
import {  Row } from 'reactstrap';
import Careerheader from '../components/Career/Careerheader'
import Careercontent from '../components/Career/Careercontent'
import Mainmenu from '../components/Mainmenu';
import Footer from '../components/Footer'
function Career() {
  return (
    
   <div>
      <div className="header-white">
      <Mainmenu/>
      </div>
    <Careerheader/>
  <Careercontent/>
  <Row className="contact">
      <Footer/>
    </Row> 
   </div>
  );
}

export default Career;
