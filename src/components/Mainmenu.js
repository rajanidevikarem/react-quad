
import React, { useState } from 'react';

import logoquad from '../images/logoquad.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

const Mainmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md" fixed="top" className="shadow-sm">
        <NavbarBrand href="/"><img src={logoquad} className="logo" alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto main-menu" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Company
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/Home/">Home</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/about/">About us</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/Career/">Career</NavLink>
                </DropdownItem>
              
                
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem>
              <NavLink href="/capabilites/">Capabilities</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Competencies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/ml">ML/AL Platforms</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/dataanalytics/">Data Enginnering</NavLink>
                </DropdownItem>
              
                <DropdownItem>
                <NavLink href="/cloudadoption">Cloud Adoption</NavLink>
                </DropdownItem>
              
              </DropdownMenu>
            </UncontrolledDropdown>
          
            <NavItem>
              <NavLink href="/globalworkforce">Global Workforce</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          
          </Nav>
   
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Mainmenu;
