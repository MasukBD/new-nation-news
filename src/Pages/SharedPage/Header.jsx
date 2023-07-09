/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navigationbar from './Navigationbar';

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
                <Navigationbar></Navigationbar>
            </Container>
        </div>
    );
};

export default Header;