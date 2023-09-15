import { useContext } from "react";
import { AuthContext } from "../Rotues/Authprovider/Authprovider";
const AdminDashboard = () => {
     const { user } = useContext(AuthContext);

    return (
          <div>
               <div>
                    <h1 className=" text-3xl font-semibold text-center my-5"> Hello Admin {user?.email}</h1>
               </div>
          </div>
     );
};

export default AdminDashboard;