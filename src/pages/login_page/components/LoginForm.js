import { Col, Container, Form ,Button } from "react-bootstrap"
import {styles} from "./LoginForm.css"
export const LoginForm = () => {
    return <>
        <Container>
            <Col><div>지원하기</div>
                <div>지원서를 작성하거나, 저장 후 수정할 수 있습니다.</div>
                <div>최초 로그인 시 작성하신 비밀번호로 설정됩니다.</div>
                <Form>
                    <Form.Control
        type="text"
        id="inputPassword5"
        
                    />
                    <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
                    />
                    <Button></Button>
                </Form>

            </Col>
            
        </Container>
    </>
}