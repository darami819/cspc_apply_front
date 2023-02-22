import React from 'react';

import WriteApplication from '../Components/WriteApplication';
import ExistenceApplication from './ExistenceApplication';

const ApplySecond = ({ setPage }) => {
    return(
        <div>
            <WriteApplication />
            <ExistenceApplication setPage={setPage}/>
        </div>
    );
};

export default ApplySecond;