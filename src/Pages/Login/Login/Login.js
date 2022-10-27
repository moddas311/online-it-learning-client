import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const [error, setError] = useState('');

    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    const handleGithubSignIn = () => {
        providerLogin(GithubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
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

                <>
                    <p>{error}</p>
                </>
            </Form>
            <hr className='border border-dark border-2 opacity-30' />

            <Link className='text-decoration-none' to='/register'>Do not have account?</Link>
            <div className='text-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant="outline-secondary" className='mb-2 rounded'><FaGoogle /> Login with Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark" className='mb-2 rounded'><FaGithub /> Login with Github</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Login;
