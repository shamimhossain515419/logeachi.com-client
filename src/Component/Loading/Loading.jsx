import  logo  from '../../../public/Ions/Logo.png'
import './Loading.css'
const Loading = () => {
     return (
          <div className=' z-50  fixed top-0 left-0  right-0 bottom-0 flex items-center justify-center bg-white h-screen w-full'>
               <div className=' bg-[#181818] spinBox  shadowbox  rounded-full '>
                   <img className='   w-full h-full rounded-full ' src={logo} alt="" />
               </div>
          </div>
     );
};

export default Loading;