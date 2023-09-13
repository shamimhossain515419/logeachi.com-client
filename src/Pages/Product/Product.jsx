import { useEffect, useState } from "react";
import SectionTitle from "../../Component/Title/SectionTitle";

const Product = () => {

     const [product,setProduct]=useState([]);

     useEffect(()=>{
          fetch('/public/Product.json').then(res=>res.json()).then(data=> setProduct(data))
     },[]);
      console.log(product);

     return (
          <div>
               
               <SectionTitle></SectionTitle>
          </div>
     );
};

export default Product;