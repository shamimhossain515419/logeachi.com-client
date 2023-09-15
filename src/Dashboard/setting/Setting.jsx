import { useState } from "react";

const Setting = () => {
     const [confrimPass, setConfrimPass] = useState(true);
     const [Open, setOpen] = useState(false);


     const handleSubmit = (e) => {
          e.preventDefault();
          const from = e.target;
          const name = from.name.value;
          const email = from.email.value;
          const password = from.password.value;
          const password2 = from.password2.value;
          if (password == password2) {
               // setConfrimPass(true);
               // createUser(email, password).then(result => {
               //      if (result) {
               //           updateUserProfile(name);
               //           navigate('/')
               //           toast.success('সফলভাবে নিবন্ধন হয়েছে!')

               //      }

               // }).then(error => {

               // })

          }


     }

     return (
          <div className=" ">
               <div className=" max-w-[700px] mx-auto">

                    <form onSubmit={handleSubmit} >

                         <div className=" w-full  py-2 relative">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="name"> বর্তমান
                                   পাসওয়ার্ড</label>
                              <input required className=" relative   py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type={`${Open == true ? "text" : "password"}`} name="password" placeholder=" বর্তমান পাসওয়ার্ড" id="" />

                         </div>
                         <div className=" w-full  py-2 relative">
                              <label className=" block text-base md:text-xl  font-light py" htmlFor="name"> নতুন পাসওয়ার্ড</label>
                              <input required className=" relative   py-2 px-3  w-full   outline-none   my-2 border  focus:border-[#e50ae9] focus:bg-[#cf43ae5a]" type={`${Open == true ? "text" : "password"}`} name="password" placeholder=" নতুন পাসওয়ার্ড" id="" />
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
                         <div className=" text-xl font-normal cursor-pointer " onClick={() => setOpen(!Open)} >  {Open ? "Hide password" : "Show password"}</div>

                         <div className="  text-end text-white mx-auto inline-block bg-black px-4 py-2 my-2">
                              <button>আপডেট করুন </button>
                         </div>

                    </form>
               </div>
          </div>
     );
};

export default Setting;