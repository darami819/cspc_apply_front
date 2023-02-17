import React from 'react';

// card
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AlsoDo = () => {
    return (
        <div>
            <div
                style={{
                    paddingLeft: '108px',
                }}
            >
                Also Do
            </div>
            <div
                className="main"
                style={{
                    paddingLeft: '54px',
                    display: 'fixed',
                }}
            >
                <Card
                    className="AlsoDoStyle"
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
                    className="AlsoDoStyle"
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
                    className="AlsoDoStyle"
                >
                    <div
                        className="letterStyle"
                        style={{
                            top: 202,
                            left: 51,
                        }}
                    >랩실관리</div>
                </Card>

            </div>
        </div>
    );
};

export default AlsoDo;