import { Link, useNavigate } from "react-router-dom";
import Container from "../../Component/Container";
import { useContext, useState } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Register = () => {
    const [confrimPass, setConfrimPass] = useState(true)
     const [Open, setOpen] = useState(false)
     const { createUser, updateUserProfile } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const from = e.target;
          const name = from.name.value;
          const email = from.email.value;
          const password = from.password.value;
          const password2 = from.password2.value;
          if (password == password2) {
               setConfrimPass(true);
               createUser(email, password).then(result => {
                    if (result) {
                         updateUserProfile(name);
                         const User = { name, password, email, status: 'user' };
                         axios.post('http://localhost:5000/users', User).then(result => {
                              if (result) {
                                   navigate('/')
                                   toast.success('সফলভাবে নিবন্ধন হয়েছে!')
                              }

                         })
                    }

               }).then(error => {

               })

          }


     }


     return (
          <div className=" my-11">
               <div>


                    <Container>
                         <div className=" grid md:grid-cols-2 gap-4 min-h-[80vh] ">
                              <div className=" w-full flex justify-center items-center gap-2 flex-col">
                                   <h1 className=" text-lg md:text-2xl font-bold my-2">
                                        কোনো একাউন্ট  থাকলে লগইন  করুন
                                   </h1>
                                   <Link to={'/account/login'} className="  text-white px-4 py-2 rounded-lg inline-block bg-[#2756ff]"> লগইন
                                   </Link>
                              </div>
                              <div className=" my-5">


                                   <div>
                                        <h1 className=" text-base md:text-xl 2xl:text-3xl my-4 "> লগইন !</h1>

                                        <form onSubmit={handleSubmit}>

                                             <div className=" w-full  py-2">
                                                  <label className=" block text-base md:text-xl  font-light py" htmlFor="name"> তোমার নাম</label>
                                                  <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="text" name="name" placeholder="তোমার নাম" id="" />

                                             </div>
                                             <div className=" w-full  py-2">
                                                  <label className=" block text-base md:text-xl  font-light py" htmlFor="name">ইমেইল</label>
                                                  <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type="email" name="email" placeholder="ইমেইল" id="" />

                                             </div>
                                             <div className=" w-full  py-2 relative">
                                                  <label className=" block text-base md:text-xl  font-light py" htmlFor="name">  পাসওয়ার্ড</label>
                                                  <input required className=" relative   py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type={`${Open == true ? "text" : "password"}`} name="password" placeholder="পাসওয়ার্ড" id="" />
                                                  {
                                                       confrimPass == false ? <p className="text-red-400 text-sm md:text-base "> Password not match </p> : <></>

                                                  }


                                             </div>
                                             <div className=" w-full  py-2">
                                                  <label className=" block text-base md:text-xl  font-light py" htmlFor="name">নিশ্চিত করুন পাসওয়ার্ড</label>
                                                  <input required className="  py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type={`${Open == true ? "text" : "password"}`} name="password2" placeholder="নিশ্চিত করুন পাসওয়ার্ড" id="" />
                                                  {
                                                       confrimPass == false ? <p className="text-red-400 text-sm md:text-base "> Password not match </p> : <></>

                                                  }
                                             </div>
                                             <div className=" my-4 text-xl font-normal cursor-pointer " onClick={() => setOpen(!Open)} >  {Open ? "Hide password" : "Show password"}</div>
                                             <div>
                                                  <button type="submit" className="  text-white px-4 py-2 rounded-lg inline-block bg-[#2756ff]"> সাবমিট করুন</button>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default Register;