import { useEffect, useState } from "react";
import Container from "../../../Component/Container";
import SectionTitle from "../../../Component/Title/SectionTitle";
import CategoryCard from "./CetegoryCard";

const ProductHome = () => {
     const [category,setCategory]=useState([]);
    

     useEffect(()=>{
          fetch('https://logeachi-com-server.vercel.app/category').then(res=>res.json()).then(data=> setCategory(data))
     },[1000]);

     return (
          <div>
               <Container>
                    <SectionTitle title={"Shop By Category"}></SectionTitle>

                    <div className=" my-10">
                         <div className=" grid md:grid-cols-5 gap-7 ">
                          { category && category.map(item=> <CategoryCard key={item._id} card={item}></CategoryCard>)};
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default ProductHome;