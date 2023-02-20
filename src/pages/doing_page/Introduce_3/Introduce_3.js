import React from 'react'
import '../Introduce.css';
import './Introduce_3.css';
import { Container, Row } from 'react-bootstrap';

const Introduce_3 = () => {
  return (
    <Container fluid="md">
      <Row>
          <div id='pictureintro1'>소수 정예 학회</div>
      </Row>
      <Row>
      <div id='pictureintro2'>CSPC LAB은 소수로 이루어져, 서로 끈끈한 관계를 가지고 있습니다.</div>
      </Row>
      <Row>
      <div className='line'></div>
      </Row>
    </Container>
  );
}

export default Introduce_3;