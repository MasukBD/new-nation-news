/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { Button, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='my-4'>
            <div className="text-center">
                <img src={logo} alt="Newspaper Headline" />
                <p>Journalism With No Fear and No Favour!</p>
                <p className='my-1 fw-semibold'>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
            </div>
            <Container className='my-1'>
                <div className='d-flex bg-body-secondary p-2 my-2'>
                    <strong className='bg-danger py-1 px-2 bg-opacity-75 text-white rounded'>Breaking</strong>
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
                                <Nav.Link className='fw-semibold' href="/">Home</Nav.Link>
                                <Nav.Link className='fw-semibold' href="">About</Nav.Link>
                                <Nav.Link className='fw-semibold' href="">Career</Nav.Link>
                            </Nav>
                            <Nav className='d-flex align-items-center justify-content-center'>
                                {
                                    user && <Link style={{ fontSize: '2em', color: 'black' }} className='fw-semibold pe-3' href=""><FaUserCircle></FaUserCircle></Link>
                                }
                                {
                                    user ? <Link href=""><Button variant="dark">Log Out</Button></Link> : <Link to="/login"><Button variant="dark">Log In</Button></Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;