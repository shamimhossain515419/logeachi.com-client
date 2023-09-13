
import { useState } from 'react';
import {AiFillHeart}  from 'react-icons/ai'
const ProductCard = ({card}) => {   
       const [Open, setOpen] = useState(false);
     const {name, description, price , _id, image1, image2,  }=card;
   

     return (
          <div  className=' shadowbox rounded p-2 cursor-pointer  '>

                <div>

                     <div onMouseEnter={()=>setOpen(true) } onMouseLeave={()=>setOpen(false)}  className=" h-[240px] w-full  " >
                         <img  className=' w-full h-full object-contain'  src={  Open?  image2 : image1} alt="" />
                     </div>

                      <div>
                          <h1 className=" text-base md:text-xl  font-semibold  uppercase  mt-5"> {name} </h1>
                         <h2  className=" text-base md:text-lg  font-thin my-2"> {description} </h2>
                        <h1 className=' text-lg md:text-2xl font-semibold'>  ৳ {price}</h1>
                         <div className='  flex gap-2 items-center justify-between my-2 '>
                              <div className=" bg-black text-white px-8 py-2 cursor-pointer rounded-md ">
                                    <h1  className="  uppercase text-base md:text-md font-semibold ">  Add Card</h1>
                              </div>
                              <div className=' hover:text-[#e600e6fa] bg-black text-white cursor-pointer  rounded-full p-2 '> 
                                   <AiFillHeart  size={24}></AiFillHeart>
                              </div>
                          </div>
                      </div>
                </div>
               
          </div>
     );
};

export default ProductCard;