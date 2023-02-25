import React from 'react';

import WriteApplication from '../Components/WriteApplication';
import ExistenceApplication from './ExistenceApplication';

const ApplySecond = ({ setPage, isFirst }) => {
    return(
        <div>
            <WriteApplication />
            <ExistenceApplication setPage={setPage}/>
        </div>
    );
};

export default ApplySecond;