import { useContext } from "react";
import useAxiosSecure from "../Component/AxioxSecour/AxiosSecure";
import { AuthContext } from "../Rotues/Authprovider/Authprovider";
import { useQuery } from "@tanstack/react-query";

const GetWishList = () => {
     const [axiosSecure] = useAxiosSecure();
     const { user } = useContext(AuthContext)
     const { data:wishlist,refetch, isLoading } = useQuery({
          queryKey: ['wishlist', user?.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/product/wishlist/${user?.email}`);
               return res.data;
          },
     })
     return [wishlist, isLoading,refetch];

};

export default GetWishList;