import React, { useState } from 'react';
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import jobsInfo from './JobsInfo.json';

function CareerContent() {

  const [ jobKey, setJobKey] = useState("1");
  const [ showJobDesc, setShowJobDesc] = useState(false);

  const getJobDescription = (key) => {
    if(jobsInfo[key].description.length > 0)
    {
        setJobKey(key);
        setShowJobDesc(true);
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col md="12" sm="12">
          <div className="center-align">

            <Form inline className="search-job">
              <FormGroup>
                <Label for="jobtittle" hidden>Job title</Label>
                <Input type="text" name="text" id="jobtittle" placeholder="Job Title" />
              </FormGroup>

              <FormGroup>
                <Label for="location" hidden>Password</Label>
                <Input type="text" name="location" id="location" placeholder="Location" />
              </FormGroup>

              <Button color="primary">Find Jobs</Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12" sm="12">
          <div className={showJobDesc? "hide" : "center-align"}>

            <CardDeck className="jobs-list">
              {
                Object.keys(jobsInfo).map(key => {
                  let job = jobsInfo[key]
                  console.log(job)
                  return <Card>
                    <CardBody>
                      <CardTitle>{job.title}</CardTitle>
                      <CardSubtitle>{job.location}</CardSubtitle>
                      <CardText>{job.text}</CardText>
                      <a href={"mailto:jobs_hyd@quadratics.com?subject=Apply to " +job.title} className="no-border btn btn-primary">Apply Now</a>
                      <Button color="primary" outline className="readmore" onClick={() => getJobDescription(key)}>Read More </Button>
                    </CardBody>
                  </Card>
                })
              }
              {/* <Card>
                <CardBody>
                  <CardTitle>React js Developer</CardTitle>
                  <CardSubtitle>Hyderabad</CardSubtitle>
                  <CardText> React JS, JSON, JavaScript framework, Angular, Angular JS, web services.</CardText>
                  <a href="mailto:jobs_hyd@quadratics.com" className="no-border btn btn-primary" role="botton">Apply Now</a>
                  <Button color="primary" outline className="readmore">Read More </Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Dot Net Developer</CardTitle>
                  <CardSubtitle>United states</CardSubtitle>
                  <CardText> .NET, C#, ASP.NET, SQL Server, HTML5, CSS3, JavaScript / jQuery</CardText>
                  <Button color="primary">Apply Now</Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle>Programmer Analyst</CardTitle>
                  <CardSubtitle>United states</CardSubtitle>
                  <CardText>Oracle, PLSQL Developer, SQL Developer, SQL*Plus, MVC.NET, Jira</CardText>
                  <Button color="primary">Apply Now</Button>
                </CardBody>
              </Card> */}
            </CardDeck>
          </div>
        </Col>
      </Row>
      <div className={showJobDesc? "" : "hide"}>
        <div className="job-details">
        <Row>
          <Col md="12" style={{cursor:"pointer"}}> <span onClick={() => setShowJobDesc(false)} className="back-btn"> 
          <img src={require("../../images/back-arrow.png")} alt="back arrow"/> <span className="back-btn-text">Back to see more jobs</span></span></Col>
        </Row>
        <h2> Job Description</h2>
        <ul class="check-list style2">
          {
            jobsInfo[jobKey].description.map(desc => {
              return <li>{desc}</li>
            })
          }
          {/* <li>Writing reusable, testable, and efficient code in ReactJS</li>
          <li>Estimate the level of development tasks within a project</li>
          <li>Create new and update existing project modules</li>
          <li>Integrate with back-end Restful APIs</li>
          <li>Develops web pages using latest responsive design development techniques</li>
          <li>MUST have Hands-on experience in ReactJS and delivered project on ReactJS and played key role.</li>
          <li>Should have strong debugging Skills and working with Cross Browser UI</li>
          <li>Having experience in Python is a big plus</li><li>Good Communication Skills</li> */}
        </ul>
        <h2> skills</h2>
        <ul class="check-list style2">
          <li><strong>Primary Skill : </strong>{jobsInfo[jobKey].skills.primary}</li>
          <li><strong>Secondary Skill: </strong>{jobsInfo[jobKey].skills.secondary}</li>
        </ul>
        <a href="mailto:jobs_hyd@quadratics.com" className="no-border btn btn-primary apply">Apply Now</a>
      </div>
      </div>
    </Container>

  );
}

export default CareerContent;
