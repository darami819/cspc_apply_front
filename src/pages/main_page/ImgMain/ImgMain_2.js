import React from 'react';

import img_2 from '../components/img/main_img_2.png';

import '../components/Main.css';

const ImgMain_2 = () => {
    return (
        <div
            className="main"
            style={{
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <img src={img_2} className="ImgMainStyle" />
        </div>
    );
};

export default ImgMain_2;