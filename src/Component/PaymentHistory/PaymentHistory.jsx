import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Rotues/Authprovider/Authprovider";
import useAxiosSecure from "../AxioxSecour/AxiosSecure";
import SectionTitle from "../Title/SectionTitle";

import './paymentHistory.css'
import moment from "moment/moment";
const PaymentHistory = () => {

     const [axiosSecure] = useAxiosSecure();
     const { user } = useContext(AuthContext);
     const [paymentCard, setPaymentCard] = useState([]);

     useEffect(() => {
          axiosSecure?.get(`/orders?email=${user?.email}`).then(result => {
               setPaymentCard(result?.data)
          }).catch(error => {
               console.log(error);
          })
     }, [user?.email]);


     console.log(paymentCard);
     return (
          <div>
               <div className=" text-center mx-auto">
                    <SectionTitle title={"Your Payment History"}></SectionTitle>
               </div>

               {
                    paymentCard?.map(item => <div key={item?._id} className="projcard-container">

                         <div className="projcard projcard-blue">
                              <div className="projcard-innerbox  gap-2">
                                   <img className="projcard-img" src={item?.product?.[0]?.image1} />
                                   <div className="projcard-textbox">
                                        <div className="projcard-title primaryColor capitalize"> {item?.product?.[0]?.name} </div>
                                        <div className="projcard-subtitle capitalize">{item?.product?.[0]?.category}</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                             <h1>  {item?.product?.[0]?.description}</h1>


                                             <div className="  text-xl font-medium">
                                                  Date: {moment(item?.createdAt).format("dddd, MMMM Do YYYY,")}
                                             </div>
                                             <h1 className="  text-xl font-medium"> Address: {item?.address}  </h1>

                                        </div>


                                        <div className="projcard-tagbox  ">
                                             <span className="projcard-tag cursor-pointer text-base md:text-xl py-1"> ৳ {item?.price} </span>
                                             <span className="projcard-tag cursor-pointer text-base md:text-xl py-1"> Details </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>)
               }


          </div>
     );
};

export default PaymentHistory;