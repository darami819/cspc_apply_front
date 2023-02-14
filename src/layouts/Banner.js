import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Banner = () => {
    return(
      <>
        <Navbar sticky="top" varient="light" bg="white" expand="md">
        <Container>
          <Navbar.Brand href="/"><img src="img/임시.png" alt="logo" width={50}/></Navbar.Brand>
          
        

          {/* 변경된 부분 */}    
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/introduce">소개</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/apply">지원하기</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
      </Navbar>


      

      </>
      );
};

export default Banner;