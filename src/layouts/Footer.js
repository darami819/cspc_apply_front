import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
      <Container fluid="md">
        <Row>
        <Col><div className='lined'></div></Col>
        </Row>
        <Row>
          <Col><div id='cspc'>CSPC</div></Col>
          <Col>
            <div className='frame'>
              <div id='do'>소개</div>
              <div id='applyadvice'>지원안내</div>
              <div id='apply'>지원하기</div>
            </div>
          </Col>
          <Col><div id='place'>서강대학교 리치과학관 914호</div></Col>
        </Row>
        </Container>
      /*
        <>
        
        <hr size="5" noshade />
        <Navbar bg="white" variant="light" expand="md" className="footer">     
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
      </>*/
    )
}

export default Footer;