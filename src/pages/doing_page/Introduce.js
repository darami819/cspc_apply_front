import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';

const Introduce = () => {
  return (
    <>
    <Navbar bg="secondary" variant="light" expand="md">
        <br/>
        <br/>
        <br/>
        <Navbar.Brand href="/introduce">소개</Navbar.Brand>
        <br/>
        <br/>
        <br/>
      </Navbar>
      <br/>
      <br/>
      <br/>
      <hr width="75%" />

      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>소풍</h6>
        봄, 가을마다 함께 떠나는 소풍
      </Figure.Caption>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>해커톤</h6>
        함께 밤 새면서 달리는 해커톤
      </Figure.Caption>
    </Figure>


    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>회식</h6>
        든든한 예산으로 맛있는 회식
      </Figure.Caption>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>세미나</h6>
        선배들에게 듣는 유익한 꿀팁 세미나
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>MT</h6>
        방학에 함께 떠나는 MT
      </Figure.Caption>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>크리스마스 파티</h6>
        모든 CSPC 랩원이 모여 이야기하는 크파
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="img/gr.png"
      />
      <Figure.Caption>
        <h6>디스코드</h6>
        심심하면 언제든 함께 만나는 디스코드
      </Figure.Caption>
    </Figure>
      </>
  )
}

export default Introduce;