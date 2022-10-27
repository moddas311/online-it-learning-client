import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../assets/logo/it-logo.png';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user);

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
                    <Image style={{ height: '40px' }} src={logo}></Image>
                </Link>
                <Link className="navbar-brand" to='/'>Online IT Learning</Link>
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
                        <li>
                        </li>
                    </ul>
                    <Link>
                        {user?.photoURL ?
                            <Image
                                style={{ height: '40px' }}
                                roundedCircle
                                src={user?.photoURL}></Image>
                            :
                            <FaUser className='bg-white'></FaUser>
                        }
                    </Link>

                    <>
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button className='btn btn-primary' onClick={handleLogOut}>LogOut</Button>
                                </>
                                :
                                <>
                                    <Link className="btn btn-primary mr-2" to='login'>Login</Link>
                                    <Link className="btn btn-primary" to='register'>Registration</Link>
                                </>
                        }
                    </>

                </div>
            </div>
        </nav>
    );
};

export default Header;