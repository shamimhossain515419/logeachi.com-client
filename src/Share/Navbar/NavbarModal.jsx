import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const NavbarModal = ({setIsOpen}) => {
     return (
          <div className="   bg-[#e50ae9fd] text-white p-3 fixed  h-screen w-screen top-0 left-0  right-0 bottom-0">
               <div className=" relative top-0 left-0">

                    <div className="  flex flex-col gap-6  mt-6 ">
                         <Link className=" text-base md:text-lg  font-medium">Home</Link>
                         <Link className=" text-base md:text-lg font-medium">Shop</Link>
                         <Link className=" hidden xl:block text-base md:text-lg font-medium">Discount center</Link>
                         <Link className=" text-base md:text-lg font-medium">How to Order</Link>
                    </div>
                    <div onClick={()=>setIsOpen(false)} className="  absolute top-0 right-0 p-2">
                         <AiOutlineClose size={24}></AiOutlineClose>
                    </div>
               </div>
          </div>
     );
};

export default NavbarModal;