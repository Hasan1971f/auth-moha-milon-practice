import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {

   const {user, loading} = useContext(AuthContext)

  if (loading) {
    return <span className="loading loading-spinner text-error"></span>
  }

   if (user) {
      return children
   }

    return (
        <Navigate to='/login'>Login</Navigate>
    );
};

export default Privateroute;