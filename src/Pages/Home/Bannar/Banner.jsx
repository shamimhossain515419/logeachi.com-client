import banner2 from '../../../../public/Aadi-2-423x633-local.png'
import banner3 from '../../../../public/Aadi-4-453X309.png'
import banner1 from '../../../../public/kay-kraft-new.jpg'
import banner4 from '../../../../public/kay-kraft_01.jpg'
import Container from '../../../Component/Container';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { GrDeliver } from 'react-icons/gr';

const Banner = () => {
     return (
          <Container>
               <div className=' my-10'>
                    <div className=' md:grid  md:grid-cols-2 gap-3'>
                         <div className='  md:h-[500px]'>
                              <img className=' h-full w-full' src={banner1} alt="" />
                         </div>
                         <div className='  md:grid  md:grid-cols-2 gap-3  md:h-[500px]'>
                              <div className='  md:h-[500px]'>
                                   <img className=' h-full w-full' src={banner2} alt="" />
                              </div>
                              <div className='  md:h-[500px] flex flex-col gap-2'>
                                   <div className=' overflow-hidden w-full h-full'>
                                        <img className='h-full w-full' src={banner3} alt="" />
                                   </div>
                                   <div className=' overflow-hidden w-full h-full'>
                                        <img className=' h-full w-full' src={banner4} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className=' max-w-[800px] mx-auto flex  items-center  gap-4 mt-20'>
                         <div className='  flex items-center gap-8 '>
                              <BsFillPatchCheckFill size={35}></BsFillPatchCheckFill>
                              <h1 className=' text-lg  font-semibold'> আমরা খাঁটি বাংলাদেশী ফ্যাশন ব্র্যান্ড বিক্রি করি</h1>
                         </div>
                         <div className='  flex gap-8 items-center '>
                              <GrDeliver size={35}></GrDeliver>
                              <h1 className=' text-lg  font-semibold'> কার্ড এবং মোবাইল পেমেন্টে ডিসকাউন্ট EMI বিকল্প উপলব্ধ</h1>
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default Banner;