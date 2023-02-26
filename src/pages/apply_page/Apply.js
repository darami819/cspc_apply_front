// Apply.js 에서 모든 Apply page관리
import React from 'react';
import { useState } from 'react';
import { useAsync } from 'react-async';
import { useLocation } from 'react-router-dom';

import { post_resume, update_resume } from '../../apis/resume';

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

// Login.js에서 firstLogin 여부 확인해서 처리하기

// context
import { Provider } from './ApplyForm/context/index'

const Apply = () => {
    // 처음인지 여부 알아와서 넣기

    const location = useLocation();
    const data = location.state;

    console.log(location);
    console.log("data");
    console.log(data);

    const [isFirst, setIsFirst] = useState(data == null);

    console.log("isFirst: " + isFirst);


    // parameter page넣기
    const [pages, setPage] = useState(isFirst == true ? 1 : 2);
    // 0 -> LoginPage
    // 1 -> firstLogin
    // 2 -> SecondLogin
    // 3 -> ApplyForm
    // 4 -> ApplyComplete

    // 초기값

    const [contents, setContent] = useState(
        isFirst?
        {
        "interview_time_choice": [],
        "name": "",
        "semester": 0,
        "phone": "",
        "introduce": "",
        "motivate": "",
        "to_do": "",
        "etc": "",
        "interview_requirement": "",
    }:data);

    console.log(contents);

    const postContent = async () => {
        console.log(contents);

        const response_data = await post_resume(contents);

        // 정상적으로 제출하지 않았을 경우 알람 나오게

        console.log('postContent ' + response_data.detail);
    };
    const patchContent = async () => {
        console.log(contents);

        const tempContent = contents;
        delete tempContent.updated_at;

        setContent(tempContent);

        const response_data = await update_resume(contents);

        // 정상적으로 제출하지 않았을 경우 알람 나오게

        console.log('patchContent ' + response_data);
    };

    const uploadContent = () => {
        console.log('upload')
        if (isFirst) {
            postContent();
        }
        else {
            patchContent();
        }

        // 제대로 제출되었을 때만 페이지 이동
        // form check 
        // -> 

        setPage(4);
    };

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
                        <ApplySecond setPage={setPage} updateTime={data.updated_at} />
                    </div>
                </>
            );
        case 3:
            return (
                <Provider>
                    <ApplyBanner />
                    <div
                        className="ApplyStyle"
                    >
                        <ApplyForm isFirst={isFirst} contents={contents} setContent={setContent} uploadContent={uploadContent} />
                    </div>
                </Provider>
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