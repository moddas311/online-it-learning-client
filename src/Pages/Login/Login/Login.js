import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Login = () => {
    return (
        <>
            <Form className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter
                your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary"  type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <hr className='border border-dark border-2 opacity-30' />
            <div className='text-center'>
                <ButtonGroup vertical>
                    <Button variant="outline-secondary" className='mb-2 rounded'>Google</Button>
                    <Button variant="outline-dark" className='mb-2 rounded'>Github</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Login;