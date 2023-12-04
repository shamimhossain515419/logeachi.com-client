import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Container from "../Container";
import { useState } from "react";
import { Questions } from "../../utils/OderProsses";
import OrderImage from './../../../public/Ions/online-fashion-shopping-with-smartphone_23-2150400572.jpg'
import { Link } from "react-router-dom";
import SectionTitle from "../Title/SectionTitle";

const Oderprosses = () => {

     const [Open, setOpen] = useState(1);

     return (
          <div> <div className="  -mt-3">
               <div className=" w-full  relative">
                    <img className=" w-full relative      object-fill h-[50vh]" src={OrderImage}></img>
                    <h1 className=" capitalize absolute top-3 primaryColor font-bold text-base md:text-2xl xl:text-5xl lingHight  md:top-16 left-4 md:left-11 "> logeachi.com is your favorite  <span className=" md:block md:mt-5">online shopping site</span>  </h1>
               </div>
               <div>



                    <div className="  flex justify-center gap-2 py-10">
                         <SectionTitle title={"Some important information about the order process"}></SectionTitle>
                    </div>
                    <div className='max-w-[800px]  mx-auto flex justify-center items-center gap-2 w-full'>
                         <div className=' w-full'>

                              {
                                   Questions?.map(item => <div key={item?._id} className='   gap-2  my-4 shadow w-full  p p-4 rounded'>
                                        <div onClick={() => setOpen(item._id)} className='flex cursor-pointer   justify-between items-center gap-1 w-full'>
                                             <h1 className={` ${Open == item?._id ? " primaryColor " : " text-black "} textColor text-lg md:text-xl font-bold`}> {item?.title} </h1>

                                             <div>
                                                  {
                                                       Open == item?._id ? <div className='p-2 bg-[#60a103] text-white rounded '>
                                                            <AiOutlineMinus size={24}></AiOutlineMinus>
                                                       </div> : <div className='p-2 bg-[#857c7c43] primary rounded '>
                                                            <AiOutlinePlus size={24}></AiOutlinePlus>
                                                       </div>
                                                  }
                                             </div>

                                        </div>
                                        <div className=' transform translate-x-3 duration-300 '>
                                             {Open == item?._id ? <div className='  mt-4'>
                                                  <div className=' h-[1px]  primaryBg w-full' />
                                                  <div className=' my-3 '>
                                                       <p className=' text-base md:text-lg my-2  font-medium'> {item?.description} </p>
                                                  </div>
                                             </div> : null
                                             }

                                        </div>
                                   </div>)
                              }
                         </div>
                    </div>



                    <div className="    my-5 flex justify-center items-center ">
                         <Link className="  text-base md:text-2xl font-medium  bottonBox py-2  text-center px-4  " to={'/product/category'}> Please Start </Link>
                    </div>
               </div>


          </div>

          </div>
     );
};

export default Oderprosses;