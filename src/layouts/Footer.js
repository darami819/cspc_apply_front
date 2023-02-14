import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return(
        <>
        <hr size="5" noshade />
        <Navbar bg="white" variant="light" expand="md">     
        <Container>
        <Nav className="justify-content-start" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">CSPC</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/introduce">학회 소개</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/apply">지원하기</Nav.Link>
        </Nav.Item>
      </Nav>
        
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          문의 학회장 000abcgmail.com
        </Nav.Item>
      </Nav>
        </Container>
        </Navbar>
      </>
    )
}

export default Footer;