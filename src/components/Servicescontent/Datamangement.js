import React from 'react';
import Mainmenu from '../../components/Mainmenu';
import Footer from '../../components/Footer';

import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import {  Row,Col,Button } from 'reactstrap';
import Datamangeheader from './Datamangeheader';
// import { Link } from 'react-router-dom';
function DataManagement() {
  return (
      <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <Datamangeheader/>
    <div className="inner-content"> 
    <p>Enterprise data management depends on an integrated data architecture that facilitates the retrieval, analysis and manipulation of data across all functions and business units, as well as several applications. However, in today’s environment the information is scattered across multiple applications and diversified platforms. With the advent of big data, organizations now face the growing challenge of getting meaningful information from many different sources of data. To accomplish an integrated data architecture, organizations must implement sophisticated processes and methodologies in compliance with changing regulations. To make the most of the available data, organizations need an efficient process and foundation for handling the data architecture 
        and creating an efficient way to securely manage data across the enterprise.</p>

   
      <p>At Quadratics, our data management services provide innovative enterprise solutions, customizable to fit the information needs of any organization, helping drive better decision-making and improve business performance. Our skills include data governance, data integration, data quality analysis, master data management and data architecture design, development and maintenance. Our proven methodologies and industry leading tools transform the various data into actionable 
          insights while adhering to organizational guidelines.</p>
          <h2 class="text-center">We offer a complete spectrum of enterprise data management services, including:</h2>

    </div>

    <div class="bg-white container-fluid border-blue">
        <div class="row">
            <div class="col-md-6 no-padding">
            <div class="bg-blue">
    
                <div class="padd">
                <Slide left duration={3000}> 
                    <h2 class="text-center"> Data Governance</h2>
                    <p>
                    <ul class="check-list"><li>Pre processes starts at the top of the business. Where decisions regarding the sanctioning of data by creating policies and decisions around data that includes how to form data and who can use the data.</li><li>The post process involves the daily strategies that support the continued formation of data policies and decisions.</li></ul>
                    <p>Better data governance = Higher confidence in accumulated data

Strong decisions within data governance including data security & data privacy lead to higher levels of data quality.</p>
                    </p>
                    </Slide>
                </div>
           
                </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white">
                    <Slide right duration={3000}> 
                    <img alt="data " src={require("../../images/DataGovernance-250x250.png")} className="img-fluid plt"/>
                        
                        </Slide>  </div>
                            </div>
                            </div>
                            
                                </div>

                                <div class="bg-white container-fluid border-blue">
        <div class="row">
        <div class="col-md-6">
                    <div class="bg-white">
                    <Slide left duration={3000}> 
                    <img alt="data " src={require("../../images/dataquality-250x250.png")} className="img-fluid plt"/>
                       </Slide>
                          </div>
                            </div>
            <div class="col-md-6 no-padding">
            <div class="bg-blue">
     
                <div class="padd">
                <Slide right duration={3000}> 
                    <h2 class="text-center"> Data Quality</h2>
                    <p>The higher the data quality the more usable it becomes. One of DFZ core competencies is setting the direction of your organizations data quality. By collecting data quality rules across the enterprise, reconciling gaps, and continuously monitoring your data quality.

Better data quality = Better data integration

Imply put, without strong levels of data integration, the solution will fail. We can continuously 
improve integration by leveraging both meta data management and master data management..</p>
</Slide>
                </div>
         
                </div>
                </div>
               
                            </div>
                            
                                </div>
                           
                                <div class="bg-white container-fluid border-blue">
        <div class="row">
            <div class="col-md-6 no-padding">
            <div class="bg-blue">
            
                <div class="padd">
                <Slide left duration={3000}> 
                    <h2 class="text-center"> Data Integration</h2>
                    <p>Disparate data source require various levels of integration in order to support the solution. </p>
                    <p>Data Integration is 
                        only possible with consistent data definitions across the enterprise.</p>

                        </Slide>
                </div>
             
                <br/><br/>
                </div>
                </div>
                <div class="col-md-6">
                    <div class="bg-white">
                    <Slide right duration={3000}> 
                    <img alt="data " src={require("../../images/dataintegration-250x250.png")} className="img-fluid pr-10"/>
                         </Slide>
                          </div>
                            </div>
                            </div>
                            
                                </div>

                                <Row>
  <Col md="12"> 
  <div className="connect-section">
  <h2 className="text-center section-top-head"> Connect with us</h2>

  <h4 className="section-main-para"> We look forward to engage with you about our services, product accelerators, or about join our growing team.</h4>
  <div className="text-center"> 
  <Link to="/contact"> <Button outline color="primary">Contact Now</Button></Link>
  </div>
        </div>
  </Col>
  

</Row>
    <Row className="">
    <Footer/>
  </Row>
    </div>
  
  );
}

export default DataManagement;
