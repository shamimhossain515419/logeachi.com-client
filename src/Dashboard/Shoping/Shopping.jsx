import GetCardData from "../../api/GetCardData";
import ShoppingCard from "./ShoppingCard";



const Shopping = () => {

     const [addcard, isLoading, refetch] = GetCardData();


     return (
          <div>

               <div>
                    {
                         addcard?.length > 0 ? <>

                              <div className=" grid md:grid-cols-2 gap-9 ">
                                   {
                                        addcard?.map(item => <ShoppingCard card={item} key={item?._id}></ShoppingCard> )
                                   }
                              </div>


                         </> : <>
                              <h1 className=" text-3xl font-semibold text-center my-5"> You will see new addresses here after first successful checkout. </h1></>
                    }
               </div>



          </div>

     );
};

export default Shopping;