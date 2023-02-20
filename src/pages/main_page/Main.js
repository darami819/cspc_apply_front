import React from 'react';

// components
import ImgMain from './ImgMain/ImgMain';
import IntroduceMain from './IntroduceMain';
import MoreStory from './MoreStory';
import MainApplyCard from './MainApplyCard';
import MainBlank from './MainBlank';

const Main = () => {
    return (
        <>
            <ImgMain />
            <IntroduceMain />
            <MoreStory />
            <MainApplyCard />
            <MainBlank />
        </>
    );
}

export default Main;