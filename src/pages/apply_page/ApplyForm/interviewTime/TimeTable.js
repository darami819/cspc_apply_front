import React from 'react';
import { useState } from 'react';
import { useAsync } from 'react-async';
import dateFormat, { masks } from "dateformat";

import { interview } from '../../../../apis/interview';

import './TimeTable.css';

import CheckBox from './CheckBox';

const TimeTable = ({ contents, setContent }) => {

    const { data, error, isLoading } = useAsync({ promiseFn: interview }, []);

    const [timeIndex, setTimeIndex] = useState(contents.interview_time_choice);

    // const timeIndex = contents.interview_time_choice;

    const printTime = (time) => {
        const hour = dateFormat(time, "h");
        const endHour = Number(hour) + 1;

        return (
            <>{dateFormat(time, "m월 dd일 오후 h시 ~ ") + endHour + "시"}</>
        );
    };

    console.log(data);

    if (isLoading) return "Loading...";
    if (error) return `Something went wrong: ${error.message}`;
    if (data)

        return (
            <div
                className="TimeTable"
            >
                {data.map(time => (
                    <div
                        key={time.id}
                        className="TimeTableBox"
                    >
                        {time.id % 3 == 2 ?
                            <div
                                className="smallLine Line"
                            />
                            : null}
                        <CheckBox
                            contents={contents} setContent={setContent}
                            id={time.id} isChecked={String(timeIndex).includes(time.id)}
                            timeIndex={timeIndex} setTimeIndex={setTimeIndex}
                        />
                        <div
                            className="TimeTableWord"
                        >
                            {printTime(time.time)}
                        </div>
                    </div>
                ))}
                {/*}
                <div
                    className="TimeTableBox"
                >
                    <CheckBox
                        contents={contents} setContent={setContent}
                        id={0} isChecked={String(timeIndex).includes(0)}
                        timeIndex={timeIndex} setTimeIndex={setTimeIndex}
                    />
                    <div
                        className="TimeTableWord"
                    >
                        가능한 시간이 없음
                    </div>
                </div>
                */}
            </div>
        );
};

export default TimeTable;