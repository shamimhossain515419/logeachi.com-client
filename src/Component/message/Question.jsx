

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Questions } from '../../utils/Question/Question';
import { useState } from 'react';

const Question = () => {

     const [Open, setOpen] = useState(1);
     console.log(Open);

     return (
          <div className=' '>
            

                   

                    <div className=' '>



                         <div className='max-w-[800px]  mx-auto flex justify-center items-center gap-2 w-full'>
                              <div className=' w-full'>

                                   {
                                        Questions?.map(item => <div key={item?._id} className='   gap-2  my-4 shadow w-full  p p-4 rounded'>
                                             <div onClick={() => setOpen(item._id)} className='flex cursor-pointer   justify-between items-center gap-1 w-full'>
                                                  <h1 className=' textColor text-lg md:text-xl font-bold'> {item?.title} </h1>

                                                  <div>
                                                       {
                                                            Open == item?._id ? <div className='p-2 bg-[#e50ae9] text-white rounded '>
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

                    </div>


              
          </div>
     );
};

export default Question;