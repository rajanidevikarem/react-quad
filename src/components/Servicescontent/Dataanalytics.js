import React from 'react';
import Mainmenu from '../../components/Mainmenu';
import Footer from '../../components/Footer';



import {  Row,Container } from 'reactstrap';
// import { Link } from 'react-router-dom';
function Dataanalytics() {
  return (
      <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="datamange-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Data Enginerring </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="inner-content"> 
    <p>

    For over 19 years, Quadratic has been rendering data analytics services that help companies flourish. Aiming to convert historical and real-time data into insights, as well as design accurate forecasting tools, we deliver turnkey IT solutions that cover data quality assurance, data integration, data management, data visualization and more, as well as provide outsourcing in this area.
    </p>

   
      <p>As data explodes in quantity and complexity, 
          companies find it increasingly difficult to unlock its full potential. 
          Quadratic Data Strategy takes a comprehensive approach to meeting the data 
          challenge and transforming for success.</p>

<p>Effective data visualization is not about choosing the latest 
    visualization in the market; it is about choosing the right visualization that to 
    fit the audience and business goals. With the wrong visualization, the intended message 
    can be misinterpreted or lost for various reasons such as choosing a wrong chart type, 
    bad style or inappropriate granularity of information.</p>

<p>The reality is that there are complex and real challenges with data today; no longer does a data management strategy consist of on-premise enterprise data. Online sources of information, company mergers, and acquisitions changing ERP sources and unstructured data exploration requirements are all current challenges. These issues are not going away and will not be easier to deal with in the future. Quadratic knows the environment your business is facing and we’re ready to deliver 
    data management consulting that fits into your long-term plan.</p>



    </div>

  
    <Row className="contact">
    <Footer/>
  </Row>
    </div>
  
  );
}

export default Dataanalytics;
