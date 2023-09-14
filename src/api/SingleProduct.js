import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const SingleProduct = (id) => {
     const { data:singleProduct, refetch, isLoading:singleLoading } =  useQuery({
          queryKey: ['product',id],
          queryFn: () =>  axios.get(`http://localhost:5000/product/${id}`),
       })

     return [singleProduct,refetch,singleLoading]
   
};

export default SingleProduct;