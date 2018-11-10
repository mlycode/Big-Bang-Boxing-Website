import React from "react";
import { Navbar, Nav, NavItem} from "react-bootstrap";

const NavigationBar = (props) => (
    <Navbar inverse collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Big Bang Boxing</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/classes">
        Classes
      </NavItem>
      <NavItem eventKey={3} href="/gallery">
        Gallery
      </NavItem>
      <NavItem eventKey={4} href="/contact">
        Contact us
      </NavItem>
      <NavItem eventKey={5} href="/location">
        Location
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavigationBar;