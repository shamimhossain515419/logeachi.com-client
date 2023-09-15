import { useContext } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";


const MainDashboard = () => {
     const {user}=useContext(AuthContext);
     return (
          <div className=" mt-11 w-full ">

                <div className=" ">

                    <h1 className=" text-2xl md:text-4xl text-center  font-semibold "> Welcome back,  {user?.email}! </h1>

                </div>
               
          </div>
     );
};

export default MainDashboard;