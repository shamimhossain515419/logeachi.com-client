import { Link, useNavigate, } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import Container from "../../Component/Container";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
     const [confrimPass, setConfrimPass] = useState(true)
     const [Open, setOpen] = useState(false)
     const { Login, GoogleLogin } = useContext(AuthContext);

     const navigate = useNavigate();
     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const email = from.email.value;
          const password = from.password.value;
          setConfrimPass(true);
          Login(email, password).then(result => {
               if (result) {
                    navigate('/')
                    toast.success('সফলভাবে নিবন্ধন হয়েছে!')
                    from.reset();
               }

          }).then(error => {
               console.log(error.massage);
          })

     }

     const hendleGoogle = () => {
          GoogleLogin().then(result => {
               if (result) {
                    navigate('/')
                    toast.success('সফলভাবে নিবন্ধন হয়েছে!')
               
               }

          }).then(error => {
               console.log(error?.massage);
          })
     }

     return (
          <div className=" my-11">
               <div>


                    <Container>
                         <div className=" grid md:grid-cols-2 gap-4 min-h-[80vh] ">
                              <div className=" w-full flex justify-center items-center gap-2 flex-col">
                                   <h1 className=" text-lg md:text-2xl font-bold my-2">
                                        কোনো একাউন্ট না থাকলে  নিবন্ধন  করুন
                                   </h1>
                                   <Link to={'/account/register'} className="  text-white px-4 py-2 rounded-lg inline-block bg-[#2756ff]"> নিবন্ধন
                                   </Link>
                              </div>
                              <div className=" my-5">


                                   <div>
                                        <h1 className=" text-base md:text-xl 2xl:text-3xl my-4 "> নিবন্ধন করুন !</h1>

                                        <form onSubmit={handleSubmit}>


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

                                             <div className=" my-4 text-xl font-normal cursor-pointer " onClick={() => setOpen(!Open)} >  {Open ? "Hide password" : "Show password"}</div>
                                             <div className=" flex items-center flex-col  gap-2 justify-center ">
                                                  <div>
                                                       <button type="submit" className="  text-white px-4 py-2 rounded-lg inline-block bg-[#2756ff]"> সাবমিট করুন</button>
                                                  </div>
                                                  <button className=" underline">Forget password</button>
                                             </div>
                                        </form>


                                        <div className=" flex gap-2 items-center w-full  py-8">
                                             <div onClick={hendleGoogle} className="w-full bg-black py-[5px] cursor-pointer  rounded-md  flex justify-center items-center gap-2">
                                                  <FcGoogle size={40}></FcGoogle>
                                             </div>
                                             <div className=" w-full bg-[#365bef] text-white py-[5px]   cursor-pointer rounded-md flex justify-center items-center gap-2">
                                                  <BsFacebook size={40}></BsFacebook>
                                             </div>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>

          </div>
     );
};

export default Login;