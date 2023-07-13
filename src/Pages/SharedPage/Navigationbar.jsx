/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Nav, Navbar, Container, Image } from 'react-bootstrap';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navigationbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
                toast.success('logged out Successfull!');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
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
                                user && <Image style={{ width: '50px', marginRight: '10px', height: '50px' }} roundedCircle src={user.photoURL}></Image>
                            }
                            {
                                user ? <Link href=""><Button onClick={handleLogOut} variant="dark">Log Out</Button></Link> : <Link to="/login"><Button variant="dark">Log In</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigationbar;