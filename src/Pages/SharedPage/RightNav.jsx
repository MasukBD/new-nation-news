/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twiter from '../../assets/images/twitter.png';
import KidsZone from './KidsZone';
import './SharedStyle/RightNav.css';

const RightNav = () => {
    return (
        <>
            <h5 className='my-2'>Login With</h5>
            <div className='my-1'>
                <Button className='w-100' variant="outline-warning"><FaGoogle /> Continue with Google</Button>
                <Button className='my-2 w-100' variant="outline-dark"><FaGithub /> Continue with GitHub</Button>
            </div>
            <div>
                <h5 className='my-2'>Find Us On</h5>
                <p className='border px-2 py-3 my-0 border-bottom-0'> <img width={30} src={facebook} alt="" /> Facebook</p>
                <p className='border px-2 py-3 my-0'> <img width={30} src={twiter} alt="" /> Twiter</p>
                <p className='border px-2 py-3 my-0 border-top-0'> <img width={30} src={instagram} alt="" /> Instagram</p>
            </div>
            <KidsZone></KidsZone>
            <div className='text-center p-5 advertize text-white mt-4'>
                <h3>Build Your Career with The New Nation Group</h3>
                <p>Discover thousand of options. Easy to learn Reinforcement Learning and develop strong skills with specialized Mentors!!</p>
                <Button className='mt-3' variant="danger">Learn More</Button>
            </div>
        </>
    );
};

export default RightNav;