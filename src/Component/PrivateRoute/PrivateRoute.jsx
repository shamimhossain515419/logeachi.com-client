import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import Loading from "../Loading/Loading";


const PrivateRoute = ({ children }) => {
     const location = useLocation()
     const { user, loading } = useContext(AuthContext);




     if (loading) {
          return (
               <Loading></Loading>
          )
     }

     if (user) {
          return children
     }

     return <Navigate to={'/account/login'} state={{ from: location }}></Navigate>


};

export default PrivateRoute;