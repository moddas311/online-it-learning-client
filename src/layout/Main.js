import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

const Main = () => {


    // if (loading) {
    //     return <div className="d-flex justify-content-center">
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     </div>
    // }

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav />
                    </Col>
                    <Col lg='9'>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;