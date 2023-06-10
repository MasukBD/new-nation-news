/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/images/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { Button, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='my-4'>
            <div className="text-center">
                <img src={logo} alt="Newspaper Headline" />
                <p>Journalism With No Fear and No Favour!</p>
                <p className='my-1 fw-semibold'>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
            </div>
            <Container className='my-1'>
                <div className='d-flex bg-body-secondary p-2 my-2'>
                    <strong className='bg-danger py-1 px-2 bg-opacity-75 text-white rounded'>Latest</strong>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
                {/* Navbar Here  */}
                <Navbar collapseOnSelect expand="lg" bg="body-secondary" variant="body-secondary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className='fw-semibold' href="#features">Home</Nav.Link>
                                <Nav.Link className='fw-semibold' href="#pricing">About</Nav.Link>
                                <Nav.Link className='fw-semibold' href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav className='d-flex align-items-center justify-content-center'>
                                <Nav.Link className='fw-semibold' href="#pricing">Profile</Nav.Link>
                                <Nav.Link href="#pricing"><Button variant="dark">Sign In</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;