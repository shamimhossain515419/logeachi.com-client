import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from "react";
import NavbarModal from "./NavbarModal";
import { HiSearch, } from "react-icons/hi";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import NavbarDown from "./NavbarDown";
import AddCardNavbar from "../../Component/AddCardNavbar/AddcardNavbar";
import WishListCardNavbar from "../../Component/WishCardNavbar/WishListCardNavbar";
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [toggle, setToggle] = useState(false)
     const { user, search, setSearch } = useContext(AuthContext);
     const navigete = useNavigate()


     console.log(search);

     return (
          <div className=" z-50  shadow-md  primaryBg   bg-white  w-full fixed top-0 left-0 right-0   py-1 px-1 md:px-6">
               <div>
                    <div>
                         <div className="  flex justify-between  items-center gap-2 px-4 py-2 rounded-lg w-full">
                              <div className=" flex gap-2 md:gap-5  items-center">
                                   <div onClick={() => setIsOpen(true)} className=" text-white  block md:hidden"><FaBars></FaBars> </div>
                                   <Link to={'/'} className=" flex items-center">
                                        {/* <img className=" hidden md:block   md:bl h-[40px]" src={logo} alt="" /> */}
                                        <h1 className=" hidden md:block  text-2xl    text-white font-bold md:text-3xl  "> Logeachi.com</h1>
                                   </Link>
                                   <div className=" hidden md:flex gap-3 items-center text-white">
                                        <Link className=" text-base   font-medium">Home</Link>
                                        <Link to={'/product/category'} className=" text-base  font-medium">Shop</Link>
                                        <Link className=" hidden xl:block text-base  font-medium">Discount center</Link>
                                        <Link to={'/order-process'} className=" text-base  font-medium">How to Order</Link>
                                   </div>
                              </div>

                              <div>
                                   <div className=" relative  w-full   md:w-[350px]">
                                        <form className="search_box">
                                             <input onKeyPress={(e) => e.key === "Enter" ? navigete(`/product/category?category=${search}&minprice=0&maxprice=1000&name=`) : "/"} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search for products" />
                                             <button className=" mt-1" type="submit">
                                                  <HiSearch size={24} />
                                             </button>
                                        </form>
                                   </div>

                              </div>
                              <div>
                                   <div className=" flex items-center gap-3 md:gap-10 text-white">

                                        <div className="  p-2 rounded-md">


                                        </div>
                                        {user ? <> <div className=" hover:bg-[#60a103] p-2 rounded-md cursor-pointer" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
                                             <AiOutlineUserAdd className=" text-[18px] md:text-[24px]" ></AiOutlineUserAdd>
                                        </div></> : <>  <Link to={'/account/login'}>
                                             <h1 className="  secondColor font-bold"> Login</h1>
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