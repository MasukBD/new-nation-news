/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    console.log(catagory)
    return (
        <div>
            <h5 className='bg-body-secondary py-3 text-center'>Catagories</h5>
            {
                catagory.map(c => <p key={c.id} className='py-2 px-4 catagory-link'
                >
                    <Link to={`/catagories/${c.id}`} className='text-decoration-none text-black'>
                        {c.name}
                    </Link></p>)
            }

        </div>
    );
};

export default LeftNav;