import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ component: Component, ...props }) {
  console.log(props.isLoggedIn);
  return localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Navigate to='/' />
  );
}
