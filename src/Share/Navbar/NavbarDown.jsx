import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import toast from "react-hot-toast";


const NavbarDown = () => {
     const { LogOut } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleLog = () => {
          LogOut().then(result => {
               console.log(result);
               toast.success("Successfully Logout")
               navigate('/')

          }).catch(error => {
               console.log(error?.massage);
          })

     }
     return (
          <div className="  shadowbox p-3  rounded-lg  border-b-2    border-x-2 text-white   primaryBg z-30  fixed top-[45px] right-[90px] ">
               <Link to={'/dashboard'} className="  hover:bg-[#60a103] p-2 rounded my-2 text-xl font-semibold  text-center uppercase"> Dashboard</Link>
               <hr className="  mt-4" />
               <div onClick={handleLog} className="text-xl hover:bg-[#60a103]   p-2 rounded  my-2 font-semibold  text-center cursor-pointer  uppercase">Logout</div>
          </div>
     );
};

export default NavbarDown;