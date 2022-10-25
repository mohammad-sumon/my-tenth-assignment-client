import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <div>
            <h1 className='text-center my-3' style={{color: 'orange'}}>Welcome to our Courses</h1>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;