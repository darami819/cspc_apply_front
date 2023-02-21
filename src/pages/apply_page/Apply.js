// Apply.js 에서 모든 Apply page관리

import React from 'react';

//// pages
// First Login
import ApplyFirst from './ApplyFirst/ApplyFirst';
// Second Login
import ApplySecond from './ApplySecond/ApplySecond';
// Apply From
import ApplyForm from './ApplyForm/ApplyForm';
// Complete Apply
import ApplyComplete from './applyComplete/ApplyComplete';

// css
import './Apply.css';

const Apply = () => {
    const i = 3;
    // 처음 작성하는 경우
    if (i === 0)
        return (
            <div
                className="ApplyStyle"
            >

                <ApplyFirst />
            </div>
        );
    else if (i === 1)
        return (
            <div
                className="ApplyStyle"
            >
                <ApplySecond />
            </div>
        );
    else if (i == 2)
        return (
            <div
                className="ApplyStyle"
            >
                <ApplyForm />
            </div>
        );
    else if (i == 3)
        return (
            <div
                className="ApplyStyle"
            >
                <ApplyComplete />
            </div>
        );

};

export default Apply;