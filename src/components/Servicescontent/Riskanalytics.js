import React from 'react';
import {  Row, Col,Container } from 'reactstrap';
// import classnames from 'classnames';
import Mainmenu from '../../components/Mainmenu';
import Footer from '../../components/Footer';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import RiskAnalyticsData from '../data/RiskAnalyticsData.json';

const RiskAnalytics = (props) => {
  // const [activeTab, setActiveTab] = useState('1');

  // const toggle = tab => {
  //   if(activeTab !== tab) setActiveTab(tab);
  // }

  
  function getTabs(services) {
    return services.map((service, index) => ({
      title: <React.Fragment>
              { service.imageClass && 
                <React.Fragment>
                  <span class={service.imageClass + " icon-img"}></span><br />
                </React.Fragment>
              }
              {service.service}
            </React.Fragment>,
      getContent: () => { return <React.Fragment>
                <p>{service.content.join("")}</p>
                { service.list.length > 0 && 
                  <ul class="check-list">
                  { service.list.map((line, index) => {
                      return <li key={index}>{line}</li>
                    })
                  }
                  </ul>
                }
                {
                  service.additionalContent && 
                  <React.Fragment>
                    <p>{service.additionalContent.content.join("")}</p>
                    { service.additionalContent.list.length > 0 && 
                      <ul class="check-list">
                      { service.additionalContent.list.map((line, index) => {
                          return <li key={index}>{line}</li>
                        })
                      }
                      </ul>
                    }
                  </React.Fragment>
                }
      </React.Fragment>},
      /* Optional parameters */
      key: index,
      panelClassName: "quad-tab-container"
    }));
  }

  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <Container fluid className="no-padding"> 
    <div className="risk-analytics-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Risk Analytics</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="inner-content"> 
 <div>
     <p>Risk intelligence (RQ) uses forward-looking risk concepts and tools to make better decisions, alleviate threats, capitalize on opportunities and create lasting value for companies.
          Organizations with high risk intelligence tend to make more informed business and security decisions 
          than those with low RQ.
       </p>

<p>IWe are at the forefront of helping organizations use advanced analytics for risk management. 
    Organizations want to harness data that is locked in silos and a variety of external sources. We build advanced analytics systems to give organizations clearer visibility into the challenges associated with managing many types of risk in key areas such as operations, regulatory compliance, 
    supply chain, financial services, e-commerce and credit.</p>
    <p>As experts in developing big data-related solutions, we are able to combine new sources of unstructured information with state of the art advanced modeling techniques and tools to provide insights quickly. 
        We have a passion for helping clients produce models with significantly higher predictive power.</p>
        <p>Our approach to building risk analytics is pragmatic and helps companies establish a baseline for measuring risk throughout the organization. This offers executives clarity in identifying, viewing, understanding, and managing risk. The illustration below shows different areas of our advanced analytical 
            capabilities in the area of risk management.</p>
  </div>
  <div>
    

    <Row>

          
<Col sm="12" md="12">



  <Row className="ml-30 quad-tabs">
  
  <Tabs items={getTabs(RiskAnalyticsData.riskmanagementServices)} />
  
  </Row>

</Col>

</Row>


  </div>

   </div>


   <Row>
    <Footer/>
  </Row> 
  </Container>
    </div>
  );
}

export default RiskAnalytics;

