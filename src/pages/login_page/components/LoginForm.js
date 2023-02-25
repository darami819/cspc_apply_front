import { Col, Container, Form, Button } from "react-bootstrap";
import { styles } from "./LoginForm.css";
import { useRef } from 'react';
import { login } from 'apis/login';
import { useAsync } from "react-async"
import { useNavigate } from "react-router-dom";
import { get_resume } from "apis/resume";

export const LoginForm = ({ state }) => {
    const id = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const Submit = async () => {
        const id_temp = id.current.value;
        const pw_temp = password.current.value;
    
        const [status_code, data] = await login(id_temp, pw_temp);
        console.log(status_code, data);
        switch (status_code) {
            case 200: // 신규 지원자
                sessionStorage.setItem('id', id_temp);
                sessionStorage.setItem('pw', pw_temp);
                navigate('/apply');
                break;
            case 201: // 기존 지원자
                sessionStorage.setItem('id', id_temp);
                sessionStorage.setItem('pw', pw_temp);
                const resume = await get_resume();
                console.log(resume);
                navigate('/apply',{state: resume});
                break;
            case 404:
                alert('로그인 항목을 채워주세요!')
                break;
            case 500:
                alert('로그인 실패')
                break;
        }
    }
    return (<>
        <Container>
            <Col>{info_text(state)}
                <Form>
                    <Form.Control
                        ref={id}
                        type="text"
                        className="login_input_box"
                        placeholder="학번 (20231600)"
                       
                    />
                    <Form.Control
                        ref={password}
                        type="password"
                        aria-describedby="passwordHelpBlock"
                        className="login_input_box"
                        placeholder="비밀번호"
                        
                    />
                    <Button className="apply_button" onClick={Submit}> {
                        state === 'apply'
                            ?'지원서 작성하기' : state === 'middle'
                            ? '서류 결과 확인하기' : '최종 결과 확인하기'
                    }
                    </Button>
                </Form>

            </Col>
            
        </Container>
    </>);
};

function info_text(state) {
    switch (state) {
        case 'apply':
            
            return (<> <div className="login_top_text">지원하기</div>
                <div className="login_info_text"> 
              
                    <div>지원서를 작성하거나, 저장 후 수정할 수 있습니다.</div>
                    <div>최초 로그인 시 작성하신 비밀번호로 설정됩니다.</div>
      

                </div></>);
        case 'middle':
            return (<> <div className="login_top_text">서류 결과 확인하기</div>
                <div className="login_info_text"> 
                    
                    <div>지원서 작성 시 입력하신 학번과 비밀번호로</div>
                    <div>결과를 확인할 수 있습니다.</div>

                </div></>);
        case 'final':
            return (<> <div className="login_top_text">최종 결과 확인하기</div>
                <div className="login_info_text"> 
                    
                    <div>지원서 작성 시 입력하신 학번과 비밀번호로</div>
                    <div>결과를 확인할 수 있습니다.</div>

                </div></>);
        default:
            return
    }
    
}