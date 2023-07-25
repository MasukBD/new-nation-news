/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Pages/SharedPage/Header';
import Footer from '../Pages/SharedPage/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/SharedPage/LeftNav';
import RightNav from '../Pages/SharedPage/RightNav';
import useTitle from '../Hook/useTitle';

const Main = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;