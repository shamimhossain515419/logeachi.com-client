import { useContext, useState } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import toast from "react-hot-toast";

const Profile = () => {
     const { user, updateProfilePhoto } = useContext(AuthContext);
     const [name, setName] = useState(user?.displayName);
     const photo = user?.photoURL;
     const handleSubmit = () => {
          updateProfilePhoto(name, photo).then(result => {
               console.log(result);
               if (result) {
                    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে")
               }

          }).catch(error => {
               console.log(error?.massage);
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


               <div>
                    নামঃ শামীম হোসেন

                    ঠিকানা: 5800

                    শহর: বগুড়া

                    দেশঃ বাংলাদেশ

                    পোস্টাল কোড: 5800
               </div>

               <div>
                    <div>
                         <div className=" w-full  py-2">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">তোমার  নাম</label>
                              <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder=" উদাহারনঃ   শামীম হোসেন" id="" />
                         </div>
                    </div>
                    <div>
                         <div className=" w-full  py-2">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">বাড়ি নাম্বার </label>
                              <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="address" placeholder=" উদাহারনঃ  5412" id="" />
                         </div>
                         <div className=" w-full  py-2">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">শহর </label>
                              <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="city" placeholder=" উদাহারনঃ  বগুড়া
                              " id="" />
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
                              <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder=" উদাহারনঃ 5800" id="" />
                         </div>
                    </div>
                    <div>
                         <div className=" w-full  py-2">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="Email">তোমার  নাম</label>
                              <input className="  py-2 px-3  w-full text-base   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder=" উদাহারনঃ   শামীম হোসেন" id="" />
                         </div>
                    </div>
               </div>

               <div>
                    <div onClick={handleSubmit} className=" cursor-pointer  bg-black uppercase  hover:bg-[#e50ae9] text-xl px-4  inline-block py-2   font-medium  text-white"> আপডেট</div>
               </div>



          </div>
     );
};

export default Profile;