import React from 'react';
//card components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MakeCards from '../../layouts/MakeCards';

const Main = () => {
    return(
        <>
        main    
        <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="img/임시2.png" />
        <Card.Body>
        <Card.Title>Since...</Card.Title>
        <Card.Text>
            언제부터죠?
        </Card.Text>
        <Button variant="primary">detail</Button>
        </Card.Body>
        </Card>
        
        <MakeCards></MakeCards>
        </>
    );
}

export default Main;