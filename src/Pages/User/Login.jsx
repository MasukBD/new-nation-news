/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigationbar from '../SharedPage/Navigationbar';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const destination = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const formValue = e.target;
        const email = formValue.email.value;
        const password = formValue.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                toast.success('Login successfully');
                console.log(loggedUser);
                navigate(destination, { replace: true });
                formValue.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <Navigationbar></Navigationbar>
            <div style={{ height: '100vh' }} className='py-4 bg-body-secondary d-flex align-items-center'>
                <div className='bg-white p-3 w-50 mx-auto rounded'>
                    <h3 className='text-center'>Please Login</h3>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className='d-inline-block' type="checkbox" label="Remember Me" /><Link> Learn More</Link>
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