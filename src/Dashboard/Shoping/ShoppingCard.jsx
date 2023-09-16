import { BsTrash } from "react-icons/bs";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import GetCardData from "../../api/GetCardData";
import toast from "react-hot-toast";


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
                              <h1 className=" uppercase text-xl font-semibold "> {name} </h1>
                              <h1 className="text-base   font-medium"> Price: ${price} </h1>
                              <h1 className="text-base    font-medium"> Discount : {discount}% </h1>
                              <h1 className="text-base    font-medium"> Delivery : {60}</h1>
                              <h1 className="text-base    font-medium"> Quantity : {Quantity}</h1>
                              <h1 className="text-base  text-[#f35757]  pt-7  font-medium"> Total: ${descountTotal.toFixed(2)} </h1>

                         </div>
                         <div className=" ">
                              <div onClick={() => handleDelete(_id)} className=" my-5 bg-[#ff26cc36] text-center cursor-pointer bg-black text-white  rounded py-2 px-4 text-base md:text-xl font-normal">
                                   <BsTrash className=" text-center inline-block text-red-500" size={24}></BsTrash>
                              </div>
                              <div className=" uppercase bg-black my-5 text-white  text-center rounded py-2 px-4 cursor-pointer text-base md:text-xl font-normal">
                                   checkout
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ShoppingCard;