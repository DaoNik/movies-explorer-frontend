import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireLogout({ component: Component, ...props}) {
  return localStorage.getItem('token') ? (
    <Navigate to='/' />
  ) : (
    <Component {...props} />
  )
}
