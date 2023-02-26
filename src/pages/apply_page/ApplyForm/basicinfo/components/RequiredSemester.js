import React from 'react';

import './Required.css';

import star from '../requiredInput.png';

const RequiredSemester = ({ info, onChange }) => {
    return (
        <div
            className="RequiredInput"
        >
            <div
                className="RequiredQuestion"
            >
                학기
                <img src={star} className="star" />
            </div>
            <div>
                <div
                    className="directionRow"
                >
                    <input
                        className="InputWindow semester"
                        name="semester"
                        value={info}
                        onChange={onChange}
                    >
                    </input>
                    학기
                    <div
                        className="SemesterStandard"
                    >
                        (2023년 3월 기준)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequiredSemester;