import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Courses = (props) => {

    // destructuring
    const { name, price, picture } = props.course || {}

    return (
        <div className="col-md-3 mt-5 mx-auto">
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <Card.Text>
                            <p>price: ${price}</p>
                        </Card.Text>
                        <Button variant="dark">visit</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Courses;