import StarRatings from "react-star-ratings";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../AxioxSecour/AxiosSecure";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";

const TeandingModal = ({ setOpen }) => {
     const Navigate = useNavigate();

     const { user } = useContext(AuthContext)

     const [singleData, setSingleData] = useState({});
     const [Image, setImage] = useState("")
     const [axiosSecure] = useAxiosSecure();
     const randomNumber = Math.floor(Math.random() * 8) + 1;
     console.log(randomNumber);
     useEffect(() => {
          const SingleDataCount = async () => {
               fetch(`https://logeachi-com-server.vercel.app/product?category=$minprizce=${0}&maxprice=${10000}&name=`).then(res => res.json()).then(data => {
                    const projectData = data.sort((a, b) => new Date(b.addTime) - new Date(a.addTime));
                   
                    const ProductData = projectData?.[randomNumber];
                    setSingleData(ProductData);
                    setImage(ProductData?.image1)
               }
               )


          }
          SingleDataCount()
     }, [])
   
    
     const { image1, name, description, color, price, discount, _id, category, brand, size,
          quality } = singleData;

     const addcard = { image1, productId: _id, quality, description, color, email: user?.email, name, price, size, discount, brand, category }

          

     

     const handleAddCard = () => {
          if (user?.email) {
               console.log(addcard);
               axiosSecure.post('/product/addcard', { addcard }).then(result => {
                    console.log(result);
                    if (result) {
                         Navigate('/dashboard/shopping');
                         toast.success('সফলভাবে   কার্ড যুক্ হয়েছে')
                         setOpen(false)
                    }
               }).catch(error => {
                    console.log(error);
               })
          } else {
               Navigate('/account/login');
               setOpen('/')
          }

     }



     return (

          <div className=" mx-2">
               <div className=" max-w-[1000px] mx-auto  bg-white modalShadow md:p-5 px-2  rounded-lg">
                    <div className='relative py-2 '>
                         <div onClick={() => setOpen(false)} className=" text-red-500 z-50 absolute top-1 right-1 cursor-pointer py-2      ">
                              <IoClose size={48} />
                         </div>

                         <div className=" grid   xl:grid-cols-5 md:gap-5 xl:gap-8  items-center  ">
                              <div className=" hidden   md:col-span-2 md:flex  justify-between gap-2  flex-col ">
                                   <div className={`my-2 md:my-3 w-full ${Image == singleData?.image1 ? "border border-[#e50ae9]" : ""}  cursor-pointer  rounded`} >
                                        <img onClick={() => setImage(singleData?.image1)} className=" w-full max-h-[120px]   object-fill " src={Image} alt="" />
                                   </div>
                                   <div onClick={() => setImage(singleData?.image2)} className={`my-2 md:my-3 w-full ${Image == singleData?.image2 ? "border border-[#e50ae9]" : ""}  cursor-pointer  rounded`}>
                                        <img className=" w-full max-h-[120px]" src={singleData?.image2} alt="" />
                                   </div>
                                   <div className={`my-2 md:my-3 w-full ${Image == singleData?.image3 ? "border border-[#e50ae9]" : ""}  cursor-pointer  rounded`}>
                                        <img onClick={() => setImage(singleData?.image3)} className=" w-full max-h-[120px]" src={singleData?.image3} alt="" />
                                   </div>
                              </div>
                              <div className=" col-span-3 gap-1 ">
                                   <h1 className=" text-lg md:text-3xl  xl:text-4xl  font-bold">  {singleData?.name} </h1>
                                   <div className="  py-3  flex justify-between gap-2  items-center">
                                        <StarRatings
                                             rating={5}
                                             starRatedColor="#FFD033"
                                             starDimension="29px"
                                             starSpacing="2px"
                                             numberOfStars={5}
                                             name='rating'
                                        />
                                        <div>
                                             <h1 className="    text-[#60a103] text-base md:text-2xl font-bold">৳ {singleData?.price}=/</h1>
                                        </div>
                                   </div>
                                   <div className=" w-full md:h-[350px] overflow-hidden my-5 ">
                                        <img className=" w-full md:h-[350px]] object-cover " src={Image} alt="" />
                                   </div>

                              </div>
                         </div>

                         <div className=" px-5  md:px-10 ">
                              <h1 className=" text-base text-center  md:text-lg font-normal"> These are constructed with a complex structure of rubber with plastic/metal stiffeners to restrict foot
                                   movement. More advanced runners tend to wear flatter and flexible shoes, which allow them to run more
                                   quickly with greater comfort.</h1>

                              <div className=" mt-5 flex items-center justify-center gap-4">


                                   <div onClick={handleAddCard} className="   text-white py-2 px-6 cursor-pointer rounded-lg  primaryBg  hover:bg-[#60a103] hover:text-white text-base  font-normal md:text-xl    ">Add to Card</div>
                                   <Link to={`/product/${singleData?._id}`} className="  hover:text-white py-2 px-6  cursor-pointer rounded-lg bg-[#60a103]  hover:bg-[#18604a] text-white text-base  font-normal md:text-xl   ">View Details</Link>
                              </div>
                         </div>

                    </div>
               </div>
          </div>

     );
};

export default TeandingModal;