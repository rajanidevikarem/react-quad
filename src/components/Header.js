import React from 'react';
// import Mainmenu from './Mainmenu';
import HeaderCarousel from './HeaderCarousel.js';
// import cmmi3logo from '../images/cmmi3-logo-light.svg';
import {
  
  Container,Row
} from 'reactstrap';

// import { Container, Row, Col } from 'reactstrap';
function Header() {
  return (
  
    
    <Container fluid>
    <header className="quad-header">
      
       {/* <Container>
    <div className="topmenu ml-auto"> 
    <Nav className="mr-auto">
            <NavItem>
              <NavLink href="#"><img src={cmmi3logo} className="cmmilogo" alt="logo" /></NavLink>
            </NavItem>
            
            
            <NavItem className="ml-auto"> 
              <NavLink href="#"> Career</NavLink>
            </NavItem>
          </Nav>
    </div>
    </Container>

  */}
          
          <Row className="headercarosel">
          
            <HeaderCarousel/>
           
          </Row>
              </header>
             
        </Container>
      
   
  );
}
export default Header;
