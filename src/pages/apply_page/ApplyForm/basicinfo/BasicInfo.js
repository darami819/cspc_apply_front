import React from 'react';

import RequiredInput from './RequiredInput';

import './BasicInfo.css';

const BasicInfo = () => {
    return(
        <div
            className="basicInfo"
        >
            <RequiredInput children="이름" name/>
            <RequiredInput children="전화번호" phone/>
            <RequiredInput children="학번" studentId/>
            <RequiredInput children="학기" semester/>
        </div>
    );
};

export default BasicInfo;