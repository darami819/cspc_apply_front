import React from 'react';

import checkBox from './checkBox.png';

import './TimeTable.css';

const TimeTable = () => {
    // api 값으로 받아오기
    const time_list = [
        { id: 0, data: '3월 12일 일요일 오후 6시 ~ 7시' },
        { id: 1, data: '3월 12일 일요일 오후 7시 ~ 8시' },
        { id: 2, data: '3월 12일 일요일 오후 8시 ~ 9시' },
        { id: 3, data: '3월 12일 일요일 오후 9시 ~ 10시' },
        { id: 4, data: '3월 12일 일요일 오후 6시 ~ 7시' },
        { id: 5, data: '3월 12일 일요일 오후 7시 ~ 8시' },
        { id: 6, data: '3월 12일 일요일 오후 8시 ~ 9시' },
        { id: 7, data: '3월 12일 일요일 오후 9시 ~ 10시' },
    ];

    return (
        <div
            className="TimeTable"
        >
            {time_list.map(time => (
                <div
                    className="TimeTableBox"
                >
                    <button className="TimeTableButton unCheckedButton" />
                    <div
                        className="TimeTableWord"
                    >
                        {time.data}
                    </div>
                </div>
            ))}
            <div className="smallLine topLine" />
            <div className="smallLine bottomLine" />
            <div
                className="TimeTableBox"
            >
                <button className="TimeTableButton unCheckedButton" />
                <div
                    className="TimeTableWord"
                >
                    가능한 시간이 없음
                </div>
            </div>
        </div>
    );
};

export default TimeTable;