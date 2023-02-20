import React from 'react'
import '../Introduce.css';
import './Introduce_2.css';
import bookmark from '../../doing_page/img/bookmark.png'
import desktop from '../../doing_page/img/desktop.png';
import mapPin from '../../doing_page/img/map-pin.png';
import { Container, Row, Col } from 'react-bootstrap';

const Introduce_2 = () => {
  return (
    <Container fluid="md">
    <Row xl={3}>
      <Col>
        <div className='icon1'>
          <img id='icon' src={bookmark} />
          <span id='icon1-2'>공용 전공 서적</span>
          <div id='icon1-3'>
            <ul>
              <li>전공 서적 신청 가능</li>
              <li>언제든지 사용 가능</li>
            </ul>
          </div>
          </div>
      </Col>
      <Col>
      <div className='icon1'>
        <img id='icon' src={desktop} />
          <span id='icon1-2'>서버 제공</span>
          <div id='icon1-3'>
            <ul>
              <li>고사양 GPU 컴퓨터</li>
              <li>랩원 전용 리눅스 서버</li>
            </ul>
          </div>
        </div>
      </Col>
      <Col>
      <div className='icon1'>
        <img id='icon' src={mapPin} />
          <span id='icon1-2'>관리자실</span>
          <div id='icon1-3'>
            <ul>
              <li>공강 시간이든 언제든 사용 가능</li>
              <li>개인 사물함 제공</li>
            </ul>
          </div>
        </div>
      </Col>
      </Row>
      </Container>
    /*
    <>
    <div className='iconsframe'>
      <div className='iconsframe2'>
        <div className='icon1'>
          <FiBookmark style={{
            left: '0%',
            right: '83.78%',
            top: '1%',
            bottom: '69%'}}/>
          <span id='icon1-2'>공용 전공 서적</span>
          <span id='icon1-3'>
            <ul>
              <li>전공 서적 신청 가능</li>
              <li>언제든지 사용 가능</li>
            </ul>
          </span>
        </div>

        <div className='icon2'>
          <RiComputerLine style={{
            left: '0%',
            right: '84.13%',
            top: '1%',
            bottom: '69%'
          }}/>
          <span id='icon2-2'>서버 제공</span>
          <span id='icon2-3'>
            <ul>
              <li>고사양 GPU 컴퓨터</li>
              <li>랩원 전용 리눅스 서버</li>
            </ul>
          </span>
        </div>

        <div className='icon3'>
          <BiMapPin style={{
            left: '0%',
            right: '88.46%',
            top: '1%',
            bottom: '69%'
          }}/>
          <span id='icon3-2'>관리자실</span>
          <span id='icon3-3'>
            <ul>
              <li>공강 시간이든 언제든 사용 가능</li>
              <li>개인 사물함 제공</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
    </>*/
  )
}

export default Introduce_2;