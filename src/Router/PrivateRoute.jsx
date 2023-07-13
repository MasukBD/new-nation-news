/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <p className='d-flex justify-content-center'><Spinner animation="border" variant="primary" /></p>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to='/login' replace></Navigate>
    }
};

export default PrivateRoute;