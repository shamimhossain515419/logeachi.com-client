import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Container from "../../Component/Container";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import { MdOutlineKeyboardArrowRight, MdPayments, MdSubscriptions } from "react-icons/md";
import { BsKey, BsLock } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import { IoMdAdd } from "react-icons/io";


const Dashboard = () => {
     const pathName = useLocation();
     const { userinfo } = useContext(AuthContext)

     const [currentPath, setCurrentPath] = useState("dashboard");
     console.log(userinfo);
     return (
          <div className=" py-10">
               <Container>

                    <div className=" mx-auto  max-w-[1000px]  py-8">
                         <div className="  ">
                              <div className=" flex items-center gap-1 my-5 ">
                                   <Link className="  text-base font-semibold uppercase  hover:text-[#60a103] " to={'/'}>Home</Link>
                                   <MdOutlineKeyboardArrowRight size={28}></MdOutlineKeyboardArrowRight>
                                   <Link className="  text-base font-semibold  uppercase hover:text-[#60a103]" to={pathName?.pathname}>{currentPath}</Link>

                              </div>
                              <div className="  text-xl py-2 font-semibold  uppercase hover:text-[#60a103]" to={pathName?.pathname}>{currentPath}</div>
                         </div>
                         <hr />
                    </div>


                    <div className=" md:flex gap-8 ">
                   

                         <div className="  my-5">


                              <div onClick={() => setCurrentPath("dashboard")} className=" max-w-[350px] md:w-[350px]  ">
                                   <NavLink className={({ isActive }) =>
                                        isActive ? "   primaryBg text-2xl px-4 block  w-full py-5   font-medium capitalize text-white" : "  block w-full primaryBg px-4  py-5 text-2xl  font-normal capitalize text-white "
                                   } to={'/dashboard'}> Dashboard Menu</NavLink>
                              </div>
                              {
                                   userinfo?.status ==="user" ? <>
                                        <div onClick={() => setCurrentPath("profile")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/profile'}>   <CgProfile size={24}></CgProfile> Profile  </NavLink>
                                        </div>
                                        <div onClick={() => setCurrentPath("password setting")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/setting'}>   <BsKey size={24}></BsKey> Account setting  </NavLink>
                                        </div>
                                        <div onClick={() => setCurrentPath("Billing & Shipping Info")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/shopping'}>   <BsLock size={24}></BsLock> Billing & Shipping Info   </NavLink>
                                        </div>
                                        <div onClick={() => setCurrentPath("Payment info")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/payment'}>   <MdPayments size={24}></MdPayments> Payment info   </NavLink>
                                        </div>

                                        <div onClick={() => setCurrentPath("My wishlist")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/wishlist'}>   <AiOutlineHeart size={24}></AiOutlineHeart> My wishlist   </NavLink>
                                        </div>
                                        <div onClick={() => setCurrentPath("My Massage")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/massage'}>   <AiOutlineMail size={24}></AiOutlineMail> My Massage   </NavLink>
                                        </div>
                                        <div onClick={() => setCurrentPath("Subscribe Newsletter")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/subscribe'}>   <MdSubscriptions size={24}></MdSubscriptions>Subscribe Newsletter </NavLink>
                                        </div></> : <>
                                        <div onClick={() => setCurrentPath("My Massage")} className=" max-w-[350px] md:w-[350px] mt-1 ">
                                             <NavLink className={({ isActive }) =>
                                                  isActive ? "    bg-[#60a103]  text-base px-4 flex items-center gap-3  w-full py-2  font-normal capitalize text-white" : "  flex items-center gap-3  w-full primaryBg px-4  py-2  text-base  font-normal capitalize text-white "
                                             } to={'/dashboard/add-product'}>  < IoMdAdd size={24}></IoMdAdd> Add Product   </NavLink>
                                        </div>

                                        </>
                              }

                         </div>



                         <div className=" w-full my-5">

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