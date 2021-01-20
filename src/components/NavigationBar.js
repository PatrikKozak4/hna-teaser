import React, {Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import GetStarted from '../platforms/GetStarted'

const Styles = styled.div`
@media screen and (max-width: 960px) {
  .nav-mobile-button {
    
    padding: .7rem;
    margin: .7rem auto;
    border-radius: 4px;
    width: 30%;
    background: #00BFFF;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
}
`;

const backg = {
  backgroundColor: '#181818'
};

class NavigationBar extends Component {

  render() {
    return (
      <Styles>
        <Navbar id="navhero" collapseOnSelect expand="lg" style={backg} variant="dark">
          <Navbar.Brand href="/">HNA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="Company" style={{marginRight: 10}}><span className="text-white my-auto">Company</span></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contactus" style={{marginRight: 10}}><span className="text-white my-auto">Contact Us</span></Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav.Item>
                <Nav.Link style={{marginRight: 10}}><span className="text-white my-auto">Register for our Waitlist!</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <GetStarted/>
            </Nav.Item>
          </Navbar.Collapse>
          
        </Navbar>

        
      </Styles>
    );
  }
}
export default NavigationBar;