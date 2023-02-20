import React from 'react';

const StepButton = ({ selected, children }) => {
    if(selected) {
        return(
            <div
                className="StepButton Selected"
            >
                {children}
            </div>
        );
    }
    else{
        return(
            <div
                className="StepButton UnSelected"
            >
                {children}
            </div>
        );
    }
};

export default StepButton;