import React from 'react';
//card components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MakeCards from '../../layouts/MakeCards';

// components
import ImgMain from './ImgMain/ImgMain';
import IntroduceMain from './IntroduceMain';
import MoreStory from './MoreStory';
import MainApplyCard from './MainApplyCard';
import MainBlank from './MainBlank';


const Main = () => {
    /*
    return (
        <>
            <ImgMain/>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="img/임시2.png" />
                <Card.Body>
                    <Card.Title>Since...</Card.Title>
                    <Card.Text>
                        언제부터죠?
                        ss
                    </Card.Text>
                    <Button variant="primary">detail</Button>
                </Card.Body>
            </Card>

            <MakeCards></MakeCards>
        </>
    );
    */
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