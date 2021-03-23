import React, { useState } from 'react';
import {  Row, Col } from 'reactstrap';
import Mainmenu from './Mainmenu';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
   
    src:  require("../images/bgslide1.png"),
    altText: 'Advanced Analytics',
    caption:'Advanced Analytics',
    caption1: 'Help build efficient workflows for data engineering, exploration and pure play analytics.'
  },
  {
    src: require("../images/bgslide2.png"),
    altText: 'ML Platforms',
    caption: 'ML Platforms',
    caption1: 'Help build ML/AI platforms with our proven solutions that work both on-prem and on-cloud'
  },
  {
    src: require("../images/bgslide3.png"),
    altText: 'Data Engineering',
    caption: 'Data Engineering',
    caption1: ' A precursor to building intelligent systems.  Our highly talented developers have deep expertise in Spark Development among many other traditional data engineering technologies.'
  }
];

const HeaderCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Row className="carousel-img">
          <Col>
          
          <img src={item.src} alt={item.altText} className="slider-img"/>
         
        <CarouselCaption 
        captionText={item.caption1}   captionHeader={item.caption}/>
        
        </Col>
        </Row>
        

        {/* <Row>

          <Col md="5"> <CarouselCaption captionText={item.caption} captionHeader={item.caption} /></Col>
          <Col md="7" className="sliderimg"> <img src={item.src} alt={item.altText} /></Col>
        </Row>
        */}
       
       
      
        
      </CarouselItem>
    );
  });

  return (
    <div>
  <Mainmenu/>
          
 
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    
    </div>
  );

}

export default HeaderCarousel;