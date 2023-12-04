import { useContext, useState } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Component/AxioxSecour/AxiosSecure";

const Profile = () => {
     const { user, setAddress, updateProfilePhoto, address, open, setOpen } = useContext(AuthContext);
     const [name, setName] = useState(user?.displayName);
     const [axiosSecure] = useAxiosSecure();
     const photo = user?.photoURL;
     const handleSubmit = () => {
          updateProfilePhoto(name, photo).then(result => {
               console.log(result);
               if (result) {
                    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে")
               }

          }).catch(error => {
               toast.error(error.massage)
          })
     }

     console.log(address);

     const handleAddress = async (e) => {
          e.preventDefault();
          const form = e.target;
          const country = form.country.value;
          const city = form.city.value;
          const postcode = form.postcode.value;
          const homenumber = form.homenumber.value;
          const addressData = { country, city, postcode, homenumber, name, email: user?.email }
          console.log(addressData);

          axiosSecure.post('https://logeachi-com-server.vercel.app/address', addressData).then(result => {
               console.log(result);
               if (result?.data?.insertedId) {
                    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে")
               }

          }).catch(e => {
               console.log(e.massage);
               toast.error(e.massage)
          })
     }

   

     return (
          <div>


               <div className=" w-full  py-2">
                    <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">ইমেইল</label>
                    <input value={user?.email} className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder="তোমার  ইমেইল" id="" />
               </div>
               <div className=" w-full  py-2">
                    <label className=" block text-base md:text-xl  font-light py" htmlFor="name"> তোমার নাম</label>
                    <input onChange={(e) => setName(e.target.value)} defaultValue={user?.displayName} className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder="তোমার নাম" id="" />

               </div>


               <div className=" my-4">
                    <div onClick={handleSubmit} className=" cursor-pointer   hover:bg-[#18604a] uppercase  bg-[#60a103] text-xl px-4  inline-block py-2   font-medium  text-white"> আপডেট</div>
               </div>
               <div>
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

                         </div> : null
                    }







               </div>

               <div>
                    {
                         open ? <form action="" onSubmit={handleAddress}>
                              <div>
                              </div>
                              <div>
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">বাড়ি নাম্বার </label>
                                        <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="homenumber" placeholder=" উদাহারনঃ  5412" id="" />
                                   </div>

                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">শহর </label>
                                        <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="city" placeholder=" উদাহারনঃ  বগুড়া
                              " id="" />
                                   </div>
                              </div>
                              <div>
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">পোস্ট কোড</label>
                                        <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="postcode" placeholder=" উদাহারনঃ 5800" id="" />
                                   </div>
                              </div>
                              <div>
                                   <div className=" w-full  py-2">
                                        <label className=" block text-base md:text-xl  font-light py" htmlFor="দেশঃ">দেশঃ</label>
                                        <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="country" placeholder=" উদাহারনঃ  Bangladesh" id="" />
                                   </div>
                              </div>

                              <div className=" flex items-center gap-2">
                                   <button type="submit" className=" cursor-pointer  bg-black uppercase  hover:bg-[#e50ae9] text-xl px-4  inline-block py-2   font-medium  text-white">Submit</button>
                                   <div className=" my-4">
                                        <div onClick={() => setOpen(false)} className=" cursor-pointer  bg-[#e90a0ad9] uppercase  hover:bg-[#e90ab1] text-xl px-4  inline-block py-2   font-medium  text-white"> Cancel</div>
                                   </div>
                              </div>

                         </form> : null
                    }
               </div>





          </div>
     );
};

export default Profile;