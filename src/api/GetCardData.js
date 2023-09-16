import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Component/AxioxSecour/AxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Rotues/Authprovider/Authprovider";

const GetCardData = () => {
     const [axiosSecure] = useAxiosSecure();
     const { user } = useContext(AuthContext)
     const { data: addcard, isLoading, refetch } = useQuery({
          queryKey: ['addcard', user?.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/product/addcard/${user?.email}`);
               return res.data;
          },
     });


    
          return [addcard, isLoading, refetch]
     






};

export default GetCardData;