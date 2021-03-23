import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Spin from 'react-reveal/Spin';
import Slide from 'react-reveal/Slide';
// import classnames from 'classnames';
import Tabs from 'react-responsive-tabs';
// IMPORTANT you need to include the default styles
import 'react-responsive-tabs/styles.css';
import BIData from '../../data/BIData.json';

const BiContent = (props) => {

  // const [activeTab, setActiveTab] = useState('1');

  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
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

    <div className="inner-content">
      <div>
        <p>At Quadratic we are passionate about making Business Intelligence easy. We have built
        a successful BI Practice by helping our clients align key performance indicators
        (KPIs) with their strategic goals and objectives. Our practice include strategic planning,
        analysis, design, development, implementation, support and training for any BI/DW implementation.
        We have some of the best experts in the industry who come with an impressive blend of business and
        technical knowledge. Whether you require new development, enhancements or support, we simply become
        your extended team and deliver a turnkey BI solution.
       </p>

        <p>In addition, our experts can help assess and analyze organization’s BI needs and recommend an appropriate solution that makes the most business sense,
          still balancing cost and delivering ROI for your BI investment.</p>
      </div>
      <div>
        <p>Quadratic Business intelligence capabilities are classified in two major areas as shown below.</p>
        <Container fluid className="no-padding">
          <Row className="bi-bg">
            <Col md="5" className="text-right">
              <Slide left>
                <h4>Strategic Services</h4>
                <ul className="text-right bi-checklist">
                  <li>Roadmap & Architecture</li>
                  <li>Tool Evaluation/Selection</li>
                  <li>Education & Training</li>
                  <li>Maturity Assessment</li>
                </ul>
              </Slide>
            </Col>
            <Col md="2">
              <img src={require("../../../images/analytics.png")} alt="edit" />
            </Col>
            <Col md="5" >
              <Slide right>
                <div className="mr-10">
                  <h4>Application Services</h4>
                  <ul className=" bi-checklist">
                    <li> Development Services</li>
                    <li>Application Management & Support</li>
                    <li>Application Migration</li>
                    <li>Application Upgrade</li>
                  </ul>
                </div>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Row>
          
          <Tabs items={getTabs(BIData.strategicServices)} />

          <Row>
            <Col>
              <Spin>
                <div className="img-small text-center">
                  <img src={require("../../../images/business-chart.png")} alt="edit" />
                </div>
              </Spin>
            </Col>
          </Row>
          
          <Tabs items={getTabs(BIData.applicationServices)}/>

        </Row>
      </div>

    </div>

  );
}

export default BiContent;
