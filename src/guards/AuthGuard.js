import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux'
// pages
import Login from '../pages/auth/Login';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const userReg = JSON.parse(localStorage.getItem('user'))
  const userRegToken = userReg.token

  console.log('userauth', userRegToken)

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);
  const { isLoading, isError, isSuccess, user } = useSelector(state => state.user)
  if (isLoading) {
    return <LoadingScreen />
  }

  if (!userReg && !userRegToken) {
    return <Navigate to='/auth/login' />;
  }

  // if (userReg) {

  //   return < />;
  // }



  return <>{children}</>;
}
