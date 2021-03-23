import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col,Container, Card,  CardTitle, CardText, CardDeck,
  CardBody } from 'reactstrap';

import classnames from 'classnames';
import Mainmenu from '../Mainmenu';
import Footer from '../Footer'
const Globalreadmore = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (


    
    <div>
         <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="global-page-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Global Workforce </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container fluid className="bg-white">

<Row>
<Col>
  <div className="mt-10">
<Container>
    <h2 className="text-center padding-10"> Process</h2>
    <CardDeck>
      <Card>
        
        <CardBody className="text-center"> 
      
          <CardTitle className="text-center"><h5>Continuous improvement</h5></CardTitle>
         
          <CardText>
          Agile development accelerates the delivery of initial business value, and through a process of continuous planning and feedback is able to ensure that value 
          is continually maximized throughout the development process.
          </CardText>
         
         
        
        </CardBody>
      </Card>
      <Card>
        
        <CardBody className="text-center"> 
      
          <CardTitle className="text-center"><h5>Visibility</h5></CardTitle>
         
          <CardText>
          By measuring and evaluating status, based on testing software, much more accurate visibility into the actual progress of 
          projects is available for end user and development teams.
          </CardText>

        </CardBody>
        </Card>
      <Card>
        <CardBody className="text-center"> 
      
      <CardTitle className="text-center"><h5>Collaboration</h5></CardTitle>
     
      <CardText>
      Through daily communication, global Agile teams can best understand and discuss customer requirements. Team collaboration reinforces best practices and makes it easier 
      to introduce new tools and development techniques
      </CardText>

    </CardBody>
      </Card>
     
      </CardDeck>

      <h2 className="text-center padding-10"> Application</h2>
    <CardDeck>
      <Card>
        
        <CardBody className="text-center"> 
      
          <CardTitle className="text-center"><h5>Lower defect density</h5></CardTitle>
         
          <CardText>
          Customers are assured of getting defect-free applications due to the iterative nature of releases.
           Critical bugs are caught early in the project.
          </CardText>
         
         
        
        </CardBody>
      </Card>
      <Card>
        
        <CardBody className="text-center"> 
      
          <CardTitle className="text-center"><h5>Adaptability</h5></CardTitle>
         
          <CardText>
          As a result of iterative planning and feedback loops, global teams are able to continuously align the delivered software with desired business needs, 
          easily adapting to changing requirements throughout the process.
          </CardText>

        </CardBody>
        </Card>
      <Card>
        <CardBody className="text-center"> 
      
      <CardTitle className="text-center"><h5>Flexibility</h5></CardTitle>
     
      <CardText>
      An Agile global delivery model is far more accommodating to change requests at any time of the project when compared to traditional Agile and waterfall models. 
      Frequent communication eliminates gaps in requirement gathering.
      </CardText>

    </CardBody>
      </Card>
     
      </CardDeck>

      </Container>
 </div>


 
  
  </Col>

</Row>

<Row className="heightlighted-text padding-10 mt-10">
  <Col>
  <h2 className="text-center section-main-heading"> 
  Guidelines to consider include</h2>
  
  <ul class="primary-list"><li>Centralize documentation so it is accessible for all and changeable by all.</li>
  <li>Maintain daily stand-up meetings.</li>
  <li>Maintain metrics of planned tasks vs. unplanned tasks completed per Sprint.</li>
  <li>Ensure the requisite communication bandwidth. This is often a challenge for global teams. Remember to schedule overlapping work hours.</li>
  <li>Provide full visibility into project status.</li>
  <li>Work with mature clients only; clients need to understand how Agile works.</li>
  <li>Provide Agile mindset and method training. Examples of training approaches include:
      <ul class="primary-list style2"><li>One-day workshops.</li>
      <li>Computer-based training (CBT) of best practices.</li>
  <li>Mentoring.</li>
  </ul>
  </li>
  </ul>


  </Col>
</Row>

<Container>
<Row>
<Col>
<h2 className="text-center section-main-heading"> 
Global Delivery Model has 6 pillars</h2>
<img alt="data " src={require("../../images/GlobalDeliveryModel.png")} className="img-fluid global"/>
</Col>

</Row>

<Row className="ml-30 quad-tabs padding-10">

 <Nav tabs pills>
<NavItem>
<NavLink
 className={classnames({ active: activeTab === '1' })}
 onClick={() => { toggle('1'); }}>
   
   Engagement Model

</NavLink>
</NavItem>
<NavItem>
<NavLink
 className={classnames({ active: activeTab === '2' })}
 onClick={() => { toggle('2'); }}>
   
     Processes
</NavLink>
</NavItem>
<NavItem>
<NavLink
 className={classnames({ active: activeTab === '3' })}
 onClick={() => { toggle('3'); }}>
     
     Tools
</NavLink>
</NavItem>
<NavItem>
<NavLink
 className={classnames({ active: activeTab === '4' })}
 onClick={() => { toggle('4'); }}>
     
     People
</NavLink>
</NavItem>
<NavItem>
<NavLink className={classnames({ active: activeTab === '5' })}
 onClick={() => { toggle('5'); }}>
    
  Infrastructure
</NavLink>
</NavItem>
<NavItem>
<NavLink className={classnames({ active: activeTab === '6' })}
 onClick={() => { toggle('6'); }}>
    
    Governance
</NavLink>
</NavItem>
<NavItem>
<NavLink className={classnames({ active: activeTab === '7' })}
 onClick={() => { toggle('7'); }}>
    
    Metrics and reporting
</NavLink>
</NavItem>
</Nav>


 <TabContent activeTab={activeTab} className="usecase-tabcontent">
<TabPane tabId="1">
<Row>
 <Col sm="12">
 The first step is to identify engagement model that suits client SLAs:
a. Fixed price b. Time & material c. Retainer-based model
<div class="bordered">
  <table class="capability-table table">
    <thead>
      <tr><th>S.No</th>
      <th>Model</th>
      <th width="30%">When to Use?</th>
      <th>How it works?</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fixed Price</td>
          <td>Budget and Scope is fixed and this model is used when at least 80% of requirements are clear. Useful in giving fixed cost with fixed timeline with a given scope.</td>
          <td>Collaborative participation from clients and stake holders to gather requirements, scope and make prompt decision</td>
          </tr>
          <tr><td>2</td>
          <td>Time &amp; Material</td>
          <td>When Scope is not fixed ie. Requirements are evolving and process is not documented.<br/> High dependency on stakeholders for making decisions.</td>
          <td>Costing is arrived through real time usage of hours spent by teams.</td>
          </tr><tr><td>3</td>
          <td>Retainer – Based</td>
          <td>Fix amount of hours and assurance of fixed team</td>
          <td>This model is useful for long term contracts where knowledge retention is important.<br/> This model also allows customers to work with specific teams with complete visibility of productivity.</td>
          </tr></tbody></table>
</div>
     
 </Col>
</Row>
</TabPane>
<TabPane tabId="2">
<Row>
 <Col md="12">
 Engagement models are successful with the right set of processes.
 <img alt="data " src={require("../../images/project-managment.png")} className="img-fluid"/>
  
 </Col>
</Row>
</TabPane>
<TabPane tabId="3">
<Row>
 <Col md="12">
 <p>Usage of right tools will bring speed and consistency in delivering applications. 
   Some are enlisted below which can be used for development.</p>
 
   <div class="bordered"><table class="capability-table table">
     <thead>
       <tr>
         <th>S.No</th>
         <th width="20%">Process</th>
         <th width="10%">Tools</th>
         <th>Features</th></tr></thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Requirements Management</td>
             <td><ul class="check-list style2"><li>Jira</li>
             </ul></td>
             
             <td><ul class="check-list style2">
               <li>Agile Scrum Development</li>
               <li>EPIC, User Stories creation</li>
               <li>Tasks Assignment and Monitoring</li>
               <li>Accessible online to customers providing transparency.</li>
               </ul></td>
               </tr>
               <tr>
                 <td>2</td>
                 <td>Estimation Tools</td>
                 <td>
                   <ul class="check-list style2">
                     <li>Use Case points</li>
                     <li>Story points</li>
                     </ul></td>
                     <td>
                       <ul class="check-list style2">
                         <li>Use Case estimation</li>
                         <li>Story points help estimation for each story</li>
                         </ul></td>
                         </tr>
                         <tr><td>3</td>
                         <td>UX Design and Architecture</td>
                         <td>
                           <ul class="check-list style2">
                             <li>Axure</li>
                             <li>Adobe XD</li>
                             </ul>
                             </td>
                             <td>
                               <ul class="check-list style2">
                                 <li>Axure for Wireframes</li>
                                 <li>Adobe XD for design</li>
                                 </ul>
                                 </td>
                                 </tr>
                                 <tr><td>4</td>
                                 <td>Project Management Tools</td>
                                 <td>
                                   <ul class="check-list style2">
                                     <li>Microsoft</li><li>Jira</li>
                                     </ul>
                                     </td>
                                     <td>
                                       <ul class="check-list style2">
                                         <li>Project planning and Monitoring</li>
                                         <li>Task assignment and Monitoring</li>
                                         <li>Reports – Burn Chars, Sprint velocity</li>
                                         </ul></td></tr><tr><td>5</td><td>Configuration Management and Continuous Integration Tools</td><td><ul class="primary-list style2"><li>GitHub</li><li>Jenkins</li></ul></td><td><ul class="primary-list style2"><li>GitHub for code versioning and configuration management</li><li>Jenkins for Continuous integration</li></ul></td></tr></tbody></table></div>


  
 </Col>
</Row>

</TabPane>
<TabPane tabId="4">
<Row>
 <Col sm="12">
 <p>
 The fifth pillar, Infrastructure, plays a major role in many ways. Infrastructure (which includes connectivity, communication, and continuity), data on cloud, and security:
With the advent of digital infrastructure, which has turned the world into a highly connected one, IoT, Cloud, etc., along with data, analytics and insights are now available just a click away. As the world is moving towards cloud-based infrastructure and SaaS (Software as a service), PaaS (Platform as a Service) and IaaS (Infrastructure as a service) are becoming the new norms. However, this is posing challenges on business continuity and disaster recovery. The ability to provide 24×7 availability with high uptime, secured data, and disaster recovery has become very crucial.
</p>
<p>Two vulnerable aspects in Digital Services include:</p>

<ul className="check-list">
<li>Information Security</li>
<li>Business Continuity</li>

</ul>
<p> To assess risks and vulnerabilities, organizations need to carry out appropriate and timely assessments. Besides, gap analysis and vulnerability assessment exercises can be helpful too in this regard. To counter threats, there needs to be a robust cloud security framework along with business continuity and disaster recovery tools. However, it is important to identify the risks to business first so that the fixes work. 
  To recognize the threats, consider the below factors:</p>

  <ul className="check-list">
<li>Nature of business</li>
<li>Nature of assets and their vulnerabilities</li>
<li>Review of existing controls</li>
<li>Observations and interviews of employees</li>
<li>Incidents that occurred</li>
<li>Feedback and opinion of management</li>
</ul>
<p>Business impact analysis is done on a regular basis to identify the critical business processes/ infrastructure/ projects. 
  The outcome helps to assess the level of risks and criticality and impact on data and projects.</p>
 </Col>
</Row>
</TabPane>
<TabPane tabId="5">
<Row>
 <Col sm="12">
 <p>People Skills and competencies, the most valuable, play an important part in ensuring delivery excellence.

Different profile people need different skill level. Define a framework that ensures that skill gaps are identified and are regularly upgraded, to improve productivity.

These competencies can be divided into:</p>
<ul className="check-list">
<li>Vertical Competencies</li>
<li>Technical Competencies</li>
<li>Functional Competencies</li>
<li>Behavioral Competencies</li>
</ul>
<p>The framework determines base-level competency requirements for each role and level, which are then assessed through tools and interviews.

Engaging people intellectually and emotionally is 
another aspect to consider. Innovation hubs, entrepreneurial initiatives, etc., 
are great employee engagement ideas.</p>

 </Col>
</Row>
</TabPane>
<TabPane tabId="6">
<Row>
 <Col sm="12">
 <p>Governance is the sixth pillar, which has evolved over a period. The major components of Governance framework are:

Different profile people need different skill level. Define a framework that ensures that skill gaps are identified and are regularly upgraded, to improve productivity.

These competencies can be divided into:</p>
<ul className="check-list">
<li>Communication</li>
<li>Metrics and reporting</li>
<li>Compliance on regulations and models</li>
<li>Reviews</li>
</ul>
<p>Communication: This is an important aspect in any governance model that comprises of different types and mechanisms of communication. A good communication plan can bridge gaps between distributed teams, 
  as is shown in the table below:
</p>
<div class="bordered">
  <table class="capability-table table">
    <thead>
      <tr>
        <th width="20%">Communication Type</th
        ><th width="20%">Details</th>
        <th width="5%">Frequency</th>
        <th width="10%">Medium</th><th>Stakeholders</th></tr>
        </thead>
        <tbody>
          <tr><td>Quarterly Business Reviews</td>
          <td>Review the work done in previous quarter, discuss and recommend tactical and strategic areas of opportunity</td><td>Quarterly</td><td>Conference / In-Person meeting</td>
          <td>Client – Core team, Stakeholders, Project Managers<br/> Vendor – Core team, Strategy team</td>
          </tr><tr><td>Periodic Check-ins</td><td>Review project status, understand objectives, priorities, and address any concerns</td>
          <td>Quarterly or Every project milestone</td>
          <td>Conference / In-Person meeting</td>
          <td>Client – Stakeholders, Project Managers<br/> Vendor – Engagement lead</td>
          </tr></tbody>
        </table></div>
 </Col>
</Row>
</TabPane>
<TabPane tabId="7">
<Row>
 <Col sm="12">
 <p>Visibility in service provision, productivity, utilization, and timelines are some of the most critical elements in an engagement. These can best be achieved via real-time visibility and usage of tools.
   </p>

   <p>Tools like JIRA offer real-time visibility to customer, sitting miles away.
Such tools provide perceptibility and allow simultaneous tracking of projects and programs in a proactive way, thereby flagging all risks and issues before they become unmanageable. The dashboards can be configured to reflect the most important aspects, across levels, 
thereby enabling the senior management to take actions at the right time.</p>
<p>Typical metrics to track could vary, depending on the type of engagements:</p>
<ul className="check-list">
<li>Sprint velocity</li>
<li>Burn down chart</li>
<li>Resource utilization</li>
<li>Defect density</li>
<li>Response time</li>
<li>Resolution time</li>
<li>Uptime</li>
</ul>
<p>To conclude, all the six elements of the Global Delivery Model: the Engagement Model, Processes, People, Tools, Infrastructure, and Governance have not only become imperative in delivering a faster and cheaper customer experience but also one thats repeatable, predictable and better.
</p>

 
 </Col>
</Row>
</TabPane>
</TabContent>


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

export default Globalreadmore;




