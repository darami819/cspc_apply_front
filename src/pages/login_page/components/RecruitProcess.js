import { Container, Row ,Col} from "react-bootstrap";

import { useAsync } from "react-async"
import dateFormat, { masks } from "dateformat";
import { styles } from "./RecruitProcess.css";
import right_vector from "./../../../assets/images/right_vector.png"
const RecruitProcess = ({recruit_data}) => {
    const format = "m/d"
    return(
        <>
            <div className="background">
                <Container>
                    <div className="banner_text"> 지원절차</div>

                    <Container className="banner_content">
                        <div className={recruit_data.process === 'apply' ?"document_circle_process" : "document_circle"}>
                            <Col className="circle_content"><Row className="process_text" >서류</Row><Row className="date_text"
                            >{dateFormat(recruit_data.start_time, format)} ~ {dateFormat(recruit_data.document_deadline,format)} 24시</Row></Col>
                            
                        </div>
                        <img src={right_vector} className="right" ></img>
                        <div className={recruit_data.process === 'middle' ? "interview_circle_process" : "interview_circle"}>
                             <Col className="circle_content"><Row className="process_text" >면접</Row><Row className="date_text"
                            >{dateFormat(recruit_data.interview_start_time, format)} ~ {dateFormat(recruit_data.interview_end_time,format)}</Row></Col>
                        </div>
                        <img src={right_vector}  className="right" ></img>
                        <div className={recruit_data.process === 'final' ? "join_circle_process" : "join_circle"}>
                             <Col className="circle_content"><Row className="process_text" >합류</Row><Row className="date_text"
                            >{dateFormat(recruit_data.announce_final_time, "m")}월 중 예정 </Row></Col>
                        </div>
                    </Container>
                </Container>
                
            </div>
        </>
    );
};

export default RecruitProcess;