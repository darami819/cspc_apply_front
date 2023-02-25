import React from 'react';
import { useState } from 'react';

import './TimeTable.css';

const CheckBox = ({ contents, setContent, id, isChecked, timeIndex, setTimeIndex }) => {
    console.log(isChecked);

    const changeChecked = ({ id }) => {
        if(isChecked) {
            console.log('checked' + id);
            setTimeIndex(timeIndex.filter(index => index !== id));
            setContent({
                ...contents,
                "interview_time_choice": (contents.interview_time_choice).filter(index => index !== id)
            })
        }
        else {
            console.log('unchecked' + id);
            setTimeIndex(new Array(...timeIndex, id));
            setContent({
                ...contents,
                "interview_time_choice": new Array(...(contents.interview_time_choice), id)
            })
        }
    };


    if (isChecked)
        return (
            <button
                id={id}
                className="TimeTableButton checkedButton"
                onClick={() => changeChecked({id})}
            />
        );
    else
        return (
            <button
                id={id}
                className="TimeTableButton unCheckedButton"
                onClick={() => changeChecked({id})}
            />
        );
};

export default CheckBox;