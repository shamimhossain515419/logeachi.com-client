import Container from "../../Component/Container";

import logo from '../../../public/Ions/Logo-2.png'
import { BsFacebook, BsFillTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const Footer = () => {
     const [Open, setOpen] = useState(false)
     return (
          <div className=" bg-black px-2 text-white  pb-20 pt-11">
               <div>

                    <Container>

                         <div className=" grid md:grid-cols-2 lg:grid-cols-4 ">
                              <div>
                                   <div>
                                        <img className=" h-[100px]" src={logo} alt="" />
                                   </div>
                                   <div className=" flex gap-4 items-center  mt-5">
                                        <Link to={'https://google.com'}> <FcGoogle size={24}></FcGoogle></Link>
                                        <Link className="  text-blue-500"  to={'https://facebook.com'}>  <BsFacebook size={24}></BsFacebook></Link>
                                        <Link className="  text-[#e742c6]"  to={'https://insteagam.com'}> <BsInstagram size={24}></BsInstagram></Link>
                                        <Link className="  text-[#3686ff]"  to={'https://twitter.com'}> <BsTwitter size={24}></BsTwitter></Link>
                                        <Link className="  text-blue-500"  to={'https://linkedin.com'}>   <BsLinkedin size={24}></BsLinkedin></Link>

                                   </div>
                              </div>
                              <div> <div className=" my-2">
                                   <h1 className=" text-base md:text-xl xl:text-lg font-semibold primaryColor">WE ARE HERE TO HELP ! </h1>
                                   <p className=" text-base font-medium md:text-md">  FAQ </p>

                              </div> <div className=" my-2">
                                        <h1 className=" text-base md:text-xl xl:text-lg font-semibold primaryColor">24/7 CUSTOMER SUPPORT </h1>
                                        <p className=" text-base font-medium md:text-md flex gap-2 items-center">  <BsFillTelephoneFill></BsFillTelephoneFill> <span> +8801844696975</span> </p>
                                   </div>
                              </div>

                              <div>
                                   <h1 className=" text-base md:text-xl xl:text-lg font-semibold primaryColor">KNOW US BETTER</h1>
                                   <div className=" flex  flex-col gap-2">
                                        <Link to={'/'}>News </Link>
                                        <Link to={'/'}> Privacy Policy</Link>
                                        <Link to={'/'}> Shipping Rates & Policies</Link>
                                        <Link to={'/'}> Terms and conditions</Link>
                                        <Link to={'/'}>Return and Refund Policy </Link>
                                        <Link to={'/'}>Taxes & Import duties </Link>
                                   </div>

                              </div>

                              <div>
                                   <h1 className=" text-base md:text-xl xl:text-lg font-semibold primaryColor">MAKE MONEY WITH US</h1>

                                   <p> Sell on Logeachi</p>
                                   <p> Seller terms & conditions</p>
                                   <p className=" primaryColor"> Signup today for free and be the first to get notified on new updates</p>

                                   <div>

                                        {
                                             Open ? <>
                                                  <div className="md:flex items-center  my-3">
                                                       <div className=" bg-[#262626] text-white px-4 py-2 ">
                                                            <AiOutlineMail size={24}></AiOutlineMail>
                                                       </div>
                                                       <div className=" w-full ">
                                                            <input className=" px-4  text-black w-full outline-none  border-2 border-[#212021] py-2 " type="Email" name="" id="" placeholder="Email" />
                                                       </div>

                                                       <div className=" bg-[#262626] inline-block text-white px-4 py-2 ">
                                                            Singup
                                                       </div>
                                                  </div>
                                                  <div onClick={() => setOpen(false)} className=" cursor-pointer my-2 bg-[#262626] inline-block duration-300  hover:bg-[#e50ae9]  text-white px-4 py-2 ">
                                                       Hide
                                                  </div></> : <> <div onClick={() => setOpen(true)} className=" cursor-pointer my-2 bg-[#262626] inline-block duration-300  hover:bg-[#e50ae9]  text-white px-4 py-2 ">
                                                       Show
                                                  </div></>
                                        }
                                   </div>




                              </div>





                         </div>

                         <hr className="my-6 border-blueGray-300"></hr>
                         <div className="flex flex-wrap items-center md:justify-between justify-center">
                              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                   <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Copyright © <span id="get-current-year">2023</span> <Link to="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> Shamim web </Link>
                                        <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </div>
     );
};

export default Footer; 