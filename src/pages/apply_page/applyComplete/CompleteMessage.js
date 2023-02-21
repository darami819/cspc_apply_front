import React from 'react';

import './CompleteMessage.css';

const CompleteMessage = () => {
    return (
        <div
            className="CompleteMessage"
        >
            <div
                className="CompleteTitle"
            >
                제출이 완료되었습니다.
            </div>
            <div
                className="CompleteContent"
            >
                제출해주셔서 감사합니다.
            </div>
            <div
                className="CompleteContent"
            >
                꼼꼼히 읽고 지원자님을 모실 수 있도록 하겠습니다.
            </div>
            <div className="CompleteContent" >
                <br/>
            </div>
            <div
                className="CompleteContent"
            >
                서류 결과 안내는 3월 11일 오후 6시에 문자로 안내됩니다.
            </div>
        </div >
    );
};

export default CompleteMessage;