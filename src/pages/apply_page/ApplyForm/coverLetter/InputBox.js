import React from 'react';

import './InputBox.css';

const InputBox = ({ info, setContent, onChange, title }) => {
    return(
        <input
            className="InputBox"
            name={title}
            value={info}
            onChange={onChange}
        ></input>
    );
};

export default InputBox;