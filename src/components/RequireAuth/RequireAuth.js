import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ component: Component, ...props }) {
  console.log(props.isLoggedIn);
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/signin' />
  );
}
