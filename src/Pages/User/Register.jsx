/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Navigationbar from '../SharedPage/Navigationbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';

const Register = () => {

    useTitle('register')
    const { createUserByEmail } = useContext(AuthContext);
    const [termAccept, setTermAccept] = useState(false);

    const handleAcceptButton = e => {
        setTermAccept(e.target.checked);
    }


    const handleEmaiRegister = (e) => {
        e.preventDefault();
        const formValue = e.target;
        const name = formValue.name.value;
        const email = formValue.email.value;
        const photo = formValue.profilePic.value;
        const password = formValue.password.value;

        createUserByEmail(email, password)
            .then(result => {
                const newUser = result.user;
                updateProfile(newUser, { displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success('Registered Successfully');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                console.log(newUser);
                formValue.reset();
            })
            .catch(error => {
                console.log(error.message);
            })

        console.log(name, email, password, photo)
    }

    return (
        <>
            <Navigationbar></Navigationbar>
            <div style={{ height: '100vh' }} className='py-4 bg-body-secondary d-flex align-items-center'>
                <div className='bg-white p-3 w-50 mx-auto rounded'>
                    <h3 className='text-center'>Please Register</h3>
                    <Form onSubmit={handleEmaiRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="text" name='profilePic' placeholder="Put your Photo URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAcceptButton}
                                className='d-inline-block'
                                type="checkbox"
                                label="I Accept Terms and Conditions "
                            /><Link to='/terms'> Learn More</Link>
                        </Form.Group>

                        <Button disabled={!termAccept} className='w-100' variant="primary" type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-muted text-center">
                            <p className='pt-3'>Already have Account?<Link className='text-decoration-none text-info fw-semibold' to="/login">Please Login</Link></p>
                        </Form.Text>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Register;