import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import toast from "react-hot-toast";


const NavbarDown = () => {
     const  {LogOut}=useContext(AuthContext);

     const handleLog =()=>{
          LogOut().then(result=>{
                if(result){
                    toast.success("Successfully Logout")
                }
          }).catch(error=>{
                console.log(error?.massage);
          })
           
     }
     return (
          <div className="  shadowbox p-3  rounded-lg  border-b-2   border-x-2   bg-white z-30  fixed top-[40px] right-[90px] ">
               <Link to={'/dashboard'} className="  hover:bg-[#ec3fef2b] p-2 rounded my-2 text-xl font-semibold  text-center uppercase"> Dashboard</Link>
                <hr className="  mt-4" />
                <div onClick={handleLog} className="text-xl hover:bg-[#ec3fef2b]   p-2 rounded  my-2 font-semibold  text-center cursor-pointer  uppercase">Logout</div>
          </div>
     );
};

export default NavbarDown;