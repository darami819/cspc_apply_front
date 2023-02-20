// Apply.js 에서 모든 Apply page관리

import React from 'react';

//// pages
// First Login
import ApplyFirst from './ApplyFirst/ApplyFirst';

// css
import './Apply.css';

const Apply = () => {
    // 처음 작성하는 경우
    return(
        <div
            className="ApplyStyle"
        >
            <ApplyFirst/>
        </div>
    );
};

export default Apply;