import React from "react";
import { Navbar, Nav, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Navbar.css";

const NavigationBar = (props) => (
    <Navbar collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Big Bang Boxing</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer exact to="/">
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/classes">
        <NavItem eventKey={2}>Classes</NavItem>
      </LinkContainer>
      <LinkContainer to="/gallery">
        <NavItem eventKey={3}>Gallery</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={4}>Contact us</NavItem>
      </LinkContainer>
      <LinkContainer to="/location">
        <NavItem eventKey={5}>Location</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavigationBar;