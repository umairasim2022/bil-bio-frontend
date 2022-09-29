import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }) => {
    const userToken = useSelector((state) => state?.user?.user);
    if (!userToken?.token) {
        return <Navigate to='/auth/login' />
    }
    return children
}

