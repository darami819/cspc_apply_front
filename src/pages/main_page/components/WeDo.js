import React from 'react';
import './Main.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const WeDo = () => {
    return (
        <div>
            <div
                style={{
                    paddingLeft: '108px',
                }}
            >
                WeDo
            </div>

            <div
                className="main"
                style={{
                    paddingLeft: '54px',
                    display: 'fixed',
                }}
            >
                <Card
                    className="WeDoStyle"
                >
                    <div
                        className="letterStyle"
                        style={{
                            top: 202,
                            left: 51,
                        }}
                    >랩실관리</div>
                </Card>
                <Card
                    className="WeDoStyle"
                >
                    <div
                        className="letterStyle"
                        style={{
                            top: 202,
                            left: 51,
                        }}
                    >스터디/프로젝트</div>
                </Card>
                <Card
                    className="WeDoStyle"
                >
                    <div
                        className="letterStyle"
                        style={{
                            top: 202,
                            left: 51,
                        }}
                    >선배찬스</div>
                </Card>
            </div>
        </div>
    );
};

export default WeDo;