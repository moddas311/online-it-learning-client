import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error));
    }

    return (
        <nav className="navbar navbar-expand-lg  text-white bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src="../../../assets/images.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </Link>
                <Link className="navbar-brand" to='/'>IT Learning</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="mr-10 nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/faq'>FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>

                    </ul>
                    <div className='p-8'>
                        <Link className="btn btn-primary mr-2" to='login'>Login</Link>
                        <Link className="btn btn-primary" to='register'>Registration</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;