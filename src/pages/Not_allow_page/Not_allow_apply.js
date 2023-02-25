import React from 'react'
import './Not_allow_apply.css';
import { Link } from 'react-router-dom';


const Not_allow_apply = () => {
    return(
        <>
        <div className='black'>
            <div className='not_allowbox'>
                <div className='not_allowlen1'>현재 신입 부원을 받고 있지 않습니다.<br/>
                    CSPC는 상반기 학기 초(정기), 하반기 학기 초 (비정기)에 신입 부원을 모집합니다.
                </div>
                <div className='not_allowlen2'>문의<br/>학회장 000 abc@gmail.com</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Link to='/' style={{ textDecoration: "none" }}><div className='button_'>CSPC 홈으로 돌아가기</div></Link>
            </div>
            
            
        </div>
        
        </>

    )
}

export default Not_allow_apply;