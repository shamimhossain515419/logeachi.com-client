
import Container from "../../Component/Container";
import { useParams } from "react-router-dom";
import GetCardData from "../../api/GetCardData";
import { useContext } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";
import SectionTitle from "../../Component/Title/SectionTitle";




const PaymentCard = () => {
     const [axiosSecure] = useAxiosSecure();
     const { user, open, setOpen, address, userinfo } = useContext(AuthContext)
     const paramsId = useParams();
     // const navigate = useNavigate();
     const [addcard, isLoading, refetch] = GetCardData();
     const filter = addcard?.find(item => item._id == paramsId?.id);
     let totalPrice = filter?.price * filter?.Quantity;
     const discountAmount = (totalPrice * filter?.discount) / 100;
     const TotalPrice = totalPrice - discountAmount;
     console.log(filter);



     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const number = from.number.value;
          const name = from.name.value;
          const address = from.address.value;
          const post = from.post.value;
          const formData = {
               ProductName: filter?.name, userId: userinfo?._id, productId: new Object(filter?._id)
               , price: TotalPrice, email: user?.email, name, post, address, number,
          }
          console.log(formData);

          axiosSecure.post('/payment', formData).then(result => {
               console.log(result);
               if (result) {
                    window.location.replace(result?.data)
               }
          }).catch(error => {
               console.log(error);
          })


     }

     console.log(address);
     const handlePayment = () => {
          const formData = {
               ProductName: filter?.name, userId: userinfo?._id,productId: new Object(filter?._id)
               , price: TotalPrice, email: user?.email, name: user?.displayName, post: address?.postcode
               , address: address?.city, country: address?.country
          }
          axiosSecure.post('/payment', formData).then(result => {
               console.log(result);
               if (result) {
                    window.location.replace(result?.data)
               }
          }).catch(error => {
               console.log(error);
          })

     }

     return (
          <div className=" md:mt-20 flex  flex-col  justify-center items-center min-h-[700px]">


               <div className=" my-9">
                    <SectionTitle title={' Prepare to pay'}></SectionTitle>
               </div>

               <Container>

                    <div className=" w-[1000px] mx-auto  grid md:grid-cols-2  gap-10 justify-center  ">
                         {
                              address?.email && open == false ? <div className=" border border-[#e50ae9] p-4 rounded">

                                   <div>
                                        <h1 className=" text-base  md:text-xl font-semibold "> Name: <small className=" ml-2"> {address?.name} </small> </h1>
                                        <h1 className=" text-base  md:text-xl font-semibold"> Email: <small className=" ml-2"> {address?.email} </small> </h1>
                                        <h1 className=" text-base  md:text-xl font-semibold"> Home address: <small className=" ml-2"> {address?.homenumber} </small> </h1>
                                        <h1 className=" text-base  md:text-xl font-semibold"> Post Code: <small className=" ml-2"> {address?.postcode} </small> </h1>
                                        <h1 className=" text-base  md:text-xl font-semibold"> City: <small className=" ml-2"> {address?.city} </small> </h1>
                                        <h1 className=" text-base  md:text-xl font-semibold"> Country: <small className=" ml-2"> {address?.country} </small> </h1>
                                   </div>

                                   <div className=" my-4">
                                        <div onClick={() => setOpen(true)} className=" cursor-pointer  bg-black uppercase  hover:bg-[#e50ae9] text-xl px-4  inline-block py-2   font-medium  text-white"> New Address</div>
                                   </div>

                              </div> : <div className=" my-2">
                                   <form onSubmit={handleSubmit}>
                                        <div className=" w-full ">
                                             <label className=" block text-base md:text-xl  font-light py" htmlFor="number">নাম্বার
                                             </label>
                                             <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="number" id="" placeholder="তোমার  নাম্বার" />
                                        </div>
                                        <div className=" w-full ">
                                             <label className=" block text-base md:text-xl  font-light py" htmlFor="number">পোস্ট কোড
                                             </label>
                                             <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="number" name="post" id="" placeholder="পোস্ট কোড" />
                                        </div>
                                        <div className=" w-full ">
                                             <label className=" block text-base md:text-xl  font-light py" htmlFor="number"> ঠিকানা

                                             </label>
                                             <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="address" id="" placeholder="ঠিকানা" />
                                        </div>
                                        <div className=" w-full ">
                                             <label className=" block text-base md:text-xl  font-light py" htmlFor="number">
                                                  তোমার  নাম
                                             </label>
                                             <input defaultValue={user?.displayName} className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" id="" />
                                        </div>
                                        <div className=" hover:bg-[#e600e6fa] text-center mt-2  bg-black text-white cursor-pointer   p-2 ">
                                             <button type="submit" className=" text-2xl font-normal">Pay </button>
                                        </div>

                                   </form>

                              </div>
                         }




                         <div className=" ml-20">
                              <div>
                                   <img className=" max-h-[200px] max-w-[200px] object-contain" src={filter?.image1} alt="" />
                                   <h1 className=" text-base  font-medium"> {filter?.description} </h1>
                                   <h1 className=" text-base  font-medium ">Quantity: {filter?.Quantity} </h1>
                                   <h1 className=" text-xl font-normal text-red-400 mt-6"> Total Price : ৳  {TotalPrice} </h1>
                              </div>
                         </div>
                    </div>

                    {
                         address?.email && open == false ? <div onClick={handlePayment} className=" hover:bg-[#e600e6fa]    text-center mt-10  bg-black text-white cursor-pointer   p-2 ">
                              <button className=" text-2xl font-normal">Pay </button>
                         </div> : null
                    }


               </Container>



          </div>
     );
};

export default PaymentCard;