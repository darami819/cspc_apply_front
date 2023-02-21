import React from 'react';

import WriteApplication from '../Components/WriteApplication';
import Steps from '../Components/Steps';
import BasicInfo from './BasicInfo';

const ApplyForm = () => {
    return(
        <div>
            <WriteApplication />
            <Steps />
            <BasicInfo />
        </div>
    );
};

export default ApplyForm;