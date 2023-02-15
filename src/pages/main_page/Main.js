import React from 'react';
//card components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MakeCards from '../../layouts/MakeCards';

// components
import ImgMain from './ImgMain';
import IntroduceMain from './IntroduceMain';
import WeDo from './WeDo';
import AlsoDo from './AlsoDo';
import MoreStory from './MoreStory';


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
            <WeDo />
            <AlsoDo />
            <MoreStory />
        </>
    );
}

export default Main;