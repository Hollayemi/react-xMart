import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthOutlet = () => {
    // handle Auth
    let auth = false;
    return !auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthOutlet;
