import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ( {children} ) => {
    const  authUser  = useSelector((state) => state.auth.authUser)

    return !authUser ? <Navigate to='/login'/> : children

};

export default PrivateRoute;
