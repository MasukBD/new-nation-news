/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Pages/SharedPage/Header';
import Footer from '../Pages/SharedPage/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../Pages/SharedPage/RightNav';
import useTitle from '../Hook/useTitle';

const NewsLayout = () => {
    useTitle('News Details');
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;