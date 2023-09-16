import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { AiFillHeart, AiFillInstagram, AiOutlineCheckSquare, AiOutlineClose } from "react-icons/ai";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import StarRatings from "react-star-ratings";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import GetCategory from "../../api/Getcatagory";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { BiChevronDown } from "react-icons/bi";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import toast from "react-hot-toast";
import GetCardData from "../../api/GetCardData";
const Product = () => {
     const { user } = useContext(AuthContext);
     const [axiosSecure] = useAxiosSecure();
     const params = useParams();
     const [IsSize, setIsSize] = useState("");
     const [Quantity, setQuantity] = useState(1);
     const [limit, setSetLimit] = useState(15)
     const [IsModal, setIsModal] = useState(false);
     const [singleData, setSingleData] = useState([])
     const [Image, setImage] = useState("")
     useEffect(() => {
          const SingleDataCount = async () => {
               const res = await fetch(`https://logeachi-com-server-hn3xlq1pi-shamimusman515419.vercel.app/product/${params.id}`);
               const data = await res.json();
               setSingleData(data)
               setImage(data?.image1)
          }
          SingleDataCount()
     }, [params])

     const { image1, name, description, color, price, image2, image3, reading,
          Sleeve, Occasion, discount, category, brand, size, runningCategory,
          quality } = singleData;

     const [ data,] = GetCategory(category);


     const handleDecriment = () => {
          setQuantity(Quantity + 1)

     }
     const handleIncriment = () => {
          setQuantity(Quantity - 1)
     }

     const addcard = { image1, description, color, email: user?.email, name, price, size: IsSize, Quantity, discount, brand, category }

   

     const handleAddCard = () => {
          axiosSecure.post('/product/addcard', { addcard }).then(result => {
               console.log(result);
               if (result) {
                    const [, isLoading, refetch] = GetCardData();
                    refetch();
                    toast.success('সফলভাবে   কার্ড যুক্ হয়েছে')
               }
          }).catch(error => {
               console.log(error);
          })
     }



     return (
          <div>
               <div className=" max-w-[1100px] mx-auto  py-10 p-2 ">

                    <div className="grid md:grid-cols-2 gap-10">
                         <div>
                              <div className=" py-3 flex items-center flex-wrap gap-[2px] ">
                                   <Link className="text-base md:text-lg hover:text-[#e93ccd] font-normal uppercase" to={'/'}>{"Home"}  </Link>
                                   <MdOutlineKeyboardArrowRight size={24}></MdOutlineKeyboardArrowRight>
                                   <Link className=" text-base md:text-lg hover:text-[#e93ccd] font-normal uppercase" to={`/${category}`}>{category}</Link>
                                   <MdOutlineKeyboardArrowRight size={24}></MdOutlineKeyboardArrowRight>

                                   <p >{description?.slice(0, 28)}.. </p>
                              </div>

                              <div onClick={() => setIsModal(true)} className="h-[300px]  cursor-pointer">
                                   <img className=" h-full " src={Image} alt="" />
                              </div>

                              <div className="  flex gap-2 items-center  py-3">
                                   <div onClick={() => setImage(image1)} className=" max-w-[80px] max-h-[80px] overflow-hidden cursor-pointer border-2 border-black p-2 rounded">
                                        <img className=" h-full w-full object-contain" src={image1} alt="" />
                                   </div>
                                   <div onClick={() => setImage(image2)} className=" max-w-[80px] max-h-[80px] overflow-hidden cursor-pointer border-2 border-black p-2 rounded">
                                        <img className=" h-full w-full object-contain" src={image2} alt="" />
                                   </div>
                                   <div onClick={() => setImage(image3)} className=" max-w-[80px] max-h-[80px] overflow-hidden cursor-pointer border-2 border-black p-2 rounded">
                                        <img className=" h-full w-full object-contain" src={image3} alt="" />
                                   </div>
                              </div>
                         </div>

                         <div>
                              <div className=" mt-10">
                                   <h1 className=" text-base md:text-2xl leading-7 tracking-wider font-bold my-2 "> {description} </h1>
                                   <div className=" my-2">
                                        <StarRatings
                                             rating={reading}
                                             starRatedColor="#FFD033"
                                             starDimension="20px"
                                             starSpacing="2px"
                                             numberOfStars={5}
                                             name='rating'
                                        />
                                   </div>
                                   <div>
                                        <h1 className=" text-xl md:text-2xl font-bold my-2"> ৳ {price}</h1>
                                   </div>
                                   <div className=" flex gap-2 items-center ">
                                        <AiOutlineCheckSquare size={24} className=" text-blue-500"></AiOutlineCheckSquare>
                                        <h1 className=" text-base md:text-xl font-medium"> IN STOCK</h1>
                                   </div>
                              </div>
                              <div className=" my-3">
                                   <div>
                                        <h1 className=" text-xl font-medium">Size:  <small> {IsSize}</small></h1>
                                   </div>
                                   <div className=" py-2 flex gap-2 items-center flex-wrap ">
                                        <div onClick={(e) => setIsSize(e.target.innerText)} className=" border capitalize border-black hover:bg-black cursor-pointer  hover:text-white px-3 py-1 rounded-md">extra large</div>
                                        <div onClick={(e) => setIsSize(e.target.innerText)} className=" border capitalize border-black hover:bg-black cursor-pointer  hover:text-white px-3 py-1 rounded-md">Large</div>
                                        <div onClick={(e) => setIsSize(e.target.innerText)} className=" border capitalize border-black hover:bg-black cursor-pointer  hover:text-white px-3 py-1 rounded-md">medium</div>
                                        <div onClick={(e) => setIsSize(e.target.innerText)} className=" border capitalize border-black hover:bg-black cursor-pointer  hover:text-white px-3 py-1 rounded-md">small</div>
                                   </div>
                              </div>

                              <div>
                                   <p> Quality</p>

                                   <div>
                                        <div className=' my-3 flex   items-center  gap-5'>
                                             <button disabled={Quantity <= 1 ? true : false} onClick={handleIncriment} className=' p-2 px-5 cursor-pointer  rounded  bg-[#000] text-white'>
                                                  <CgMathMinus></CgMathMinus>
                                             </button>
                                             <div>
                                                  <input className=' outline-none  h-full  w-[20px]' type="text" step={"1"} min="1" max="15" onChange={() => setQuantity(Quantity)} value={Quantity} />

                                             </div>
                                             <button disabled={Quantity >= 5 ? true : false} onClick={handleDecriment} className=' p-2 rounded  px-5  bg-[#000] text-white'>
                                                  <CgMathPlus></CgMathPlus>
                                             </button>
                                        </div>
                                   </div>
                                   <div className=" flex gap-10 items-center ">
                                        <div onClick={handleAddCard} className=" text-lg md:text-xl rounded cursor-pointer uppercase text-center bg-black text-white hover:bg-[#e600e6c0] px-4 py-[4px]">add to card</div>

                                        <div className=" flex gap-2 items-center">
                                             <div className=" ">
                                                  <AiFillHeart className=" px-[5px] rounded-full bg-[#e600e639] text-[#e600e6c0]" size={24}></AiFillHeart>
                                             </div>
                                             <p className=" underline "> ADD TO WISHLIST </p>
                                        </div>
                                   </div>

                                   <div>

                                   </div>
                              </div>

                              <div className=" mt-8">
                                   <div className=" capitalize  text-base "> <span className=" text-base font-bold mr-2">Seller: </span> <span > {name} </span> </div>
                                   <div className=" capitalize text-base "> <span className=" text-base font-bold mr-2">brand: </span> <span > {brand} </span> </div>
                                   <div className="capitalize  text-base "> <span className=" text-base font-bold mr-2">size: </span> <span > {size} </span> </div>
                                   <div className=" capitalize text-base "> <span className=" text-base font-bold  mr-2">color: </span> <span> {color} </span> </div>
                                   <div className=" capitalize text-base "> <span className=" text-base font-bold mr-2">Sleeve: </span> <span> {Sleeve} </span> </div>
                                   <div className=" capitalize text-base "> <span className=" text-base font-bold mr-2">discount: </span> <span> {discount}% </span> </div>
                                   <div className="capitalize  text-base "> <span className=" text-base font-bold mr-2">quality: </span> <span> {quality} </span> </div>
                                   <div className="capitalize  text-base "> <span className=" text-base font-bold mr-2">runningCategory: </span> <span> {runningCategory} </span> </div>
                                   <div className="capitalize  text-base "> <span className=" text-base font-bold mr-2">Occasion: </span> <span> {Occasion} </span> </div>
                                   <div className=" my-2  flex gap-2  items-center"> <div className=" text-base capitalize font-bold mr-2">Share: </div> <div className="  flex gap-2 items-center ">
                                        <div className=" p-[4px] rounded-full  border border-black  text-purple-500">
                                             <AiFillInstagram size={18}></AiFillInstagram>
                                        </div>
                                        <div className=" p-[4px] rounded-full  border border-black text-blue-500  ">
                                             <BsFacebook size={18} ></BsFacebook>
                                        </div>
                                        <div className=" p-[4px] text-blue-500 rounded-full  border border-black " >
                                             <FaLinkedin size={18}></FaLinkedin>
                                        </div>
                                   </div>
                                   </div>


                              </div>

                         </div>
                    </div>

                    <div className=" mt-9">
                         <h1 className=" text-center text-base md:text-2xl xl:text-3xl font-medium "> Recommended for you</h1>
                         <hr className=" my-4" />



                         <div className=" mt-9  grid md:grid-cols-2 xl:grid-cols-4 gap-9">
                              {data?.data.slice(0, limit).map(item => <ProductCard key={item._id} card={item}></ProductCard>)}
                         </div>




                         {
                              data?.data?.length <= limit ? "" : <div className=" text-center">
                                   <div onClick={() => setSetLimit(limit + 10)} className="  bg-black  hover:bg-[#e600e6c0]  px-4 py-2 rounded text-base md:text-xl font-medium  text-white  my-5 inline-block mx-auto cursor-pointer text-center ">  <div className=" flex  items-center justify-center gap-2  ">
                                        <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                                   </div>
                              </div>
                         }
                    </div>

               </div>





               {
                    IsModal == true ? <div className=" fixed  overflow-hidden top-0 left-0 right-0  z-50 bg-[#000000ca] flex justify-center items-center  h-screen ">
                         <div>
                              <img className=" w-[80vw]  h-[80vh]    object-contain" src={Image} alt="" />


                         </div>

                         <div onClick={() => setIsModal(false)} className=" text-red-500 absolute top-0 right-0 p-2 m-4 md:px-16 ">
                              <AiOutlineClose size={24}></AiOutlineClose>
                         </div>
                    </div> : null
               }

          </div>
     );
};

export default Product;