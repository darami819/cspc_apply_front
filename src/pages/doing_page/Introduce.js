import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Introduce.css';
import Introduce_1 from './Introduce_1/Introduce_1';
import Introduce_2 from './Introduce_2/Introduce_2';
import Introduce_3 from './Introduce_3/Introduce_3';
import Introduce_4 from './Introduce_4/Introduce_4';
import Introduce_5 from './Introduce_5/Introduce_5';

const Introduce = () => {
  return (
    <>
    <Navbar className="introducebanner" expand="md">
        <Navbar.Brand href="/introduce" id="introduceletter">소개</Navbar.Brand>      
    </Navbar>

    <Introduce_1 />
    <Introduce_2 />
    <Introduce_3 />
    <Introduce_4 /> 
    <Introduce_5 />  
    </>
    );
}

export default Introduce;