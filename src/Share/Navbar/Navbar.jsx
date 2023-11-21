import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react";
import NavbarModal from "./NavbarModal";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import NavbarDown from "./NavbarDown";
import AddCardNavbar from "../../Component/AddCardNavbar/AddcardNavbar";
import WishListCardNavbar from "../../Component/WishCardNavbar/WishListCardNavbar";
import logo from '../../../public/Ions/Logo.png'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [toggle, setToggle] = useState(false)
     const { user, search, setSearch } = useContext(AuthContext);
     const navigete = useNavigate()

     // const handleInputKeyPress = (event) => {
     //      if (event.key === 'Enter') {
     //        // Handle "Enter" key press for the input field
     //        console.log('Enter key pressed for input field');
     //      }
     //    };
     console.log(search);

     return (
          <div className=" z-50  shadow-md  primaryBg   bg-white  w-full fixed top-0 left-0 right-0   py-1 px-1 md:px-6">
               <div>
                    <div>
                         <div className="  flex justify-between  items-center gap-2 px-4 py-2 rounded-lg w-full">
                              <div className=" flex gap-2 md:gap-5  items-center">
                                   <div onClick={() => setIsOpen(true)} className="  block md:hidden"><FaBars></FaBars> </div>
                                   <div className=" flex items-center">
                                        <img className=" hidden md:block   md:bl h-[40px]" src={logo} alt="" />
                                        <h1 className=" hidden md:block  text-2xl    text-white font-bold md:text-2xl  "> Logeachi.com</h1>
                                   </div>
                                   <div className=" hidden md:flex gap-3 items-center text-white">
                                        <Link className=" text-base md:text-lg  font-medium">Home</Link>
                                        <Link to={'/product/category'} className=" text-base md:text-lg font-medium">Shop</Link>
                                        <Link className=" hidden xl:block text-base md:text-lg font-medium">Discount center</Link>
                                        <Link to={'/order-process'} className=" text-base md:text-lg font-medium">How to Order</Link>
                                   </div>
                              </div>

                              <div>
                                   <div className=" relative  w-full   md:w-[350px]">
                                        <input onKeyPress={(e) => e.key === "Enter" ? navigete(`/product/category?category=${search}&minprice=0&maxprice=1000&name=`) : "/"} onChange={(e) => { setSearch(e.target.value) }} className=" text-xl  rounded relative w-full outline-none border  border-[#e600e6c0]  placeholder:text-black md:py-2 px-2 bg-white " type="text" placeholder="Search  ..." />
                                        <CiSearch className=" md:mt-1 cursor-pointer absolute top-1  right-1 " size={24} />
                                   </div>
                              </div>
                              <div>
                                   <div className=" flex items-center gap-3 md:gap-10 text-white">

                                        <div className="  p-2 rounded-md">


                                        </div>
                                        {user ? <> <div className=" hover:bg-[#784578c0] p-2 rounded-md cursor-pointer" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                                             <AiOutlineUserAdd className=" text-[18px] md:text-[24px]" ></AiOutlineUserAdd>
                                        </div></> : <>  <Link to={'/account/login'}>
                                             <h1 className="  font-bold"> Login</h1>
                                        </Link></>
                                        }



                                        <div className=" hidden md:block">

                                             {
                                                  user ? <WishListCardNavbar></WishListCardNavbar> :
                                                       null
                                             }
                                        </div>
                                        <div className=" hidden md:block">
                                             {

                                                  user ? <AddCardNavbar></AddCardNavbar> : null
                                             }
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