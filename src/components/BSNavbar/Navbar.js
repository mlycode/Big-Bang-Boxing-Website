import React from "react";
import { Navbar, Nav, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/images/logosmall.jpg";

import "./Navbar.css";

const NavigationBar = (props) => (
    <Navbar collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img className="navbar-logo" src={logo}/></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer exact to="/">
        <NavItem eventKey={1}>HOME</NavItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <NavItem eventKey={2}>ABOUT US</NavItem>
      </LinkContainer>
      <LinkContainer to="/gallery">
        <NavItem eventKey={3}>GALLERY</NavItem>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavItem eventKey={4}>CONTACT US</NavItem>
      </LinkContainer>
      <LinkContainer to="/location">
        <NavItem eventKey={5}>LOCATION</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavigationBar;