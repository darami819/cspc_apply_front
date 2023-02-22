import React from 'react';

import WriteApplication from '../Components/WriteApplication';
import Steps from '../Components/Steps';
import BasicInfo from './basicinfo/BasicInfo';
import CoverLetter from './coverLetter/CoverLetter';
import InterviewTime from './interviewTime/InterviewTime';

const ApplyForm = ({ isFirst }) => {
    return(
        <div>
            <WriteApplication/>
            <Steps
                agree={2}
                write={1}
                apply={0}
            />
            <BasicInfo isFirst={isFirst}/>
            <CoverLetter isFirst={isFirst}/>
            <InterviewTime isFirst={isFirst}/>
        </div>
    );
};

export default ApplyForm;