import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Banner = () => {
    return(
        <Navbar fixed="top" bg="light" varient="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">CSPC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
      
            <NavDropdown title="DOING" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Mt">MT</NavDropdown.Item>
                <NavDropdown.Item href="/Picnic">
                  소풍
                </NavDropdown.Item>
                <NavDropdown.Item href="/Study">STUDY</NavDropdown.Item>
                <NavDropdown.Item href="/Senior">사람들</NavDropdown.Item>
                <NavDropdown.Item href="/Party">Christmas Party</NavDropdown.Item>
                <NavDropdown.Item href="/StaffDinner">회식</NavDropdown.Item>
                <NavDropdown.Item href="/Work">업무</NavDropdown.Item>
              </NavDropdown>
      
              <NavDropdown title="지원하기" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Apply">지원서 작성</NavDropdown.Item>
                <NavDropdown.Item href="/Modify">
                  지원서 수정
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Result">
                  결과 확인
                </NavDropdown.Item>
              </NavDropdown>
      
              
              <NavDropdown title="Mode" id="basic-nav-dropdown">
                <NavDropdown.Item href="#다크모드">Dark</NavDropdown.Item>
                <NavDropdown.Item href="#라이트모드">Light</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#한글모드">Korean</NavDropdown.Item>
                <NavDropdown.Item href="#영어모드">English</NavDropdown.Item>
              </NavDropdown>
      
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
};

export default Banner;