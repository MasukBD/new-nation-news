/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../assets/images/qZone1.png';
import image2 from '../../assets/images/qZone2.png';
import image3 from '../../assets/images/qZone3.png';

const KidsZone = () => {
    return (
        <div className='mt-3 p-2 bg-light'>
            <h5 className='my-2'>Kids Zone</h5>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
    );
};

export default KidsZone;