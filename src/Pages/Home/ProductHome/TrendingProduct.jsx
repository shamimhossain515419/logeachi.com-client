import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../../Component/ProductCard/ProductCard";

import SectionTitle from "../../../Component/Title/SectionTitle";
import Container from "../../../Component/Container";


const TrendingProduct = () => {

     const [product, setProduct] = useState([]);

     const [limit, setSetLimit] = useState(6)
     useEffect(() => {
          fetch('/public/Product.json').then(res => res.json()).then(data => setProduct(data))
     }, []);
 
     const Trending =product?.filter(item=> item?.runningCategory === "Trending");

     return (
          <div>
               <Container>
                    <SectionTitle title={"Trending product"}></SectionTitle>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-6">
                         {
                              Trending.slice(0, limit)?.map(item => <ProductCard key={item._id} card={item}></ProductCard>)
                         }
                    </div>

                    {
                         Trending?.length <= limit ? "" : <div className=" text-center">
                              <div onClick={() => setSetLimit(limit + 6)} className="  bg-black  hover:bg-[#e600e6c0]  px-4 py-2 rounded text-base md:text-xl font-medium  text-white  my-5 inline-block mx-auto cursor-pointer text-center ">  <div className=" flex  items-center justify-center gap-2  ">
                                   <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                              </div>
                         </div>
                    }
               </Container>
          </div >
     );
};

export default TrendingProduct;