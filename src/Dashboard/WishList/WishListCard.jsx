import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import GetWishList from "../../api/GetWishList";
import toast from "react-hot-toast";


const WishListCard = ({ card }) => {
     const [wishlist, isLoading, refetch] = GetWishList();
     const [axiosSecure] = useAxiosSecure();
     const { image1, description, _id, id } = card;

     const handleDelete = async (id) => {
          const result = await axiosSecure.delete(`/product/wishlist/${id}`);
          if (result) {
               refetch();
               toast.success('সফলভাবে  ডিলিট  হয়েছে!')
          }
     }

     return (

          <div className=" max-w-[600px]   ">
               <div className=" my-7   flex  justify-between gap-5 items-center">
                    <div className=" flex gap-2 items-center ">
                         <Link to={`/product/${id}`}> <img className=" h-[80px]  w-[80px]  object-cover" src={image1} alt="" /></Link>
                         <div>
                              <h1> {description} </h1>
                         </div>
                    </div>

                    <div onClick={() => handleDelete(_id)} className=" bg-[#ff26cc36] p-2 rounded-full cursor-pointer">
                         <BsTrash className=" text-red-500" size={24}></BsTrash>
                    </div>

               </div>
               <hr />
          </div>
     );
};

export default WishListCard;