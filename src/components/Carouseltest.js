import React from 'react';
import {
  Row,Col
} from 'reactstrap';
import slider from  '../images/sliderimg1.png';

function Carouseltest() {
  return (
  
    <Row>
        <Col  md="8">
          </Col>
     <Col md="4">
      <img src={slider} className="Slider-img" alt="logo" />
      </Col>
      </Row>
   
  );
}

export default Carouseltest;
