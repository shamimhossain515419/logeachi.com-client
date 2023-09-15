import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUserAdd } from 'react-icons/ai'
import { PiShoppingCartBold } from 'react-icons/pi'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react";
import NavbarModal from "./NavbarModal";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import NavbarDown from "./NavbarDown";

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [toggle, setToggle] = useState(false)
     const { LogOut, user } = useContext(AuthContext)
     const handleLogout = () => {
          LogOut().then(result => {
               if (result) {
                    alert(" সফলভাবে  লগউত হয়েছে ")
               }
          })
     }

     return (
          <div className="  shadow-md   py-1 px-1 md:px-6">
               <div>
                    <div>
                         <div className="  flex justify-between  items-center gap-2 px-4 py-2 rounded-lg w-full">
                              <div className=" flex gap-2 md:gap-5  items-center">
                                   <div onClick={() => setIsOpen(true)} className="  block md:hidden"><FaBars></FaBars> </div>
                                   <div>

                                        <h1 className="primaryColor text-base md:text-xl xl:text-3xl font-medium "> Logeachi.com</h1>
                                   </div>
                                   <div className=" hidden md:flex gap-3 items-center">
                                        <Link className=" text-base md:text-lg  font-medium">Home</Link>
                                        <Link className=" text-base md:text-lg font-medium">Shop</Link>
                                        <Link className=" hidden xl:block text-base md:text-lg font-medium">Discount center</Link>
                                        <Link className=" text-base md:text-lg font-medium">How to Order</Link>
                                   </div>
                              </div>
                              <div>
                                   <div className=" flex items-center gap-3 md:gap-10">
                                        <div className="  cur" onClick={handleLogout}> {user ? "Logout" : ""} </div>
                                        <div>
                                             <AiOutlineSearch className=" text-[18px] md:text-[24px]" ></AiOutlineSearch>
                                        </div>
                                        {
                                             user ? <> <div className="  cursor-pointer" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                                                  <AiOutlineUserAdd className=" text-[18px] md:text-[24px]" ></AiOutlineUserAdd>
                                             </div></> : <>  <Link to={'/account/login'}>
                                                  <AiOutlineUserAdd className=" text-[18px] md:text-[24px]" ></AiOutlineUserAdd>
                                             </Link></>
                                        }
                                        <div className="relative inline-flex w-fit">
                                             <div
                                                  className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-[#e50ae9] px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                                                  {0}
                                             </div>
                                             <AiOutlineHeart className=" text-[18px] md:text-[24px]" ></AiOutlineHeart>
                                        </div>
                                        <div className="relative inline-flex w-fit">
                                             <div
                                                  className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-[#e50ae9] px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
                                                  {0}
                                             </div>
                                             <PiShoppingCartBold className=" text-[18px] md:text-[24px]"  ></PiShoppingCartBold>
                                        </div>

                                       
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                    {
                         toggle ? <NavbarDown></NavbarDown> : ''
                    }
               </div>
               <div>
                    {
                         isOpen ? <NavbarModal setIsOpen={setIsOpen} ></NavbarModal> : null
                    }
               </div>
          </div>
     );
};

export default Navbar; <h1> Navbar</h1>