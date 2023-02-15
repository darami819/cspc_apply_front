import React from 'react';
import './Main.css';

import Card from 'react-bootstrap/Card';

const WeDo = () => {
    return (
        <div
            className="main"
            style={{
                paddingLeft: '54px',
                display: 'block',
            }}
        >
            <div>
                WeDo
            </div>
            <div>
                <Card
                    className="WeDoStyle"
                >
                </Card>
                <Card
                    className="WeDoStyle"
                >
                </Card>
                <section
                    className="WeDoStyle"
                    style={{
                        overflow: 'auto',
                    }}
                >
                </section>
            </div>
        </div>
    );
};

export default WeDo;