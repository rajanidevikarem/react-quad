import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import Mainmenu from '../Mainmenu';
import Footer from '../../components/Footer';
function Capabilitesmatrix() {
  return (

    <div>
    <div className="header-white">
    <Mainmenu/>
    </div>
    <div className="capability-header-img">
      <Container fluid>
        <div>
          <div className="page-header-content">
            <div className="content-headtext">
              <h2 className="">Capability Matrix</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container>

      <div>
        <Row>
            <Col>
        <div class="bordered mt-10">
       <table class="table capability-table">
           <tbody>
               <tr><th width="30%">Professional Consulting Services</th>
               <th className="text-center">Relevant Experience</th>
               </tr>
               <tr><td>Application Development</td>
               <td>
                   <ul class="primary-list style2">
                       <li> User Requirements discovery and Requirement analysis</li>
                       <li>cost analysis</li>
                       <li>Functional specifications development</li>
                       <li>System design &amp; Infrastructure planning</li>
                       <li>Resource planning</li>
                       <li>Prototype development</li>
                       <li>Code development</li>
                       <li>System and Integration testing</li>
                       <li>User acceptance testing</li>
                       <li>User and System Documentation</li>
                       <li>Deployment Planning</li>
                       <li>Continuous Support</li>
                       </ul>
                       </td>
                       </tr>
                       <tr>
                           <td>Database Architecture</td>
                           <td>
                               <ul class="primary-list style2">
                                   <li>Database design</li>
                                   <li>Logical and physical database design.</li>
                                   <li>Erwin, Model Mart</li>
                                   <li>Data modelling, data analysis and deployment of databases</li>
                                   <li>DDL scripts, database snapshots, table partitions, and backup/recovery strategy</li><li>Database and queries tuning and performance monitoring</li>
                                   <li>Oracle, SQL Server, DB2, MySQL</li></ul>
                                   </td></tr>
                                   <tr>
                                       <td>System Requirements / Analysis / Design  / Requirements / Maintenance</td>
                                       <td>
                                           <ul class="primary-list style2"
                                           ><li>System and application development lifecycle.</li>
                                           <li>Analyze business requirements and develop system and application architectures</li>
                                           <li>Analyze and evaluate user requirements.</li>
                                           <li>Analyze data availability, report requirements.</li>
                                           <li>Define system objectives and prepare system design specifications.</li>
                                           <li>Analyze alternative means of deriving input data to select the most accurate, feasible, and economical methods.</li>
                                           <li>Define input and output file specifications including file organization.</li>
                                           <li>Define controls, conversion procedures, and system implementation plans.</li>
                                           <li>Prepare Technical documentation.</li>
                                           </ul>
                                           </td>
                                           </tr>
                                           <tr>
                                               <td>Enterprise Solutions &amp; Systems</td>
                                               <td>
                                                   <ul class="primary-list style2">
                                                       <li>Solution Architecture</li>
                                                       <li>Business Process architecture</li>
                                                       <li>Data and database Architecture</li>
                                                       <li>Alignment of information technology to the dynamic business logic</li>
                                                       <li>Technology road-maps</li>
                                                       <li>Technology and process optimization.</li>
                                                       <li>Application Rationalization</li>
                                                       <li>Solution Design per business requirements</li>
                                                       <li>Alignment of Application, technology and infrastructure solutions</li>
                                                       <li>Emerging Service Oriented Architecture</li>
                                                       <li>Web-based services</li>
                                                       <li>Systems integration</li>
                                                       <li>Data models: conceptual, logical, and physical.</li>
                                                       <li>Expert knowledge in Infrastructure software, Application servers, and various DBMS</li>
                                                       </ul></td></tr><tr><td>Use Case Analysis</td>
                                                       <td>
                                                           <ul class="primary-list style2"><li>Capturing and refining use case requirements</li>
                                                           <li>Producing class and collaboration diagrams as part of an analysis model</li>
                                                           <li>Exploring a shared UML repository tool to ensure model consistency</li>
                                                           <li>Transforming analysis behavioural models into design sequence diagrams</li>
                                                           <li>Investigating automated source code generation</li></ul>
                                                           </td></tr>
                                                           <tr>
                                                               <th>Technologies</th>
                                                               <th>Skills</th>
                                                               </tr><tr><td>Machine Learning</td>
                                                               <td>
                                                                   <ul class="primary-list style2">
                                                                       <li>Model Development</li>
                                                                       <li>Jupyter Notebook, pySpark</li>
                                                                       <li>ML packages – Pandas, SciKit Learn, TensorFlow, Keras</li>
                                                                       </ul></td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td>Data Engineering</td><
                                                                               td><ul class="primary-list style2">
                                                                                   <li>Scala, Python, Spark</li>
                                                                                   <li>Dremio, SnowFlake, AWS S3</li>
                                                                                   <li>File Formats – XML, JSON, AVRO, Parquet</li>
                                                                                   </ul></td></tr>
                                                                                   <tr>
                                                                                       <td>Graph Database</td>
                                                                                       <td>
                                                                                           <ul class="primary-list style2">
                                                                                               <li>Neo4J</li>
                                                                                               <li>Tools – Popoto, Vis.js, D3</li></ul>
                                                                                               </td></tr>
                                                                                               <tr>
                                                                                                   <td>Big Data Solutions</td>
                                                                                                   <td>
                                                                                                       <ul class="primary-list style2">
                                                                                                           <li>Apache Hadoop, Apache Spark, HDFS, HBase, Map Reduce, Hive, Oozie, Sqoop, Impala, Pig, Yarn</li>
                                                                                                           <li>Cloudera, HortonWorks</li>
                                                                                                           </ul>
                                                                                                           </td></tr>
                                                                                                           <tr>
                                                                                                               <td>Containerization</td>
                                                                                                               <td>
                                                                                                                   <ul class="primary-list style2">
                                                                                                                       <li>Docker, Kubernetes</li>
                                                                                                                   </ul></td></tr><tr><td>Monitoring</td>
                                                                                                                   <td>
                                                                                                                       <ul class="primary-list style2">
                                                                                                                           <li>Mlflow, Grafana, SeldonCore</li>
                                                                                                                           </ul></td>
                                                                                                                           </tr>
                                                                                                                           <tr>
                                                                                                                               <td>Cloud Development</td>
                                                                                                                               <td>
                                                                                                                                   <ul class="primary-list style2"><
                                                                                                                                       li>AWS , Google</li>
                                                                                                                                       </ul></td>
                                                                                                                                       </tr>
                                                                                                                                       <tr>
                                                                                                                                           <td>Full Stack Development / Implementation</td>
                                                                                                                                           <td>
                                                                                                                                               <ul class="primary-list style2">
                                                                                                                                                   <li>Java / J2EE</li>
                                                                                                                                                   <li>React JS</li>
                                                                                                                                                   <li>Angular</li>
                                                                                                                                                   <li>J2EE – EJB, Servlet, Struts, Hibernate, iBatis, Junit</li>
                                                                                                                                                   <li>JSP, Tiles, JSF, Thymeleaf</li>
                                                                                                                                                   <li>JDBC, JNI, JAXP</li>
                                                                                                                                                   <li>Java Mail, Ajax</li><li>SOA</li>
                                                                                                                                                   <li>Spring – Spring 4.0, MVC, Spring data</li>
                                                                                                                                                   <li>UI Frameworks – Bootstrap, Thymeleaf</li>
                                                                                                                                                   <li>Application Servers – Weblogic, Jboss, Websphere, Tomcat</li>
                                                                                                                                                   <li>Authentication – phpLDAP, Auth0</li>
                                                                                                                                                   <li>Messaging – Kafka</li>
                                                                                                                                                   <li>Redis, Celery, WebSockets</li>
                                                                                                                                                   <li>IDE – Eclipse, Spring Tool Suite, JBuilder</li></ul></td>
                                                                                                                                                   </tr><tr><td>.NET Development / Implementation</td>
                                                                                                                                                   <td><ul class="primary-list style2">
                                                                                                                                                       <li>ASP.NET. MVC 4.0, ADO.NET</li>
                                                                                                                                                       <li>C#, VB Script</li>
                                                                                                                                                       <li>.NET 2.0/3.0 Framework</li>
                                                                                                                                                       <li>Razor, LINQ</li>
                                                                                                                                                       <li>Web Programming</li>
                                                                                                                                                       <li>Build – TFS</li>
                                                                                                                                                       <li>Visual Studio 2008/2012</li></ul></td></tr><tr><td>Mobile Development / Implementation</td><td><ul class="primary-list style2"><li>Mobile Computing</li><li>ios – iPhone/iPad, Flutter</li></ul></td></tr><tr><td>Data Warehouse Development / Implementation</td><td><ul class="primary-list style2"><li>DW principles and data structure of DW.</li><li>Design logical and physical components of data warehouse.</li><li>ETL – Informatica</li><li>Database – Oracle, DB2, SqlServer, MySql, Informix, NOSQL</li><li>IDE – Toad, Squirrel, Sql Server Management Studio</li></ul></td></tr><tr><td>Database Development / Implementation</td><td><ul class="primary-list style2"><li>Oracle – PL/SQL, Pro*C, SQL Plus</li><li>Informix – ESQL / 4GL, dbaccess</li><li>SQL Server</li><li>MySql</li><li>OSQL</li><li>IDE – Toad, Sql Server Management Studio</li></ul></td></tr><tr><td>Business Intelligence / Reporting Design / Development / Implementation</td><td><ul class="primary-list style2"><li>Actuate BIRT</li><li>SAP Business Objects</li><li>Crystal Reports</li><li>Custom Java reporting stacks</li></ul></td></tr><tr><td>UI Design / Development</td><td><ul class="primary-list style2"><li>Content Management – WordPress / Joomla</li><li>HTML 5, CSS3, Php, Parallax scrolling</li><li>Adobe Photoshop CS3, Adobe Flash CS3, Dreamweaver</li><li>Web Servers – WAMP / XAMP / Tomcat</li><li>Bootstrap Templates</li></ul></td></tr><tr><td> Web Development</td><td><ul class="primary-list style2"><li>Web Site Development</li><li>Logo, Banners, Web Templates Designing</li></ul></td></tr><tr><td>Other</td><td><ul class="primary-list style2"><li>C, C++</li><li>Shell Scripting – ksh, bash, csh</li><li>Utilities – awk, sed</li><li>Perl, javascript</li></ul></td></tr><tr><td>QA</td><td><ul class="primary-list style2"><li>QTP, WinRunner.</li><li>Test Director and Quality Center Test Plans, Test Scripts and Test Cases and Functional, Integration, Regression, User Acceptance testing. QA methodologies.</li><li>Automation – Selenium TestNG</li><li>Mercury tools</li><li>Data driven testing.</li><li>Problem solving and Bug Reporting using Bug Tracking.</li></ul></td></tr><tr><td>Release Management</td><td><ul class="primary-list style2"><li>Build – Maven, Ant, Hudson Jenkins</li><li>Github, SVN, PVCS, TFS</li></ul></td></tr></tbody></table>
        </div>
         </Col>
        </Row>
        
      </div>

    </Container>
    <Row className="mt-10">
    <Footer/>
  </Row>
</div>
  );
}

export default Capabilitesmatrix;
