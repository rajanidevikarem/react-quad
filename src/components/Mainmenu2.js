
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
  NavbarText
} from 'reactstrap';

const Mainmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light  expand="md" fixed="top" className="shadow-sm">
        <NavbarBrand href="/"><img src={logoquad} className="logo" alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/"><img src={logoquad} className="logo" alt="logo" /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Company
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
              About us
                </DropdownItem>
                <DropdownItem>
                Career
                </DropdownItem>
              
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Capabilites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Competencies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Global Workforce</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
   
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Mainmenu;
