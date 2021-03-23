import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header.js';
// import About from './components/landingpagesections/About.js';
import Services from './components/landingpagesections/Services.js';
// import Products from './components/landingpagesections/Products.js';
// import Capabilites from './components/landingpagesections/Capabilites.js';
import Footer from './components/Footer';
import './App.css';
import './responsive.css'
import { Container, Row } from 'reactstrap';
function Home() {
  return (
    <Container fluid className="landing">
      <Row>
        <Header />
      </Row>
     
      <Row className="services">
        <Services />
      </Row>
      {/* <Row>
        <Products />
      </Row>
      <Row  id="capabilites-section" className="capabilites">
        <Capabilites />
      </Row>
      */}

      <Row className="">
        <Footer />
      </Row> 

    </Container>
  );
}

export default Home;
