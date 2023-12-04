import { BsTrash } from "react-icons/bs";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import GetCardData from "../../api/GetCardData";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const ShoppingCard = ({ card }) => {
     const { image1, name, price, Quantity, discount ,_id} = card;
     const [addcard, isLoading, refetch] = GetCardData();
     const [axiosSecure] = useAxiosSecure();
     let totalPrice = price * Quantity
     const discountAmount = (totalPrice * discount) / 100;

     const descountTotal = totalPrice - discountAmount + 60;

     const handleDelete = async (id) => {
          const result = await axiosSecure.delete(`/product/addcard/${id}`);
          if (result) {
               refetch();
               toast.success('সফলভাবে  ডিলিট  হয়েছে!')
          }
     }

     return (
          <div>
               <div className=" my-2 shadowbox p-2  rounded-md " >

                    <div className=" flex gap-8   ">
                         <img className=" w-[150px] rounded" src={image1} alt="" />
                         <div>
                              <h1 className=" uppercase text-lg font-semibold "> {name} </h1>
                              <h1 className="text-sm   font-medium"> Price: ${price} </h1>
                              <h1 className="text-sm    font-medium"> Discount : {discount}% </h1>
                              <h1 className="text-sm    font-medium"> Delivery : {60}</h1>
                              <h1 className="text-sm    font-medium"> Quantity : {Quantity}</h1>
                              <h1 className="text-sm  text-[#60a103]  pt-7  font-medium"> Total: ${descountTotal.toFixed(2)} </h1>

                         </div>
                         <div className=" ">
                              <div onClick={() => handleDelete(_id)} className=" my-5  text-center cursor-pointer bg-[#18604ad2]  text-red-500 rounded py-2 px-4 text-base md:text-xl font-normal">
                                   <BsTrash className=" text-center inline-block " size={24}></BsTrash>
                              </div>
                              <Link to={`/dashboard/paymentcard/${_id}`} className=" cursor-pointer   hover:bg-[#18604a] uppercase  bg-[#60a103] text-xl px-4  inline-block py-2   font-medium  text-white">
                                   checkout
                              </Link>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ShoppingCard;