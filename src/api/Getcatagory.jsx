import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const GetCategory = (category) => {

     const { data, refetch, isLoading } =  useQuery({
          queryKey: ['product',category],
          queryFn: () =>  axios.get(`https://logeachi-com-server.vercel.app/product/category/${category}`),
       })

     return [data,refetch,isLoading]
};

export default GetCategory;