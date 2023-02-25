import React from 'react';

import './Required.css';

import star from '../requiredInput.png';

const RequiredPhone = ({ info, onChange }) => {
    return(
        <div
            className="RequiredInput"
        >
            <div
                className="RequiredQuestion"
            >
                전화번호
                <img src={star} className="star" />
            </div>
            <div>
                    <input
                        className="InputWindow NamePhone"
                        name="phone"
                        value={info}
                        onChange={onChange}
                    >
                    </input>
            </div>
        </div>
    );
};

export default RequiredPhone;