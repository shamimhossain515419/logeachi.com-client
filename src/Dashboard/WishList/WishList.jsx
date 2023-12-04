import GetWishList from "../../api/GetWishList";
import WishListCard from "./WishListCard";


const WishList = () => {

     const [wishlist, isLoading, refetch] = GetWishList();

     return (
          <div className="  md:ml-[150px] max-w-[600px]   ">
               <div className=" mt-20">

                    <div className=" max-w-[600px] ">
                         <div className=" my-7   flex  justify-between gap-5 items-center">
                              <div className=" flex items-center gap-10">
                                   <h1 className=" textColor  w-[80px] text-xl font-medium"> Item</h1>
                                   <h1 className=" text-xl font-medium"> Details</h1>
                              </div>
                              <div>
                                   <h2 className=" text-xl font-medium ">Action</h2>
                              </div>
                         </div>
                         <hr className=" h-[2px] bg-black" />
                    </div>

                    <div>
                         {wishlist ? <div>
                              {wishlist?.map(item => <WishListCard key={item._id} card={item}></WishListCard>)
                              }
                         </div> : <>  <h1 className=" text-3xl font-semibold text-center my-5"> এখনো কোন প্রোডাক্ট অ্যাড করা হয়নি </h1> </>
                         }
                    </div>
               </div>
          </div>
     );
};

export default WishList;