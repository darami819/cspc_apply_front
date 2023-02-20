import React from 'react';
import { useState } from 'react';

import './Components.css';

import StepButton from './StepButton';

const ThreeSteps = () => {
    const [step, setStep] = useState(0);

    return(
        <div
            className="StepStyle"
        >
            <StepButton selected={(step===0)} children='개인정보 동의'/>
            <StepButton selected={(step===1)} children='지원서 작성'/>
            <StepButton selected={(step===2)} children='제출'/>
        </div>
    );
};

export default ThreeSteps;