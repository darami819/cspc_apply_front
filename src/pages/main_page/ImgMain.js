import React from 'react';
import imgMain from './background_main.png';

// styles
import './Main.css';

// components
import ButtonMain from './ButtonMain';

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
            <ButtonMain />
        </div>
    );
};

export default ImgMain;