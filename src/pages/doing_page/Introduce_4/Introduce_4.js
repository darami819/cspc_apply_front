import React from 'react'
import '../Introduce.css';
import './Introduce_4.css';
import imgPicnic from '../../doing_page/img/picnic.png';
import imgHaek from '../../doing_page/img/haek.png';
import imgMt from '../../doing_page/img/mt.png';
import imgParty from '../../doing_page/img/party.png';
import { Container, Row, Col } from 'react-bootstrap';

const Introduce_4 = () => {
  return (
    <Container fluid="md">
    <Row>
      <Col>
      <div className='picLine1'>
        <img id='line1' src={imgPicnic} />
        <div className='picturedetailLine1'>
            <div id='picnameLine'>소풍</div>
            <div id='moredetailLine'>함께 떠나는 소풍</div>
        </div>
    </div>
      </Col>
      <Col>
      <div className='picLine1'>
        <img id='line1' src={imgPicnic} />
        <div className='picturedetailLine1'>
            <div id='picnameLine'>회식</div>
            <div id='moredetailLine'>든든한 예산으로 맛있는 회식</div>
        </div>
    </div>
      </Col>
      <Col>
      <div className='picLine1'>
        <img id='line1' src={imgMt} />
        <div className='picturedetailLine1'>
            <div id='picnameLine'>MT</div>
            <div id='moredetailLine'>방학에 함께 떠나는 MT</div>
        </div>
    </div>
      </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col>
    <div className='picLine2'>
        <img id='line2' src={imgHaek} />
        <div className='picturedetailLine2'>
            <div id='picnameLine'>해커톤</div>
            <div id='moredetailLine'>함께 밤 새면서 달리는 해커톤</div>
        </div>
    </div>
    </Col>
    <Col>
    <div className='picLine2'>
        <img id='line2' src={imgHaek} />
        <div className='picturedetailLine2'>
            <div id='picnameLine'>세미나</div>
            <div id='moredetailLine'>선배들에게 듣는 유익한 꿀팁 세미나</div>
        </div>
    </div>
    </Col>
    <Col>
    <div className='picLine2'>
        <img id='line2' src={imgParty} />
        <div className='picturedetailLine2'>
            <div id='picnameLine'>크리스마스 파티</div>
            <div id='moredetailLine'>모든 CSPC 랩원이 모여 이야기하는 크파</div>
        </div>
    </div>
    </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col>
    <div className='picLine3'>
        <img id='line3' src={imgParty} />
        <div className='picturedetailLine3'>
            <div id='picnameLine'>디스코드</div>
            <div id='moredetailLine'>심심하면 언제든 함께 만나는 디스코드</div>
        </div>
    </div>
    </Col>
    </Row>
  </Container>
  );
}

export default Introduce_4;