import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MenuCards = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{props.comida}</Card.Title>
                    <Card.Text>
                        Without a doubt one of the best Italian Food of this area. Simple, Clean, Delicious 
                    </Card.Text>
                    <Button variant="primary">Add to the order</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuCards
