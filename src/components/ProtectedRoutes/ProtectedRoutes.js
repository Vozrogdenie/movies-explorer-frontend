import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import api from '../../utils/MainApi';

const ProtectedRoutes = () => {
  const loggedIn = typeof api._getToken() === 'string' ? true : false;
  return (
      loggedIn ? <Outlet loggedIn={loggedIn}/> : <Navigate to="/" />
  )
}

export default ProtectedRoutes;