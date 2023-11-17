
import { useContext, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../AxioxSecour/AxiosSecure';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Rotues/Authprovider/Authprovider';

const ProductCard = ({ card }) => {
     const [Open, setOpen] = useState(false);
     const { name, description, price, _id, image1, image2, } = card;
     const { user } = useContext(AuthContext)
     const [axiosSecure] = useAxiosSecure();
     const wishList = { email: user?.email, name: user?.displayName, description, image1, id: _id };

     const Navigate = useNavigate();
     const handlewishList = () => {
          if (user) {
               axiosSecure.post('/product/wishlist', { wishList }).then(result => {
                    console.log(result);
                    if (result) {
                         // refetch();
                         toast.success('সফলভাবে   ইচ্ছা পূরণ  হয়েছে!')
                    }
               }).catch(error => {
                    console.log(error);
               })
          } else {
               Navigate('/account/login')
          }

     }

     return (
          <div className=' shadowbox rounded p-2 cursor-pointer  '>

               <div>

                    <Link to={`/product/${_id}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className=" h-[240px] w-full  " >
                         <img className=' w-full h-[250px] object-contain' src={Open ? image2 : image1} alt="" />
                    </Link>

                    <div>
                         <h1 className=" text-base md:text-xl  font-semibold  uppercase  mt-5"> {name?.length > 12 ? `${name?.slice(0, 12)}..` : `${name}`}  </h1>
                         <h2 className=" text-base md:text-lg  font-thin my-2"> {description?.slice(0, 27)}... </h2>
                         <h1 className=' text-lg md:text-2xl font-semibold'>  ৳ {price}</h1>
                         <div className='  flex gap-2 items-center justify-between my-2 '>
                              <Link to={`/product/${_id}`} className=" bg-black text-white hover:bg-[#e600e6fa] px-8 py-2 cursor-pointer rounded-md ">
                                   <h1 className="  uppercase text-base md:text-md font-semibold ">  Add Card</h1>
                              </Link>
                              <div onClick={handlewishList} className=' hover:text-[#e600e6fa] bg-black text-white cursor-pointer  rounded-full p-2 '>
                                   <AiFillHeart size={24}></AiFillHeart>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default ProductCard;