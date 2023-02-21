import React from 'react';

import './RequiredInput.css';

import star from './requiredInput.png';

const RequiredInput = ({ children, name, phone, studentId, semester }) => {
    return (
        <div
            className="RequiredInput"
        >
            <div
                className="RequiredQuestion"
            >
                {children}
                <img src={star} className="star" />
            </div>
            <div>
                {(name || phone) &&
                    <input
                        className="InputWindow NamePhone"
                    >
                    </input>}
                {studentId &&
                    <div>
                        {/* 학번 값은 로그인할 때 가져와서 고정 */}
                        <input
                            className="InputWindow studentId" value="00"
                        >
                        </input>
                        학번
                    </div>}
                {semester &&
                    <div
                        className="directionRow"
                    >
                        <input
                            className="InputWindow studentId"
                        >
                        </input>
                        학기
                        <div
                            className="SemesterStandard"
                        >
                            (2023년 3월 기준)
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default RequiredInput;