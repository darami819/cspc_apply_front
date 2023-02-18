import React from 'react';

import img from './components/img/main_apply_img.png';

const MainApplyCard = () => {
    return (
        <div
        className="main"
        style={{
            textAlign: 'center',
            position: 'relative',
        }}
        >
            <img src={img}
                style={{
                    position: "relative",
                    width: '1300px',
                    height: '258px',

                    borderRadius: '15px',
                }}
            />
            <div
                className="letterStyle_3"
                style={{
                    top: '70px',
                    left: '65px',
                }}
            >
                2023 1학기 신입 부원 모집
            </div>
            <button
                className="ButtonStyle"
                style={{
                    top: '169px',
                    left: '1042px',
                }}
            >
                지원하기
            </button>
        </div>
    );
};

export default MainApplyCard;