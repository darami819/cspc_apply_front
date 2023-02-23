import React from 'react'
import './ApplyGuide_2.css';
import { Container, Row ,Col } from "react-bootstrap";
import { get_recruit_info } from "../../../../apis/get_recruit";
import { useAsync } from "react-async"
import dateFormat, { masks } from "dateformat";
import right_vector from "../../../../assets/images/right_vector.png";
import { Link } from 'react-router-dom';

const ApplyGuide_2 = () => {
    const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });

    const format = "m/d"

    if (isLoading) return "Loading...";
    if (error) return `Something went wrong: ${error.message}`;
    if (data) 

  return (
    <>
        <div className='mform'>
                <Container className='justCenter'>
                    <div className="process"> 지원절차</div>
                    <div className='linem'></div>
                    <Container className="banner_content">
                        <div className="document_circle">
                            <Col className="circle_content">
                                <Row className="process_text" >서류</Row>
                                <Row className="date_text">
                                    {dateFormat(data.start_time, format)} ~ {dateFormat(data.document_deadline,format)} 24시
                                </Row>
                            </Col>
                        </div>

                        <img src={right_vector} className="right" ></img>
                        <div className="interview_circle">
                             <Col className="circle_content">
                                <Row className="process_text" >면접</Row>
                                <Row className="date_text">
                                    {dateFormat(data.interview_start_time, format)} ~ {dateFormat(data.interview_end_time,format)}
                                </Row>
                            </Col>
                        </div>

                        <img src={right_vector}  className="right" ></img>
                        <div className="join_circle">
                             <Col className="circle_content">
                                <Row className="process_text" >합류</Row>
                                <Row className="date_text">
                                    {dateFormat(data.announce_final_time, "m")}월 중 예정 
                                </Row>
                            </Col>
                        </div>

                    </Container>
                </Container>    
        </div>

        <div className='justCenter'>
            <Link to='/apply'>
                <button className='ApplyButton'>
                    <div className='applyLetter'>지원하기</div>
                </button>
            </Link>
        </div>
        
        
    </>
  );
}

export default ApplyGuide_2;