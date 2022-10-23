import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const RequiredAuth = ({ allowedRoles }) => {

    const { isAuth } = useAuth();
    const location = useLocation();
    console.log(allowedRoles, isAuth.role);
    return (
        allowedRoles?.includes(isAuth?.role)
            ? <Outlet />

            : < Navigate to="/Login" state={{ from: location }} replace />
    );

}

export default RequiredAuth
