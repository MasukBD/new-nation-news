/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigationbar from './SharedPage/Navigationbar';

const TermsCondition = () => {
    return (
        <>
            <Navigationbar></Navigationbar>
            <div>
                <h3 className='text center'>This is Terms and Condition Page We will add all the term and condition later and degin it later then!!</h3>

                <Link to='/register'>Back to Register Page</Link>
            </div>
        </>
    );
};

export default TermsCondition;