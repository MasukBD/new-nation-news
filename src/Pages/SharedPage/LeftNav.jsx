/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sideImage1 from '../../assets/images/1.png';
import sideImage2 from '../../assets/images/2.png';
import sideImage3 from '../../assets/images/3.png';

const LeftNav = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagory(data))
            .catch(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <>
            <div>
                <h5 className='bg-body-secondary py-3 text-center'>Catagories</h5>
                {
                    catagory.map(c => <p key={c.id} className='py-2 px-4 catagory-link'
                    >
                        <Link to={`/catagories/${c.id}`} className='text-decoration-none text-black d-block'>
                            {c.name}
                        </Link></p>)
                }
            </div>
            <div>
                <h4 className='my-3'>Gadgets</h4>
                <Row className='gap-4'>
                    <Col sm={10}>
                        <img src={sideImage1} alt="" />
                        <h6 className='pt-1'>These Young Kids are Very Talent About Space X</h6>
                    </Col>
                    <Col sm={12}>
                        <img src={sideImage2} alt="" />
                        <h6 className='pt-1'>Working with a good team make you fruitfull</h6>
                    </Col>
                    <Col sm={12}>
                        <img src={sideImage3} alt="" />
                        <h6 className='pt-1'>Content Creator of football arena become Skillfull</h6>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default LeftNav;