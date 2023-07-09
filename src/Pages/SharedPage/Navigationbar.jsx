/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
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
        </div>
    );
};

export default Navigationbar;