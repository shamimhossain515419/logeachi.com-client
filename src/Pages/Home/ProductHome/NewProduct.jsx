import { useEffect, useState } from "react";
import Container from "../../../Component/Container";
import SectionTitle from "../../../Component/Title/SectionTitle";
import ProductCard from "../../../Component/ProductCard/ProductCard";
import { BiChevronDown } from "react-icons/bi";


const NewProduct = () => {

     const [product, setProduct] = useState([]);

     const [limit, setSetLimit] = useState(6)
     useEffect(() => {
          fetch(`https://logeachi-com-server.vercel.app/product?category=$minprizce=${0}&maxprice=${10000}&name=`).then(res => res.json()).then(data => 
           {
                const projectData = data.sort((a, b) => new Date(b.addTime) - new Date(a.addTime));
               setProduct(projectData)
           }
          )
     }, []);

     return (
          <div>

               <Container>
                    <SectionTitle title={"New product"}></SectionTitle>


                    <div>
                         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-6">
                              {
                                   product.slice(0, limit)?.map(item => <ProductCard key={item._id} card={item}></ProductCard>)
                              }
                         </div>

                         {
                              product?.length <= limit ? "" : <div className=" mt-4 text-center">
                                   <div onClick={() => setSetLimit(limit + 6)} className="  button1 ">  <div className=" flex  items-center justify-center gap-2  ">
                                        <span className=" text-base"> See More </span> <BiChevronDown size={18}></BiChevronDown></div>
                                   </div>
                              </div>
                         }
                    </div>
               </Container>

          </div>
     );
};

export default NewProduct;