import React from 'react';
import './Main.css';



const MoreStory = () => {
    return (
        <div
            className="main"
            style={{
                background: 'white',
                height: '496px',
                position: 'relative',
            }}
        >
            <button
                className="ButtonStyle"
                style={{
                    bottom: '216px',
                    position: 'relative',
                }}
            >
                더 많은 이야기
            </button>
        </div>
    );
};

export default MoreStory;