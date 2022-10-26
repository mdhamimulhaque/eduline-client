import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import loaderGif from "../img/icons8-refresh.gif";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="loader_area h-screen w-screen flex justify-center items-center">
            <img src={loaderGif} alt="" />
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;