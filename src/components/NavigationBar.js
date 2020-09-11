import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';


const Styles = styled.div`
  .navbar {
    background-color: black;
  }
  
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">HourNationArchive</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
          <NavDropdown title="Platform Services" id="collasible-nav-dropdown" >
            <NavDropdown.Item href="Academia">ArcAcademia</NavDropdown.Item>
            <NavDropdown.Item href="Deed">ArcDeed</NavDropdown.Item>
            <NavDropdown.Item href="Economy">ArcEconomy</NavDropdown.Item>
            <NavDropdown.Item href="HourNationArc">HourNationArc</NavDropdown.Item>
            <NavDropdown.Item href="Engineering">ArcEngineering</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)