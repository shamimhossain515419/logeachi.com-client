import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ProductCard from "../../../Component/ProductCard/ProductCard";

import SectionTitle from "../../../Component/Title/SectionTitle";
import Container from "../../../Component/Container";


const TrendingProduct = () => {

     const [product, setProduct] = useState([]);

     const [limit, setSetLimit] = useState(6)
     useEffect(() => {
          fetch(`https://logeachi-com-server.vercel.app/product?category=$minprizce=${0}&maxprice=${10000}&name=`).then(res => res.json()).then(data => {
               const projectData = data.sort((a, b) => new Date(b.addTime) - new Date(a.addTime));
               setProduct(projectData)
          }
          )
     }, []);

     const Trending = product?.filter(item => item?.runningCategory === "Trending");

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
                         Trending?.length <= limit ? "" : <div className=" mt-4 text-center">
                              <div onClick={() => setSetLimit(limit + 6)} className="  button1 ">  <div className=" flex  items-center justify-center gap-2  ">
                                   <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                              </div>
                         </div>
                    }
               </Container>
          </div >
     );
};

export default TrendingProduct;