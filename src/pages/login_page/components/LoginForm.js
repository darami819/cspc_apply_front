import { Col, Container, Form, Button } from "react-bootstrap";
import { styles } from "./LoginForm.css";
import { useRef } from 'react';
import { login } from 'apis/login';
import { useAsync } from "react-async"

export const LoginForm = ({ state }) => {
    const id = useRef(null);
    const password = useRef(null);

    const Submit = async () => {
        console.log(id.current.value, password.current.value)
        const [status_code, data] = await login(id.current.value, password.current.value);
        console.log(status_code, data);
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
                    <Button className="apply_button" onClick={Submit}> 지원서 작성하기</Button>
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