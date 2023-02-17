import React from 'react';

import img_3 from '../components/img/main_img_3.png';

import '../components/Main.css';

const ImgMain_3 = () => {
    return(
        <div
                className="main"
                style={{
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <img src={img_3} className="ImgMainStyle" />
                {/* gray rectangle */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '1005px',
                        left: '0%',
                        right: '0%',
                        top: '0px',
                        background: 'rgba(0, 0, 0, 0.6)',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',

                        width: '1300px',
                        height: '79px',

                        top: '721px',
                        left: '310px',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',

                            height: '79px',

                            top: '0px',
                            left: '0px',
                        }}
                    >
                        <div
                            className="letterStyle_3"
                        >
                            랩실 관리
                        </div>
                        <div
                            className="letterStyle_4"
                            style={{
                                top: '53px',
                            }}
                        >
                            리치과학관 914호 실습실을 관리합니다.
                        </div>
                    </div>
                    <div
                        style={{
                            position: 'relative',

                            height: '79px',

                            top: '0px',
                            left: '761px',
                        }}
                    >
                        <div
                            className="letterStyle_3"
                        >
                            스터디/프로젝트
                        </div>
                        <div
                            className="letterStyle_4"
                            style={{
                                top: '53px',
                            }}
                        >
                            함께 배우고 싶은 것 무엇이든 응원합니다.
                        </div>
                    </div>
                    <div
                        style={{
                            position: 'relative',

                            height: '79px',

                            top: '0px',
                            left: '1222px',
                        }}
                    >
                        <div
                            className="letterStyle_3"
                        >
                            선배 찬스
                        </div>
                        <div
                            className="letterStyle_4"
                            style={{
                                top: '53px',
                            }}
                        >
                            먼저 불어볼 수 있는 선배가 있어 든든합니다.
                        </div>
                    </div>
                </div>
                <button
                    className="ButtonStyle"
                    style={{
                        top: '876px',
                        left: '1417px',
                    }}
                >
                    <div
                        className="letterStyle_2"
                        style={{
                            top: '11.5px',
                            left: '59px',

                            fontSize: '18px',
                        }}
                    >
                        지원하기
                    </div>
                </button>
            </div>
    );
};

export default ImgMain_3;