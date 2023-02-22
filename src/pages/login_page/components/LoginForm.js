import { Col, Container, Form ,Button } from "react-bootstrap"
import {styles} from "./LoginForm.css"
export const LoginForm = ({state}) => {
    return <>
        <Container>
            <Col><div className="login_top_text">지원하기</div>
                <div className="login_info_text">
                <div>지원서를 작성하거나, 저장 후 수정할 수 있습니다.</div>
                    <div>최초 로그인 시 작성하신 비밀번호로 설정됩니다.</div>
                    </div>
                <Form>
                    <Form.Control
                        type="text"
                        className="login_input_box"
                        placeholder="학번 (20231600)"
                    />
                    <Form.Control
                        type="password"
                        aria-describedby="passwordHelpBlock"
                        className="login_input_box"
                        placeholder="비밀번호"
                        
                    />
                    <Button className="apply_button"> 지원서 작성하기</Button>
                </Form>

            </Col>
            
        </Container>
    </>
}