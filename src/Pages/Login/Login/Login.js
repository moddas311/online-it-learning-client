import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter
                your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <hr className='border border-dark border-2 opacity-30' />
            <div className='text-center'>
                <ButtonGroup vertical>
                    <Button variant="outline-secondary" className='mb-2 rounded'><FaGoogle /> Login with Google</Button>
                    <Button variant="outline-dark" className='mb-2 rounded'><FaGithub /> Login with Github</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Login;
