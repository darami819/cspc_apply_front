import React from 'react';

import './InputBox.css';

const InputBox = ({ info, setContent, onChange, title }) => {
    return(
        <textarea
            id={title}
            className="InputBox"
            name={title}
            value={info}
            onChange={onChange}
        ></textarea>
    );
};

export default InputBox;