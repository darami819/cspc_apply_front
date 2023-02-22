// Apply.js 에서 모든 Apply page관리

import React from 'react';
import { useState, useReducer } from 'react';

//// pages
//Login
import { Login } from '../login_page/Main';
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

// applybanner
import ApplyBanner from '../../layouts/applyBanner/ApplyBanner';

const Apply = () => {
    const [pages, setPage] = useState(3);
    // 0 -> LoginPage
    // 1 -> firstLogin
    // 2 -> SecondLogin
    // 3 -> ApplyForm
    // 4 -> ApplyComplete

    // 처음 작성하는 경우
    switch (pages) {
        case 0:
            return (
                <Login />
            );
        case 1:
            return (
                <>
                    <ApplyBanner />
                    <div
                        className="ApplyStyle"
                    >
                        <ApplyFirst setPage={setPage} />
                    </div>
                </>
            );
        case 2:
            return (
                <>
                    <ApplyBanner />
                    <div
                        className="ApplyStyle"
                    >
                        <ApplySecond setPage={setPage}/>
                    </div>
                </>
            );
        case 3:
            return (
                <>
                    <ApplyBanner />
                    <div
                        className="ApplyStyle"
                    >
                        <ApplyForm />
                    </div>
                </>
            );
        case 4:
            return (
                <>
                    <ApplyBanner />
                    <div
                        className="ApplyStyle"
                    >
                        <ApplyComplete />
                    </div>
                </>
            );
    }
};

export default Apply;