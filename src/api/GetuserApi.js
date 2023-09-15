import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Component/AxioxSecour/AxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Rotues/Authprovider/Authprovider";



const GetUserApi = () => {
     const [axiosSecure] = useAxiosSecure();
     const { user } = useContext(AuthContext)
     const { data:CurrentUser, isLoading } = useQuery({
          queryKey: ['users', user?.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/users?email=${user?.email}`);
               return res.data;
          },
     })
     return [CurrentUser, isLoading];


};

export default GetUserApi;