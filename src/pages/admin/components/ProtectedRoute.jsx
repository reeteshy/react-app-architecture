import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';  // If using react-router-dom
import { useGetCurrentUserQuery } from '../../../services/ermcApi';

const ProtectedRoute = ({ children }) => {

  
  const { data: user } = useGetCurrentUserQuery(null, {
    skip: !token, // Skip API call if token is not available
  });

  useEffect(() => {
      console.log("useruseruser1 ", user)
      // If user details are fetched successfully, set user in the Redux state
    if (user) {
      console.log("useruseruser ", user)
      // dispatch(setCredentials({ user, token }));
    } else {
      // If no token is available, redirect to the login page
      navigate('/');
    }
  }, [user, token, navigate]);



    const accessToken = useSelector((state) => state?.auth?.accessToken);
    if (!accessToken) {
      return <Navigate to={'/'} />; 
    }
    return children;
};

export default ProtectedRoute;
