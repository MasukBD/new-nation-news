/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigationbar from '../SharedPage/Navigationbar';

const Login = () => {
    return (
        <>
            <Navigationbar></Navigationbar>
            <div style={{ height: '100vh' }} className='py-4 bg-body-secondary d-flex align-items-center'>
                <div className='bg-white p-3 w-50 mx-auto rounded'>
                    <h3 className='text-center'>Please Login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className='d-inline-block' type="checkbox" label="I Accept Terms and Conditions " required /><Link> Learn More</Link>
                        </Form.Group>

                        <Button className='w-100' variant="primary" type="submit">
                            LogIn
                        </Button>
                        <br />
                        <Form.Text className="text-muted text-center">
                            <p className='pt-3'>Don&apos;t have Account <Link className='text-decoration-none text-info fw-semibold' to="/register">Register Now!</Link></p>
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </>

    );
};

export default Login;