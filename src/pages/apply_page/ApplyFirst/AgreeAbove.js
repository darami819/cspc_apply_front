import React, { useState } from 'react';

import GoWriteApply from '../Components/GoWriteApply';

import './AgreeAbove.css';

const AgreeAbove = () => {
    const [checked, setChecked] = useState(1);

    const isChecked = () => {
        if (checked === 0)
            return false;
        else
            return true;
    };

    const changeChecked = () => {
        if (checked === 0)
            setChecked(1);
        else
            setChecked(0);
    }

    return (
        <div
            className="AgreeAboveCheck"
        >
            <div>
                {isChecked() ?
                    <button
                        className="unChecked Button"
                        onClick={(changeChecked)}
                    >
                    </button>
                    : <button
                        className="checked Button"
                        onClick={(changeChecked)}
                    >
                    </button>
                }
            </div>
            <div
                className="AgreeAboveWord"
            >
                위 사항에 동의합니다.
            </div>
            <div
                className="GoWriteApplyButton"
            >
                {/* isChecked() 가 1일 때만 링크 이동할 수 있게 하기 */}
                <GoWriteApply />
            </div>
        </div>
    );
};

export default AgreeAbove;