import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Container from "../../Component/Container";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdPayments, MdSubscriptions } from "react-icons/md";
import { BsKey, BsLock } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";



const Dashboard = () => {
     const pathName = useLocation();
     console.log(pathName);

     const [currentPath, setCurrentPath] = useState("dashboard");

     return (
          <div className=" my-10">
               <Container>




                    <div className=" flex gap-8 ">

                         <div>
                              <div className="  ml-24">
                                   <div className=" flex items-center gap-1 my-5 ">
                                        <Link className="  text-base font-semibold uppercase  hover:text-[#e600e6c0] " to={'/'}>Home</Link>
                                        <MdOutlineKeyboardArrowRight size={28}></MdOutlineKeyboardArrowRight>
                                        <Link className="  text-base font-semibold  uppercase hover:text-[#e600e6c0]" to={pathName?.pathname}>{currentPath}</Link>

                                   </div>
                              </div>

                              <div onClick={() => setCurrentPath("dashboard")} className=" w-[350px] ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? " bg-black text-2xl px-4 block  w-full py-5   font-medium capitalize text-white" : "  block w-full bg-black px-4  py-5 text-2xl  font-normal capitalize text-white "
                                   } to={'/dashboard'}> Dashboard Menu</NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("profile")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/profile'}>   <CgProfile size={24}></CgProfile> Profile  </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("password setting")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/setting'}>   <BsKey size={24}></BsKey> Account setting  </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("Billing & Shipping Info")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/shopping'}>   <BsLock size={24}></BsLock> Billing & Shipping Info   </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("Payment info")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/payment'}>   <MdPayments size={24}></MdPayments> Payment info   </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("Product history")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/history'}>   <FiRefreshCcw size={24}></FiRefreshCcw> Product history  </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("My wishlist")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/wishlist'}>   <AiOutlineHeart size={24}></AiOutlineHeart> My wishlist   </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("My Massage")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/massage'}>   <AiOutlineMail size={24}></AiOutlineMail> My Massage   </NavLink>
                              </div>
                              <div onClick={() => setCurrentPath("Subscribe Newsletter")} className=" w-[350px] mt-1 ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full bg-black px-4  py-2  text-base  font-normal capitalize text-white "
                                   } to={'/dashboard/subscribe'}>   <MdSubscriptions size={24}></MdSubscriptions>Subscribe Newsletter </NavLink>
                              </div>
                         </div>
                        
                        
                         <div className=" w-full">
                                 <Outlet></Outlet>
                         </div>
                    </div>
               </Container>
               <div>

               </div>
          </div>
     );
};

export default Dashboard;