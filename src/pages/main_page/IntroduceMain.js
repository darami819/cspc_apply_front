import React from 'react';
import './Main.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


// image
import img_1 from './components/img/main_img_picnic.png';

const IntroduceMain = () => {
    return (
        <div
            style={{
                paddingTop: '167px',
                width: '1300px',
            }}
        >
            <div
                className="letterStyle_5"
            >
                소수라서 더 끈끈한
            </div>

            <div
                className="main"
                style={{
                    textAlign: 'center',
                }}
            >
                <div
                    className="IntroduceStyle"
                >
                    <img src={img_1}
                    className="ImgIntroduceStyle"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <div
                        className="letterStyle_6"
                        style={{
                            position: 'absolute',
                            top: 380,
                            left: 0,
                        }}
                    >소풍</div>
                </div>
                <div
                    className="IntroduceStyle"
                >
                    <div
                        className="letterStyle_6"
                        style={{
                            position: 'absolute',
                            top: 380,
                            left: 0,
                        }}
                    >MT</div>
                </div>
                <div
                    className="IntroduceStyle"
                >
                    <div
                        className="letterStyle_6"
                        style={{
                            position: 'absolute',
                            top: 380,
                            left: 0,
                        }}
                    >크리스마스 파티</div>
                </div>
            </div>
        </div>
    );
};

export default IntroduceMain;