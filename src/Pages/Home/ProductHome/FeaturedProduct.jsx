import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/Title/SectionTitle";
import ProductCard from "../../../Component/ProductCard/ProductCard";
import Container from "../../../Component/Container";
 import {BiChevronDown} from 'react-icons/bi'

const FeaturedProduct = () => {
     const [product, setProduct] = useState([]);

     const [limit, setSetLimit] = useState(6)
     useEffect(() => {
          fetch('https://logeachi-com-server.vercel.app/product').then(res => res.json()).then(data => setProduct(data))
     }, []);



     return (
          <div>
               <Container>
                    <SectionTitle title={"Featured product"}></SectionTitle>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-6">
                         {
                              product.slice(0, limit)?.map(item => <ProductCard key={item._id} card={item}></ProductCard>)
                         }
                    </div>

                    {
                         product?.length <= limit ? "" :  <div className=" text-center">
                              <div onClick={() => setSetLimit(limit + 6)} className="  bg-black  hover:bg-[#e600e6c0]  px-4 py-2 rounded text-base md:text-xl font-medium  text-white  my-5 inline-block mx-auto cursor-pointer text-center ">  <div className=" flex  items-center justify-center gap-2  ">
                                   <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                              </div>
                         </div> 
                    }
               </Container>
          </div>
     );
};

export default FeaturedProduct;