import React from 'react';
import {  Row,Container } from 'reactstrap';

import Bicontent from '../Business-intellegence/Bicontent'
import Mainmenu from '../../Mainmenu';
import Footer from '../../../components/Footer';

function Bi() {
  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="businessintel-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Business Intelligence</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
<Bicontent/>
<Row className="contact">
    <Footer/>
  </Row> 
 </div>

  );
}

export default Bi;
