import React from 'react';
import { Card } from 'react-bootstrap';

const Items = (props) => {
    // destructuring
    const { name, price, picture } = props.item || {}

    return (
        <div className="col-md-3 mx-auto">
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            <p>price: {price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Items;