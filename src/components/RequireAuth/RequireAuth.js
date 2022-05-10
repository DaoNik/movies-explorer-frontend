import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ component: Component, ...props }) {
  return localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Navigate to='/' />
  );
}
