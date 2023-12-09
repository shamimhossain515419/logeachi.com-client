import { useEffect, useState } from "react";
import Container from "../../../Component/Container";
import SectionTitle from "../../../Component/Title/SectionTitle";
import CategoryCard from "./CetegoryCard";
import { Categoris } from "../../../utils/Categoris";
import Category from "../Home/Category";

import { HiOutlineCreditCard, HiOutlineCurrencyDollar, HiOutlineTruck } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ProductHome = () => {
     const [category, setCategory] = useState([]);


     useEffect(() => {
          fetch('https://logeachi-com-server.vercel.app/category').then(res => res.json()).then(data => setCategory(data))
     }, [1000]);

     return (
          <div>
               <Container>
                    <div className=" md:grid  md:grid-cols-6 gap-2">




                         <div className=" mt-2 md:col-span-2 categories">
                              <h3>Categories</h3>
                              <ul className="categories_items w-full">
                                   {Categoris.map((category) => (
                                        <Category key={category.id} category={category}></Category>
                                   ))}
                              </ul>
                         </div>

                         <div className=" col-span-4">
                              <div className=" p-3 md:ml-2 flex  flex-wrap  items-center gap-5">
                                   <div className=" services_item flex   items-center gap-2">
                                        <div className=" text-center mx-auto  w-[70px]  h-[70px]  flex justify-center items-center border-[2px] border-[#60a103] p-2 rounded-full">
                                             <HiOutlineCreditCard size={24}></HiOutlineCreditCard>
                                        </div>
                                        <div className="">
                                             <h3 className=" text-base md:text-xl font-normal   md:font-semibold">Secure Payment</h3>
                                             <p className=" text-sm  md:tet-base ">100% secure payment</p>
                                        </div>
                                   </div>

                                   <div className=" services_item  flex   items-center gap-2">
                                        <div className=" text-center mx-auto  w-[70px]  h-[70px]  flex justify-center items-center border-[2px] border-[#60a103] p-2 rounded-full">
                                             <HiOutlineCurrencyDollar size={24}></HiOutlineCurrencyDollar>
                                        </div>
                                        <div className=" text-base md:text-xl font-normal     md:font-semibold">
                                             <h3 className=" text-base md:text-xl font-normal   md:font-semibold">7 Days Return</h3>
                                             <p className=" text-sm  md:tet-base ">If damaged product</p>
                                        </div>
                                   </div>

                                   <div className="services_item flex   items-center gap-2">
                                        <div className=" text-center mx-auto  w-[70px]  h-[70px]  flex justify-center items-center border-[2px] border-[#60a103] p-2 rounded-full ">
                                             <HiOutlineTruck className=" " size={32}></HiOutlineTruck>
                                        </div>
                                        <div className=" text-base md:text-xl font-normal     md:font-semibold">
                                             <h3 className=" text-base md:text-xl font-normal   md:font-semibold">Free Delivery</h3>
                                             <p className=" text-sm  md:tet-base ">For order over $100</p>
                                        </div>
                                   </div>


                              </div>

                              <div className=" p-3">
                                   <SectionTitle title={"Category"}></SectionTitle>
                                   <div className=" grid md:grid-cols-3 xl:grid-cols-5 gap-3 ">
                                        {
                                             category?.map(item => <Link    to={`/product/category?category=${item?.title}&minprice=${0}&maxprice=${1000}&name=`} key={item._id} className="category_image shadowbox rounded-md p-2 h-[220px]">
                                                  <img src={item?.image} alt="health care" />
                                                  <a href="#"> {item?.title} </a>
                                             </Link>)
                                        }

                                   </div>
                              </div>

                         </div>
                    </div>

     
               </Container>
          </div>
     );
};

export default ProductHome;