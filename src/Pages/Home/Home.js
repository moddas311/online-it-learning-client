import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const allTopics = useLoaderData()

    return (
        <div>
            <h2>This is Home: {allTopics.length}</h2>
        </div>
    //     <CardGroup className='mt-8'>
    //     <Card className='m-2'>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //                 This is a wider card with supporting text below as a natural lead-in
    //                 to additional content. This content is a little bit longer.
    //             </Card.Text>
    //         </Card.Body>
    //         <Button>Go somewhere</Button>
    //     </Card>
    //     <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //                 This card has supporting text below as a natural lead-in to
    //                 additional content.{' '}
    //             </Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //             <small className="text-muted">Last updated 3 mins ago</small>
    //         </Card.Footer>
    //     </Card>
    //     <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //             <Card.Title>Card title</Card.Title>
    //             <Card.Text>
    //                 This is a wider card with supporting text below as a natural lead-in
    //                 to additional content. This card has even longer content than the
    //                 first to show that equal height action.
    //             </Card.Text>
    //         </Card.Body>
    //         <Card.Footer>
    //             <small className="text-muted">Last updated 3 mins ago</small>
    //         </Card.Footer>
    //     </Card>
    // </CardGroup>
    );
};

export default Home;