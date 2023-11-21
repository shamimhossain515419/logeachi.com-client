
import Question from "./Question";
import contactImage from '../../../public/Ions/1153892_medium2000.png'
import SectionTitle from "../Title/SectionTitle";
import { FaRocketchat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Message = () => {
     return (
          <div className=" px-10">
               <div>



                    <div className=" text-center py-4">
                         <SectionTitle title={" My Massage"}></SectionTitle>
                    </div>
                    <div>


                         <div className=" grid md:grid-cols-2 gap-5 md:gap-9 ">
                              <div className=" p-3">
                                   <p className=" text-base md:text-xl font-medium "> Thank you for choosing Logeachi.com! We value your feedback and are here to assist you. Whether you have a question about your order, need help with product information, or simply want to share your thoughts, we're here to listen</p>

                                   <img className="  h-[300px] object-fill " src={contactImage} alt="" />
                              </div>
                              <div>
                                   <div>
                                        <Question></Question>
                                        <Link target="_blank" to={"https://www.facebook.com/Shamim515419"} className="   bg-[#e50ae9]   inline-block px-6 cursor-pointer  rounded-lg text-white py-3    ">
                                             <div className=" flex items-center  gap-3">
                                             <FaRocketchat size={28} />
                                             <span className=" text-base md:text-xl font-medium"> Start Chart </span>
                                             </div>
                                        </Link>

                                   </div>

                              </div>
                         </div>
                    </div>

               </div>



                <div>
                     <div>
                           
                     </div>
                </div>
          </div>

     );
};

export default Message;