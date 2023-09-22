
import Container from "../../Component/Container";
import { useParams } from "react-router-dom";
import GetCardData from "../../api/GetCardData";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";


const PaymentCard = () => {
const [axiosSecure]=useAxiosSecure();
     const { user } = useContext(AuthContext)
     const paramsId = useParams();
     const [addcard, isLoading, refetch] = GetCardData();
     const filter = addcard?.find(item => item._id == paramsId?.id);
     let totalPrice = filter?.price * filter?.Quantity;
     const discountAmount = (totalPrice * filter?.discount) / 100;
     const TotalPrice = totalPrice - discountAmount + 60;
     console.log(filter);



     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const number = from.number.value;
          const name = from.name.value;
          const address = from.address.value;
          const post = from.post.value;
          const PaymentData = { name: filter?.name, price: TotalPrice, email: user?.email, userName: name, post, address, number, }
          console.log(PaymentData);
          axiosSecure.post('/order', PaymentData).then(result => {
               console.log(result);
               // if (result) {
               //      window.location.replace(result?.data?.url)
               // }
          }).catch(error => {
               console.log(error);
          })

     }

     return (
          <div className=" md:mt-20">


               <Container>
                    <div className=" w-[1000px] mx-auto  grid md:grid-cols-2 gap-10 justify-center  ">
                         <div className=" my-2">
                              <form onSubmit={handleSubmit}>
                                   <div className=" w-full ">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="number">নাম্বার
                                        </label>
                                        <input className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="number" id="" placeholder="তোমার  নাম্বার" />
                                   </div>
                                   <div className=" w-full ">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="number">পোস্ট কোড
                                        </label>
                                        <input className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="post" id="" placeholder="পোস্ট কোড" />
                                   </div>
                                   <div className=" w-full ">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="number"> ঠিকানা

                                        </label>
                                        <input className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="address" id="" placeholder="ঠিকানা" />
                                   </div>
                                   <div className=" w-full ">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="number">
                                             তোমার  নাম
                                        </label>
                                        <input className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" id="" />
                                   </div>
                                   <div className=" hover:bg-[#e600e6fa] text-center mt-2  bg-black text-white cursor-pointer   p-2 ">
                                        <button type="submit" className=" text-2xl font-normal">Pay </button>
                                   </div>

                              </form>

                         </div>


                         <div className=" ml-20">
                              <div>
                                   <img className=" max-h-[200px] max-w-[200px] object-contain" src={filter?.image1} alt="" />
                                   <h1 className=" text-base  font-medium"> {filter?.description} </h1>
                                   <h1 className=" text-base  font-medium ">Quantity: {filter?.Quantity} </h1>
                                   <h1 className=" text-xl font-normal text-red-400 mt-6"> Total Price : ৳  {TotalPrice} </h1>
                              </div>
                         </div>
                    </div>
               </Container>



          </div>
     );
};

export default PaymentCard;