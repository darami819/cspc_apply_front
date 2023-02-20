import React from 'react';

import GoWriteApply from '../Components/GoWriteApply';

import './ExistenceApplication.css';

const ExistenceApplication = () => {
    return (
        <div
            className="ExistenceApplication"
        >
            <div
                className="ExistenceApplication_1"
            >
                작성 중인 지원서가 있습니다.
            </div>
            {/* logic 필요 */}
            <div
                className="ExistenceApplication_2"
            >
                2023.03.02 21:00에 저장된 지원서
            </div>
            <div
                className="GoWriteApplyStyle"
            >
                <GoWriteApply />
            </div>
        </div>
    );
};

export default ExistenceApplication;