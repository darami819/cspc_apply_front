import React from 'react';
import imgMain from './background_main.png';

// styles
import './Main.css';

const ImgMain = () => {
    return (

        <div
            className="main"
            style={{
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <img src={imgMain} className="ImgMainStyle" />
            <div
                className="letterStyle"
                style={{
                    top: '459px',
                }}
            >
                2023 1학기 신입 부원 모집
            </div>
            <button
                className="ButtonStyle"
                style={{
                    top: '521px',
                }}
            >
                지원하기
            </button>
        </div>
    );
};

export default ImgMain;